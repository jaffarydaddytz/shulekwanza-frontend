import { Box, LinearProgress, Typography } from "@mui/joy";
import React from "react";
import { logo } from "../assets";

const SecondLoader = () => {
  return (
    <div>
      <Box
        sx={{
          width: "100%",
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(245, 245, 245, 0.85)",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 99999,
        }}>
        <Box
          sx={{
            backgroundColor: "white",
            width: "150px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: 1,
            borderRadius: 4,
          }}>
          <img alt="logo" src={logo} width={45} />
          <Typography level="body-lg">ShuleKwanza</Typography>
          <Box sx={{ width: "100%" }}>
            <LinearProgress color="primary" size="sm" />
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default SecondLoader;
