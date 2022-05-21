import React from "react";
import "../styles/sideBarHome.css";
import TextField from "@mui/material/TextField";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import BusinessIcon from "@mui/icons-material/Business";
import ManIcon from "@mui/icons-material/Man";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

function SideBarHome() {
  const navigate = useNavigate();

  const irRegistro = () => {
    navigate("/reg");
  };
  const irRegEmp = () => {
    navigate("/regemp");
  };
  const irLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <AppBar position="fixed" color="" id="navbar">
        <Toolbar>
          <Typography variant="h4" id="title-navbar">
            Job Market
          </Typography>

          <div className="search-navbar">
            <TextField
              id="search"
              label="Buscar Empleos"
              variant="standard"
              placeholder="Ej: Dev Python Jr ..."
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>

          <div className="btns-navbar">
            <Button
              aria-label="cv"
              id="btn-nav"
              onClick={irRegEmp}
              variant="text"
              color="inherit"
            >
              <Typography color="initial">Registra tu empresa</Typography>
              <BusinessIcon />
            </Button>

            <Button
              aria-label="ofertas"
              id="btn-nav"
              onClick={irRegistro}
              variant="text"
              color="inherit"
            >
              <Typography color="initial">Registrate</Typography>
              <ManIcon />
            </Button>

            <Button
              aria-label="login"
              id="btn-nav"
              onClick={irLogin}
              variant="text"
              color="inherit"
            >
              <Typography color="initial">Iniciar Sesion</Typography>
              <AccountCircleIcon />
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default SideBarHome;
