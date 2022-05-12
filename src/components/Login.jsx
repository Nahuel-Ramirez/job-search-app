import React from "react";
import Button from "@mui/material/Button";
import "../styles/login.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function Login() {
  const navigate = useNavigate();
  const formLogin = useRef();

  const irRegistro = () => {
    navigate("/");
  };

  const dataForm = () => {
    console.log(formLogin);
  };

  const login = (event) => {
    event.preventDefault();
    const urlBase = "";
    fetch(urlBase, {
      method: "POST",
      body: {
        email: formLogin.current[0].value,
        password: formLogin.current[2].value,
      },
    })
      .then((result) => result.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error wacho", error));
  };

  return (
    <>
      <div className="container">
        <Typography variant="h1" fontSize={50} className="title-login">
          Job Search App
        </Typography>
        <p>Por favor, inicia sesion</p>
        <form ref={formLogin}>
          <Box id="inputs-container">
            <TextField id="outlined-basic" label="Email" variant="outlined" />
          </Box>
          <Box id="inputs-container">
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
              className="btn-login"
              onClick={() => {
                dataForm();
                login();
              }}
            >
              Iniciar Sesion
            </Button>
          </Box>
          <p>Si no tienes una cuenta</p>
          <Box>
            <Button
              variant="contained"
              type="submit"
              className="btn-login"
              onClick={() => {
                irRegistro();
              }}
            >
              Registrarse
            </Button>
          </Box>
        </form>
      </div>
    </>
  );
}

export default Login;
