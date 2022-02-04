import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CustomAppBar from "../homepage-components/CustomAppBar";
import TopLayout from "../homepage-components/TopLayout";
import AllPlatforms from "../homepage-components/AllPlatforms";
import AllProducts from "../homepage-components/AllProducts";
const cards = [1, 2, 3];

const theme = createTheme({
  typography: {
    body1: {
      color: "white",
    },
    h6: {
      color: "white",
    },
  },
});

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CustomAppBar />
      <main>
        <TopLayout />
        <Container maxWidth="xl">
          <AllPlatforms />
          <AllProducts />
        </Container>
      </main>
    </ThemeProvider>
  );
}
