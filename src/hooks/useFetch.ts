import { useEffect, useReducer, useRef } from "react";
import { useStore } from "effector-react";
import axios from "@/api/axios";
import { $authorization } from "@/store/authorization";

interface State<T> {
  data?: T;
  loading?: boolean;
  error?: Error;
}

type Cache<T> = { [url: string]: T };

type Action<T> =
  | { type: "loading" }
  | { type: "fetched"; payload: T }
  | { type: "error"; payload: Error };

function useFetch<T = unknown>(url?: string): State<T> {
  const store = useStore($authorization);
  const token = store.token;
  const cache = useRef<Cache<T>>({});

  const cancelRequest = useRef<boolean>(false);

  const initialState: State<T> = {
    error: undefined,
    data: undefined,
    loading: undefined,
  };

  const fetchReducer = (state: State<T>, action: Action<T>): State<T> => {
    switch (action.type) {
      case "loading":
        return { ...initialState, loading: true };
      case "fetched":
        return { ...initialState, data: action.payload };
      case "error":
        return { ...initialState, error: action.payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(fetchReducer, initialState);

  useEffect(() => {
    if (!url) return;

    cancelRequest.current = false;

    const fetchData = async () => {
      dispatch({ type: "loading" });

      if (cache.current[url]) {
        dispatch({ type: "fetched", payload: cache.current[url] });
        return;
      }

      try {
        const response = await axios(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (response.status !== 200) {
          throw new Error(response.statusText);
        }

        const data = (await response.data) as T;
        cache.current[url] = data;
        if (cancelRequest.current) return;

        dispatch({ type: "fetched", payload: data });
      } catch (error) {
        if (cancelRequest.current) return;

        dispatch({ type: "error", payload: error as Error });
      }
    };

    void fetchData();

    return () => {
      cancelRequest.current = true;
    };
  }, [url, store.token]);

  return state;
}

export default useFetch;
