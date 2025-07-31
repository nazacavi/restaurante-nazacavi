import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Carta from "./pages/Carta";
import MenuDeGrupo from "./pages/MenuDeGrupo";
import Reservas from "./pages/Reservas";
import Especialidades from "./pages/Especialidades";

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
]);