import { red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// A custom theme for this app
const theme = createTheme({
  palette: {
    text: {
      primary: "#fffbf2",
      secondary: "#073937",
    },
    primary: {
      main: "#FFFBF2",
      // main: "#272727",
    },
    secondary: {
      // main: "#19857b",
      main: "#073937",
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
