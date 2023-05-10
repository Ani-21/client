import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { menuItems } from "../constants";

const useTabTitle = (title: string) => {
  const location = useLocation();
  const paths = location.pathname.split("/");
  const currentLocation = paths.at(-1) || "";

  useEffect(() => {
    if (title) {
      document.title = `on.Connect ${title}`;
    } else {
      const matchedPath = menuItems.find((item) =>
        item.path.includes(currentLocation)
      );
      document.title = `on.Connect ${matchedPath?.text || ""}`;
    }
  }, [title, currentLocation]);
};

export default useTabTitle;
