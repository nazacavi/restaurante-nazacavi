import './Header.css';

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
                  <a
                    className={`enlace ${window.location.pathname === '/' ? 'actual' : ''}`}
                    href="/restaurante-nazacavi/"
                  >
                    INICIO
                  </a>
                  <a
                    className={`enlace ${window.location.pathname === '/carta' ? 'actual' : ''}`}
                    href="/restaurante-nazacavi/carta"
                  >
                    CARTA
                  </a>	
                  <a
                    className={`enlace ${window.location.pathname === '/especialidades' ? 'actual' : ''}`}
                    href="/restaurante-nazacavi/especialidades"
                  >
                    ESPECIALIDADES
                  </a>	
                  <a
                    className={`enlace ${window.location.pathname === '/menu-de-grupo' ? 'actual' : ''}`}
                    href="/restaurante-nazacavi/menu-de-grupo"
                  >
                    MENÚS DE GRUPO
                  </a>
                  <a
                    className={`enlace ${window.location.pathname === '/reservas' ? 'actual' : ''}`}
                    href="/restaurante-nazacavi/reservas"
                  >
                    RESERVAS
                  </a>
              </nav>
            </header>
        </>
    )
}