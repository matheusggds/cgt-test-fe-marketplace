import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Error = () => (
  <Box sx={{ mt: 20, mb: 20 }}>
    <Typography variant="h5" align="center" color="error">
      Oops! We have a error, try again later
    </Typography>
  </Box>
);

export default Error;
