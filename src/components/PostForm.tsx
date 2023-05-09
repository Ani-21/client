import { SubmitHandler, useForm } from "react-hook-form";

import Form from "@/shared/Form";
import { Box, Button, Input } from "@mui/material";
import { AttachFile, ColorLens } from "@mui/icons-material";
import axios from "@/api/axios";

type PostForm = {
  username: string;
  text?: string;
  tags?: string;
  selectedFile?: string;
};

const PostForm = ({ username }: PostForm) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<PostForm>();

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
          headers: { "Content-Type": "application/json" },
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
      height="90px"
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
      />
      <p>{errors.text?.message}</p>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Button>
          <AttachFile />
        </Button>
        <Button>
          <ColorLens />
        </Button>
        <Button type="submit">Опубликовать</Button>
      </Box>
    </Form>
  );
};

export default PostForm;
