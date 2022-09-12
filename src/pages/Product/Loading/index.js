import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => (
  <>
    <Skeleton variant="rectangular" width="100%" height={150} sx={{ mb: 2 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
  </>
);

export default Loading;
