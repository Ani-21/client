import Form from "@/shared/Form";
import { Box, Button, TextareaAutosize } from "@mui/material";
import { AttachFile, ColorLens } from "@mui/icons-material";

const PostForm = () => {
  return (
    <Form
      onSubmit={() => {}}
      handleSubmit={() => {}}
      width="300px"
      height="90px"
      btnText="Опубликовать"
    >
      <TextareaAutosize
        placeholder="Что нового?"
        style={{
          padding: "10px",
          border: 0,
          outline: 0,
          resize: "none",
        }}
      />
      <Box sx={{ display: "flex", alignItems: "center", borderTop: 1 }}>
        <Button>
          <AttachFile />
        </Button>
        <Button>
          <ColorLens />
        </Button>
        <Button>Опубликовать</Button>
      </Box>
    </Form>
  );
};

export default PostForm;
