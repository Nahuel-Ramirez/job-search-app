import React from "react";
import "../styles/home.css";
import Divider from "@mui/material/Divider";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import Switch from "@mui/material/Switch";
import SideBarHome from "./SideBarHome";

function Home() {
  // const { theme, setTheme } = useContext(themeContext);

  // const handleChangeTheme = () => {
  //   theme === false ? setTheme(true) : setTheme(false);
  //   const root = window.document.documentElement;
  //   if (theme === false) {
  //     root.classList.add("dark-mode");
  //   } else {
  //     root.classList.remove("dark-mode");
  //   }
  // };

  return (
    <>
      <div className="page-container">
        <SideBarHome />
        <div className="home-container">
          {/* <Switch
          value={false}
          checked={theme}
          onChange={handleChangeTheme}
          inputProps={{ "aria-label": "Theme" }}
        /> */}
          <section>
            <h2>¡Encontra tu proximo trabajo!</h2>
            <h4>¡Ya hay mas de 100 ofertas!</h4>
            <Divider />
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
      </div>
    </>
  );
}

export default Home;
