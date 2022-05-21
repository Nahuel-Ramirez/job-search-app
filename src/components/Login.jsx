import React from "react";
import Button from "@mui/material/Button";
import "../styles/login.css";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { contextAuth } from "../Context/AuthContext";
import { postWithToken } from "../api";
import { useContext } from "react";
import Swal from "sweetalert2";

function Login() {
  const navigate = useNavigate();
  const formLogin = useRef();

  const irRegistro = () => {
    navigate("/reg");
  };

  const irHome = () => {
    navigate("/");
  };

  const context = useContext(contextAuth);

  const login = (event) => {
    event.preventDefault();
    postWithToken("/auth/login", {
      email: formLogin.current[0].value,
      password: formLogin.current[2].value,
    })
      .then(({ data }) => {
        console.log(data);
        const { token, user } = data;
        localStorage.setItem("token", token);
        context.setAuth({
          id: user.id,
          name: user.name,
          logged: true,
        });
        navigate("/jobs");
      })
      .catch((error) => {
        if (error) {
          Swal.fire({
            title: "Algo salio mal",
            text: "Usuario o contraseña incorrectos",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  return (
    <>
      <div className="page-container">
        <div className="container">
          <Typography
            variant="h1"
            fontSize={50}
            className="title-login"
            onClick={irHome}
          >
            Job Market
          </Typography>
          <h3>Por favor, inicia sesion</h3>
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
              <Button variant="contained" className="btn-login" onClick={login}>
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
      </div>
    </>
  );
}

export default Login;
