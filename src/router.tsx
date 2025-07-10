import { createBrowserRouter } from "react-router-dom";
import App from './pages/App';
import Pagina2 from "./pages/Pagina2";
import Pagina3 from "./pages/Pagina3";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/pagina2',
        element: <Pagina2 />,
    },
    {
        path: '/pagina3',
        element: <Pagina3 />,
    },
]);