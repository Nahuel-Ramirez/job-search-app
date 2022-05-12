import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Jobs from "./components/Jobs";
import Login from "./components/Login";
import Registro from "./components/Registro";
import RegistroEmpresa from "./components/RegistroEmpresa";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Registro />} />
            <Route path="/regemp" element={<RegistroEmpresa />} />
            <Route path="/home" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
