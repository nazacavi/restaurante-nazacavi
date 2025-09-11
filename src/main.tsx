import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, Routes, Route } from "react-router";
import App from "./pages/App";
import Carta from "./pages/Carta";
import MenuDeGrupo from "./pages/MenuDeGrupo";
import Reservas from "./pages/Reservas";
import Especialidades from "./pages/Especialidades";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import AvisoLegal from "./pages/AvisoLegal";
import './index.css' 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/carta" element={<Carta />} />
        <Route path="/menu-de-grupo" element={<MenuDeGrupo />} />
        <Route path="/reservas" element={<Reservas />} />
        <Route path="/especialidades" element={<Especialidades />} />
        <Route path="/politica-de-privacidad" element={<PoliticaDePrivacidad />} />
        <Route path="/politica-de-cookies" element={<PoliticaDeCookies />} />
        <Route path="/aviso-legal" element={<AvisoLegal />} />
      </Routes>
    </HashRouter>, 
  </StrictMode>,
);
