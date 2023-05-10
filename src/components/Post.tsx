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

import { Favorite, FavoriteBorder } from "@mui/icons-material";

import { theme } from "@/theme";

import { formatDate } from "@/utils/formatDate";
import { memo } from "react";
import { handleLike } from "@/store/likes";

type PostProps = {
  id: string;
  username: string;
  text: string;
  timestamp: string;
  selectedFile?: string;
  likeCount: number;
  tags?: string[];
};

const StyledCard = styled(Card)({
  width: "300px",
  marginBottom: "20px",
  padding: "0px",
  backgroundColor: "#1E293B",
});

const StyledCardContent = styled(CardContent)({
  maxHeight: "100px",
  overflowY: "scroll",
});

const StyledCardHeader = styled(CardHeader)({
  color: "white",
});

const Post = memo(
  ({ id, username, text, timestamp, likeCount, selectedFile }: PostProps) => {
    return (
      <StyledCard>
        <StyledCardHeader
          avatar={
            <Avatar sx={{ bgcolor: theme.palette.primary.main }}>
              {username.split("")[0]}
            </Avatar>
          }
          title={username}
          subheader={formatDate(timestamp)}
        />
        {selectedFile ? (
          <CardMedia component="img" height="40%" image={selectedFile} />
        ) : null}

        <StyledCardContent>
          <Typography variant="body2">{text}</Typography>
        </StyledCardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="like" onClick={() => handleLike(id)}>
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
          </IconButton>
          <Typography variant="body2">
            {likeCount === 0 ? "" : likeCount}
          </Typography>
        </CardActions>
      </StyledCard>
    );
  }
);

export default Post;
