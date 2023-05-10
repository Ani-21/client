import { CardActions, Skeleton } from "@mui/material";

export const SkeletonPost = () => {
  return (
    <Skeleton variant="rounded" width="300px" height="400px">
      <Skeleton variant="circular" width={56} height={56} />
      <Skeleton height="40%" />
      <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

      <CardActions disableSpacing>
        <Skeleton variant="rounded" width="56px" height="70px" />
        <Skeleton variant="rounded" width="56px" height="70px" />
      </CardActions>
    </Skeleton>
  );
};
