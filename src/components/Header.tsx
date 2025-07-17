import './Header.css';

export default function Header() {
    return (
        <>
            <header>
              <img
                  src="./imagenes/logo.jpg"
                  height="100px"
                  width="150px"
                  title="logo"
                  alt="logo"
              />

              <nav>
                  <a className="enlace"href="/">INICIO</a>
                  <a className="enlace" href="/carta">CARTA</a>	
                  <a className="enlace" href="/especialidades">ESPECIALIDADES</a>	
                  <a className="enlace" href="/menu-de-grupo">MENÚS DE GRUPO</a>
                  <a className="enlace" href="/reservas">RESERVAS</a>
              </nav>
            </header>
        </>
    )
}