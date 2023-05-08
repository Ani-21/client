import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  Checkbox,
  Skeleton,
  styled,
} from "@mui/material";
import {
  Favorite,
  FavoriteBorder,
  ChatBubbleOutline,
} from "@mui/icons-material";

const StyledCard = styled(Card)({
  width: "300px",
  height: "400px",
  marginBottom: "20px",
  padding: "0px",
});

const StyledCardContent = styled(CardContent)({
  height: "25%",
  overflowY: "scroll",
});

export const SkeletonPost = () => {
  return (
    <StyledCard>
      <Skeleton>
        <CardHeader avatar={<Avatar sx={{ bgcolor: "red" }}>R</Avatar>} />
      </Skeleton>
      <Skeleton height="40%" />
      <StyledCardContent>
        <Skeleton>
          <Typography variant="body2" color="text.secondary">
            Skeleton
          </Typography>
        </Skeleton>
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
