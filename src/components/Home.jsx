import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import ViewListIcon from "@mui/icons-material/ViewList";

function Home() {
  return (
    <>
      <AppBar
        position="sticky"
        color="primary"
        sx={{
          display: "flex",
          flexDirection: "row",
          paddingLeft: "10px",
          paddingRight: "20px",
          alignItems: "center",
        }}
      >
        <Toolbar sx={{ flexGrow: 1 }}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AccountBoxIcon />
            <Typography variant="h6">Perfil</Typography>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <ViewListIcon />
            <Typography variant="h6">Lista de empleos</Typography>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AccountBoxIcon />
            <Typography variant="h6">Nosotros</Typography>
          </IconButton>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <AccountBoxIcon />
            <Typography variant="h6">CV</Typography>
          </IconButton>
        </Toolbar>
        <IconButton
          edge="end"
          color="inherit"
          aria-label="logout"
          sx={{ width: "55px", height: "55px" }}
        >
          <PowerSettingsNewIcon />
        </IconButton>
      </AppBar>
    </>
  );
}

export default Home;
