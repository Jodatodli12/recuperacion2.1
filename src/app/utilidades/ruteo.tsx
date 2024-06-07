import { Route, Routes } from "react-router-dom";
import { Inicio } from "../componentes/contenedor/Inicio";
import { NoEncontrado } from "../componentes/contenedor/NoEncontardo";
import { AdminConci } from "../componentes/conciertos/AdminConci"
import { RegisConci } from "../componentes/conciertos/RegisConci";
import { Listar } from "../componentes/conciertos/Listar";


export const Ruteo = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/adminconci" element={<AdminConci/>} />
      <Route path="/regisconci" element={<RegisConci/>} />
      <Route path="/listar" element={<Listar />} />
      <Route path="*" element={<NoEncontrado />} />
    </Routes>
  );
};
