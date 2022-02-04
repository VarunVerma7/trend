import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import Chip from "@mui/material/Chip";

export default function MediaCard() {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#171717",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          // 16:9
          pt: "5%",
          pl: "5%",
          pr: "5%",
        }}
        image="1st.png"
      />
      <CardContent sx={{ flexGrow: 1, pl: "5%", pr: "5%" }}>
        <Grid container>
          <Grid item xs={8}>
            <Chip color="success" label="15 Credits" />
          </Grid>
          <Grid item xs={2}>
            <Typography style={{ textDecoration: "line-through" }}>
              $1,500
            </Typography>
          </Grid>
          <Grid item xs={2}>
            $1,080
          </Grid>
        </Grid>
        <br />

        <Typography variant="h6" component="h2">
          Amazon beauty product pack
        </Typography>
        <Typography gutterBottom>
          Everything you need to launch a brand on Amazon. Learn more
        </Typography>
        <Typography sx={{ fontStyle: "italic" }} gutterBottom>
          Use credits across any cobination of the following tiers:
        </Typography>
      </CardContent>
      <List>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <ListItemText primary="Top Level - Up to 13 images" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <ListItemText primary="Top Level - Up to 13 images" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FiberManualRecordIcon />
          </ListItemIcon>
          <ListItemText primary="Top Level - Up to 13 images" />
        </ListItem>
      </List>{" "}
      <CardActions
        sx={{
          pl: "4%",
          pb: "5%",
          pr: "4%",
        }}
      >
        <Button
          style={{ backgroundColor: "#FFB917", color: "black" }}
          fullWidth
          size="small"
          sx={{
            pt: "3%",
            pb: "3%",
          }}
        >
          Buy Now
        </Button>
      </CardActions>
    </Card>
  );
}
