import { Box, Container, CssBaseline, Link, Typography } from "@mui/material";
import React from "react";
function Copyright() {
  return (
    <Typography variant="body2" color="text.primary">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

export default function Footer() {
  return (
    <>
      <Box>
        <CssBaseline />
        <Box
          component="footer"
          sx={{
            py: 3,
            px: 2,
            mt: "auto",
            backgroundColor: "secondary.main",
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" color="text.primary">
              My sticky footer can be found here.
            </Typography>
            <Copyright />
          </Container>
        </Box>
      </Box>
    </>
  );
}
