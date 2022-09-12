import { Skeleton } from "@mui/material";
import React from "react";

const Loading = () => (
  <div data-testid="product-page-loading">
    <Skeleton variant="rectangular" width="100%" height={150} sx={{ mb: 2 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
    <Skeleton variant="rectangular" height={20} sx={{ mb: 1 }} />
  </div>
);

export default Loading;
