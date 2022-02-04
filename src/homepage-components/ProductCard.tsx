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
import Link from "@mui/material/Link";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  buttonHover: {
    "&:hover": {
      backgroundColor: "blue !important",
    },
  },
});

export default function ProductCard({
  productName,
  credits,
  strikeThroughPrice,
  realPrice,
  toplevel,
  midLevel,
  bottomLevel,
  img,
}) {
  const classes = useStyles();

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
          pl: "5%",
          pr: "5%",
        }}
        style={{ maxHeight: "30vh" }}
        image={img}
      />
      <CardContent sx={{ flexGrow: 1, pl: "5%", pr: "5%", pb: "-2%" }}>
        <Grid container>
          <Grid item xs={6}>
            <Chip color="success" label={credits} />
          </Grid>
          <Grid item xs={3}>
            <Typography
              style={{ textDecoration: "line-through", color: "grey" }}
            >
              {strikeThroughPrice}
            </Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{realPrice}</Typography>
          </Grid>
        </Grid>
        <Typography sx={{ pt: "2%" }} variant="h6">
          {productName}
        </Typography>
        <Typography variant="body2" gutterBottom>
          Everything you need to launch a brand on Amazon.
          <span style={{ color: "grey", textDecoration: "underline" }}>
            {" "}
            Learn more
          </span>
        </Typography>
        <Typography
          variant="body2"
          sx={{ fontStyle: "italic", pt: "2%" }}
          gutterBottom
        >
          Use credits across any cobination of the following tiers:
        </Typography>
      </CardContent>
      <List>
        {[
          { text: `Top Level = ${toplevel}`, color: "#FFE483" },
          { text: `Mid Level - ${midLevel}`, color: "#E2E2E2" },
          { text: `Standard Level - ${bottomLevel}`, color: "#E8AF42" },
        ].map(({ text, color }) => (
          <ListItem style={{ padding: 0 }}>
            <ListItemIcon style={{ transform: "scale(.5)" }}>
              <FiberManualRecordIcon style={{ color }} />
            </ListItemIcon>
            <ListItemText
              primaryTypographyProps={{ fontSize: "10px" }}
              primary={"Top Level - " + toplevel}
            />
          </ListItem>
        ))}
      </List>{" "}
      <CardActions
        sx={{
          pl: "4%",
          pb: "5%",
          pr: "4%",
        }}
      >
        <Button
          className={classes.buttonHover}
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
