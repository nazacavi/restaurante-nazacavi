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
                  <a className='enlaces-header'href="/">INICIO</a>
                  <a className='enlaces-header' href="/carta">CARTA</a>	
                  <a className='enlaces-header' href="/especialidades">ESPECIALIDADES</a>	
                  <a className='enlaces-header' href="/menu-de-grupo">MENÚS DE GRUPO</a>
                  <a className='enlaces-header' href="/reservas">RESERVAS</a>
              </nav>
            </header>
        </>
    )
}