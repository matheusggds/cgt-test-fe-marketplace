import { Grid, Skeleton } from "@mui/material";
import React from "react";

const Loading = () => (
  <Grid container spacing={2}>
    {[0, 0, 0, 0, 0, 0, 0, 0].map((_, idx) => (
      <Grid item md={3} sm={4} xs={6} key={idx}>
        <Skeleton variant="rectangular" height={150} sx={{ mb: 2 }} />
        <Skeleton
          variant="rectangular"
          width={100}
          height={25}
          sx={{ mb: 1 }}
        />
        <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
        <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
      </Grid>
    ))}
  </Grid>
);

export default Loading;
