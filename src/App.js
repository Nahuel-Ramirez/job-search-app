import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Jobs from "./components/applicant/Jobs";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Registro from "./components/Registro";
import RegistroEmpresa from "./components/RegistroEmpresa";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/reg" element={<Registro />} />
            <Route path="/regemp" element={<RegistroEmpresa />} />
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<Jobs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
