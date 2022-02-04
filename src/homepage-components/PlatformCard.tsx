import { Paper, Grid, Box, Typography } from "@mui/material";

export default function PlatformCard({ content, img }) {
  return (
    <Paper
      sx={
        content !== "Amazon"
          ? { backgroundColor: "#272727", width: "100%" }
          : { backgroundColor: "#FFB917", width: "100%" }
      }
    >
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: "15vh" }}
      >
        <Box sx={{ m: "2%" }}>
          <img src={img} />
        </Box>

        <Typography
          fontSize={12}
          sx={content === "Amazon" ? { color: "black" } : null}
        >
          {content}
        </Typography>
      </Grid>
    </Paper>
  );
}
