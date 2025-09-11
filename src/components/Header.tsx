import './Header.css';
import { NavLink } from "react-router";

export default function Header() {
    return (
        <>
            <header>
              <img
                  src="logo.png"
                  height="100px"
                  width="150px"
                  title="logo"
                  alt="logo"
              />

              <nav>
                  <NavLink
                    className={`enlace ${window.location.pathname === '/' ? 'actual' : ''}`}
                    to="/"
                  >
                    INICIO
                  </NavLink>
                  <NavLink
                    className={`enlace ${window.location.pathname === '/carta' ? 'actual' : ''}`}
                    to="/carta"
                  >
                    CARTA
                  </NavLink>	
                  <NavLink
                    className={`enlace ${window.location.pathname === '/especialidades' ? 'actual' : ''}`}
                    to="/especialidades"
                  >
                    ESPECIALIDADES
                  </NavLink>	
                  <NavLink
                    className={`enlace ${window.location.pathname === '/menu-de-grupo' ? 'actual' : ''}`}
                    to="/menu-de-grupo"
                  >
                    MENÚS DE GRUPO
                  </NavLink>
                  <NavLink
                    className={`enlace ${window.location.pathname === '/reservas' ? 'actual' : ''}`}
                    to="/reservas"
                  >
                    RESERVAS
                  </NavLink>
              </nav>
            </header>
        </>
    )
}