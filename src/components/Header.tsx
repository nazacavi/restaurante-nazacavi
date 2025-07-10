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
                  <a href="./">INICIO</a>
                  <a href="./carta/carta.html">CARTA</a>	
                  <a href="./especialidades/especialidades.html">ESPECIALIDADES</a>	
                  <a href="./menu-grupo/menu-grupo.html">MENÚS DE GRUPO</a>
                  <a href="./reservas/reservas.html">RESERVAS</a>
              </nav>
            </header>
        </>
    )
}