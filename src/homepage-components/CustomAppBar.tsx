import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, Paper } from "@mui/material";

export default function ButtonAppBar() {
  return (
    <AppBar style={{ background: "#141414" }} position="relative">
      <Toolbar>
        <Paper />
        <Typography
          align="right"
          variant="body1"
          color="inherit"
          style={{ flex: 1 }}
        >
          Note: This tool is for Brands. If you're a Creator,{" "}
          <Link color="#FFB917">Apply to join the network here</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
