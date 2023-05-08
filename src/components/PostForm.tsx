import { SubmitHandler, useForm } from "react-hook-form";

import Form from "@/shared/Form";
import { Box, Button } from "@mui/material";
import { AttachFile, ColorLens } from "@mui/icons-material";
import axios from "@/api/axios";

type PostForm = {
  username: string;
  text: string;
  tags?: string;
  selectedFile?: string;
};

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostForm>();

  const onSubmit: SubmitHandler<PostForm> = async ({
    username = "Ani",
    text,
  }: PostForm) => {
    try {
      const request = await axios.post(
        "/posts",
        JSON.stringify({ username, text }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      const response = await request.data;
      console.log(response);
    } catch (err) {
      throw new Error("Что-то пошло не так");
    }
  };

  return (
    <Form
      onSubmit={onSubmit}
      handleSubmit={handleSubmit}
      width="300px"
      height="90px"
    >
      <input
        placeholder="Что нового?"
        {...register("text", {
          required: "Заполните поле",
        })}
      />
      <p>{errors.text?.message}</p>
      <Box sx={{ display: "flex", alignItems: "center", borderTop: 1 }}>
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
