import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Checkbox,
  styled,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
} from "@mui/icons-material";

import { formatDate } from "@/utils/formatDate";

type PostProps = {
  username: string;
  text: string;
  timestamp: string;
  tags?: string[];
};

const StyledCard = styled(Card)({
  width: "300px",
  height: "400px",
  marginBottom: "20px",
  padding: "0px",
  backgroundColor: "#1E293B",
});

const StyledCardContent = styled(CardContent)({
  height: "25%",
  overflowY: "scroll",
});

const Post = ({ username, text, timestamp }: PostProps) => {
  return (
    <StyledCard>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>}
        title={username}
        subheader={formatDate(timestamp)}
      />
      <CardMedia
        component="img"
        height="40%"
        image="https://images.unsplash.com/photo-1504672281656-e4981d70414b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3570&q=80"
      />
      <StyledCardContent>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </StyledCardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        </IconButton>
        <IconButton aria-label="comments">
          <ChatBubbleOutline />
        </IconButton>
      </CardActions>
    </StyledCard>
  );
};

export default Post;
