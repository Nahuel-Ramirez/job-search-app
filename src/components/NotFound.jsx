import React from "react";
import "../styles/notFound.css";
import NotFoundImg from "../assets/img/404.jpg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();
  const irHome = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container-404">
        <Typography variant="h1" color="error">
          404
        </Typography>
        <div className="not-found-img-container">
          <Typography variant="h2" color="error">
            ¡Error! No hay ofertas aqui
          </Typography>
          <img src={NotFoundImg} alt="404 Img" />
        </div>
        <Button variant="contained" color="success" onClick={irHome}>
          Volver al Home
        </Button>
      </div>
    </>
  );
}

export default NotFound;
