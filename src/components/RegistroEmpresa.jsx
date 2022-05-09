import React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "../styles/registro.css";
import { Link } from "react-router-dom";
import { useRef } from "react";

function RegistroEmpresa() {
  const formRegEmp = useRef();

  const dataRegEmp = () => {
    console.log(formRegEmp);
  };

  return (
    <>
      <div className="container-registro">
        <Typography variant="h1" fontSize={50} className="title-registro">
          Job Search App
        </Typography>
        <Typography variant="h6">Registra tu empresa.</Typography>
        <form ref={formRegEmp}>
          <Box id="inputs-registro">
            <TextField
              id="outlined-basic"
              label="Razon social"
              variant="outlined"
              type="text"
            />
          </Box>
          <Box id="inputs-registro">
            <TextField
              id="outlined-basic"
              label="CUIT"
              variant="outlined"
              type="text"
            />
          </Box>
          <Box id="inputs-registro">
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              type="email"
            />
          </Box>
          <Box id="inputs-registro">
            <TextField
              id="outlined-basic"
              label="Contraseña"
              variant="outlined"
              type="password"
            />
          </Box>
          <Box>
            <Button
              variant="contained"
              className="btn-registro"
              onClick={dataRegEmp}
            >
              Registrarse
            </Button>
          </Box>
        </form>
        <Typography variant="caption" className="caption-login">
          Si ya tienes una cuenta, <Link to={"/login"}>Inicia sesion</Link>
        </Typography>
        <Typography variant="caption" className="caption-login">
          ¿Sos postulante? <Link to={"/"}>Registrate</Link>
        </Typography>
      </div>
    </>
  );
}

export default RegistroEmpresa;
