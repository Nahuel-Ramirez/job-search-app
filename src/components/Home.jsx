import React from "react";
import "../styles/home.css";
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
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

function Home() {
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
              placeholder="Ej: Atencion al cliente"
            />
            <IconButton>
              <SearchIcon />
            </IconButton>
          </div>

          <div className="btns-navbar">
            <IconButton aria-label="cv" id="btn-nav" onClick={irRegEmp}>
              <Typography color="initial">Registra tu empresa</Typography>
              <BusinessIcon />
            </IconButton>

            <IconButton aria-label="ofertas" id="btn-nav" onClick={irRegistro}>
              <Typography color="initial">Registrate</Typography>
              <ManIcon />
            </IconButton>

            <IconButton aria-label="login" id="btn-nav" onClick={irLogin}>
              <Typography color="initial">Iniciar Sesion</Typography>
              <AccountCircleIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>

      <div className="home-container">
        <section>
          <h2>¡Encontra tu proximo trabajo!</h2>
          <h4>¡Ya hay mas de (num) ofertas!</h4>
          <div className="home-parrafo">
            Arma tu curriculum, subilo a nuestra base de datos, y postulate a
            las ofertas disponibles.
            <div>
              <CheckCircleIcon color={"success"} />
              <strong>Facil.</strong>
              <span>Proceso extremadamente simple con pocos pasos</span>
            </div>
            <div>
              <CheckCircleIcon color={"success"} />
              <strong>Rapido.</strong> ¡Seleccionas la oferta, te postulas y
              listo!
            </div>
            <div>
              <CheckCircleIcon color={"success"} />
              <strong>Ofertas actualizadas.</strong> Ofertas actualizadas cada
              dia
            </div>
            <div>
              <CheckCircleIcon color={"success"} />
              <strong>Completa tu perfil.</strong> Mostrate de una manera mas
              profesional completando tu perfil
            </div>
          </div>
        </section>

        <div></div>
      </div>
    </>
  );
}

export default Home;
