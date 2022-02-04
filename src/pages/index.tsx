import * as React from "react";
import Button from "@mui/material/Button";

import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MediaCard from "../homepage-components/Card";
import { Paper } from "@mui/material";
import PlatformCard from "../homepage-components/PlatformCard";
import CustomAppBar from "../homepage-components/CustomAppBar";
import TopLayout from "../homepage-components/TopLayout";

const cards = [1, 2, 3];

const platforms = [
  { content: "Paid Ads / Website", img: "PaidAds.png" },
  { content: "instagram", img: "Instagram.png" },
  { content: "TikTok", img: "TikTok" },
  { content: "Facebook", img: "Facebook.png" },
  { content: "Youtube", img: "Youtube.png" },
  { content: "Amazon", img: "Amazon.png" },
];

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
        {/* Hero unit */}
        <TopLayout />
        <Container maxWidth="xl">
          <Box
            sx={{
              pb: 6,
            }}
          >
            <Typography variant="h4">I need content for my</Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
            >
              {platforms.map(({ content, img }) => (
                <PlatformCard content={content} img={img} />
              ))}
            </Stack>
          </Box>
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <MediaCard />
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}
