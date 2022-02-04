import { Container, Box, Grid, Typography, Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

export default function TopLayout() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          pt: 3,
          pb: 6,
        }}
      >
        <Grid container justifyContent="space-between">
          <Grid item>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <ArrowBackIcon
                color="action"
                style={{ transform: "scale(1.3)", fill: "white" }}
              />
              <Typography style={{ margin: "25px" }} variant="h6">
                Content Quick Packs
              </Typography>
            </div>
          </Grid>
          <Grid item>
            {" "}
            <Button
              variant="contained"
              style={{
                backgroundColor: "#FFFFFF",
                color: "black",
                marginTop: "25px",
              }}
            >
              Start Without a Pack
              <ArrowRightAltIcon />
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}
