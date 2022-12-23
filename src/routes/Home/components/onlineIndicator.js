import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { Box } from "@mui/material";

const OnlineIndicator = () => {
  return (
    <Box
      sx={{
        color: "#38CB97",
        display: "flex",
        alignItems: "center",
      }}
    >
      <FiberManualRecordIcon />
    </Box>
  );
};

export default OnlineIndicator;
