import { Box } from "@mui/material";
import React from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Body from "./layout/Body";

function Layout(props: any) {
  return (
    <div>
      <Header {...props} />
      <Box
        sx={{
          mt: 8,
          backgroundColor: "primary.main",
          color: "text.secondary",
          minHeight: "100vh",
        }}
      >
        <Body />
      </Box>
      <Box
        sx={{
          backgroundColor: "secondary.main",
          color: "text.primary",
        }}
      >
        <Footer />
      </Box>
    </div>
  );
}

export default Layout;
