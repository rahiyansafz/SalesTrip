import { Box } from "@mui/material";
import Slider from "../../pages/slider/slider";

export default function Body() {
  return (
    <Box sx={{ p: 4 }} px={{ xs: 1, sm: 2, md: 8 }}>
      <Slider />
    </Box>
  );
}
