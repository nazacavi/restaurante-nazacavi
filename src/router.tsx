import { createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Carta from "./pages/Carta";
import MenuDeGrupo from "./pages/MenuDeGrupo";
import Reservas from "./pages/Reservas";
import Especialidades from "./pages/Especialidades";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/carta',
        element: <Carta />,
    },
    {
        path: '/menu-de-grupo',
        element: <MenuDeGrupo />,
    },
    {
        path: '/reservas',
        element: <Reservas />,
    },
    {
        path: '/especialidades',
        element: <Especialidades />
    },
]);