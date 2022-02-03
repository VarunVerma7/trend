import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import CameraIcon from "@mui/icons-material/PhotoCamera";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import MediaCard from "../homepage-components/Card";
import { Paper } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const cards = [1, 2, 3];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar style={{ background: "#141414" }} position="relative">
        <Toolbar>
          <Paper />
          <Typography
            align="right"
            variant="h6"
            color="inherit"
            style={{ flex: 1 }}
          >
            Note: This tool is for Brands. If you're a Creator, Apply to join
            the network here
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "background.paper",
              pt: 8,
              pb: 6,
            }}
          >
            <Grid container justifyContent="space-between">
              <Grid item>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <ArrowBackIcon />
                  <Typography>Content Quick Packs</Typography>
                </div>
              </Grid>
              <Grid item>
                {" "}
                <Button>
                  Start Without a Pack
                  <ArrowRightAltIcon />
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Container>
        <Container maxWidth="xl">
          <Box
            sx={{
              bgcolor: "background.paper",
              pb: 6,
            }}
          >
            <Typography>I need content for</Typography>

            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="space-between"
            >
              <Button fullWidth variant="contained">
                Paid Ad Websites
              </Button>
              <Button fullWidth variant="outlined">
                Instagram
              </Button>
              <Button fullWidth variant="outlined">
                TikTok
              </Button>
              <Button fullWidth variant="outlined">
                Facebook
              </Button>
              <Button fullWidth variant="outlined">
                Youtube
              </Button>
              <Button fullWidth variant="outlined">
                Amazon
              </Button>
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
