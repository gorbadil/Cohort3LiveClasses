import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";

export default function Error() {
  return (
    <Box sx={{ display: "flex" }}>
      <CircularProgress />
      <Typography variant="h4">Error fetching data</Typography>
    </Box>
  );
}
