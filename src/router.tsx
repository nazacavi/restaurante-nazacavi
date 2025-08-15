import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Carta from "./pages/Carta";
import MenuDeGrupo from "./pages/MenuDeGrupo";
import Reservas from "./pages/Reservas";
import Especialidades from "./pages/Especialidades";
import PoliticaDePrivacidad from "./pages/PoliticaDePrivacidad";
import PoliticaDeCookies from "./pages/PoliticaDeCookies";
import AvisoLegal from "./pages/AvisoLegal";


export const router = createBrowserRouter([
    {
        path: '/restaurante-nazacavi/',
        element: <App />,
    },
    {
        path: '/restaurante-nazacavi/carta',
        element: <Carta />,
    },
    {
        path: '/restaurante-nazacavi/menu-de-grupo',
        element: <MenuDeGrupo />,
    },
    {
        path: '/restaurante-nazacavi/reservas',
        element: <Reservas />,
    },
    {
        path: '/restaurante-nazacavi/especialidades',
        element: <Especialidades />
    },
    {
        path: '/restaurante-nazacavi/politica-de-privacidad',
        element: <PoliticaDePrivacidad />
    },
    {
        path: '/restaurante-nazacavi/politica-de-cookies',
        element: <PoliticaDeCookies />
    },
     {
        path: '/restaurante-nazacavi/aviso-legal',
        element: <AvisoLegal />
    },
]);