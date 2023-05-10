import { useRef, ChangeEvent } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useStore } from "effector-react";

import Form from "@/shared/Form";
import { Box, Button, Input, Typography } from "@mui/material";
import { AttachFile } from "@mui/icons-material";
import axios from "@/api/axios";

import { $authorization } from "@/store/authorization";

type PostForm = {
  username: string;
  text?: string;
  tags?: string;
  selectedFile?: File;
};

const PostForm = ({ username }: PostForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostForm>();

  const store = useStore($authorization);
  const token = store.token;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const formData = new FormData();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    const file = event.target.files[0];
    formData.append("selectedFile", file);
  };

  const handleOpenFileModal = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const onSubmit: SubmitHandler<PostForm> = async ({
    username,
    text,
    selectedFile,
  }: PostForm) => {
    try {
      const request = await axios.post(
        "/posts",
        JSON.stringify({ username, text, selectedFile }),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      return await request.data;
    } catch (err) {
      throw new Error("Что-то пошло не так");
    } finally {
      reset();
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      width="300px"
      height="120px"
    >
      <Input
        sx={{ display: "none" }}
        value={username}
        {...register("username")}
      />
      <Input
        placeholder="Что нового?"
        {...register("text", {
          required: "Заполните поле",
        })}
        sx={{
          color: "white",
        }}
      />
      <input
        {...register("selectedFile")}
        onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
        ref={fileInputRef}
        style={{ display: "none" }}
        type="file"
        accept="image/*,.png,.jpg,.gif,.web"
      />
      <Typography>{errors.text?.message}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Button onClick={handleOpenFileModal}>
          <AttachFile />
        </Button>
        <Button type="submit">Опубликовать</Button>
      </Box>
    </Form>
  );
};

export default PostForm;
