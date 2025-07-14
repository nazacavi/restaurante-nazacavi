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
                  <a href="/">INICIO</a>
                  <a href="/carta">CARTA</a>	
                  <a href="/especialidades">ESPECIALIDADES</a>	
                  <a href="/menu-de-grupo">MENÚS DE GRUPO</a>
                  <a href="/reservas">RESERVAS</a>
              </nav>
            </header>
        </>
    )
}