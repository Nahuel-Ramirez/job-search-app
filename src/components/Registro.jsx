import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/registro.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function Registro() {
  const formReg = useRef();

  const dataReg = () => {
    console.log(formReg);
  };

  const registro = (event) => {
    event.preventDefault();
    const urlBase = "";
    fetch(urlBase, {
      method: "POST",
      body: {
        name: formReg.current[0].value,
        surname: formReg.current[2].value,
        email: formReg.current[4].value,
        password: formReg.current[6].value,
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error wacho", error));
  };

  return (
    <>
      <div className="container-registro">
        <Typography variant="h1" fontSize={50} className="title-registro">
          Job Market
        </Typography>
        <Typography variant="h6">Primero, registrate.</Typography>
        <form ref={formReg}>
          <Box id="inputs-registro">
            <TextField label="Nombre" variant="outlined" type="text" />
          </Box>
          <Box id="inputs-registro">
            <TextField label="Apellido" variant="outlined" type="text" />
          </Box>
          <Box id="inputs-registro">
            <TextField label="Email" variant="outlined" type="email" />
          </Box>
          <Box id="inputs-registro">
            <TextField label="Contraseña" variant="outlined" type="password" />
          </Box>
          <Box>
            <Button
              variant="contained"
              className="btn-registro"
              onClick={() => {
                dataReg();
                registro();
              }}
            >
              Registrarse
            </Button>
          </Box>
        </form>
        <Typography variant="caption" className="caption-login">
          Si ya tienes una cuenta, <Link to={"/login"}>Inicia sesion</Link>
        </Typography>
        <Typography variant="caption" className="caption-login">
          ¿Sos empresa y queres contratar?{" "}
          <Link to={"/regemp"}>Registra tu empresa</Link>
        </Typography>
      </div>
    </>
  );
}

export default Registro;
