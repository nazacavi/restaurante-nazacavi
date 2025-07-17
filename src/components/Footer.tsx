
import './Footer.css';

export default function Footer () {
    return (
        <>
            <footer>  
                <div className="menu">
                    <img
                        className="imagen-logo"
                        src="./imagenes/imagotipo.png"
                        height="70"
                        width="150"
                        title="logo"
                        alt="logo"
                    />

                    <nav className="secciones">
                        <a className="enlace" href="/">inicio</a>
                        <a className="enlace" href="/carta">carta</a>
                        <a className="enlace" href="/especialidades">especialidades</a>
                        <a className="enlace" href="/menu-de-grupo">menú de grupo</a>
                        <a className="enlace" href="/reservas">reservas</a>
                    </nav>      
                </div>

                <hr />

                <div className="informacion"> 
                    <div className="contenedor">               
                        <div className="contacto">
                            <h3>Contacto</h3>

                            <div className="direccion">
                                <i className="fa-solid fa-location-dot fa-fw" />
                                <address>Plaza del la Constitución 6, 00958, Madrid</address>
                            </div>

                            <div>
                                <i className="fa-solid fa-mobile-screen-button fa-fw" />
                                <a href="tel:672125807">Móvil: 52412587</a>
                            </div>

                            <div>
                                <i className="fa-solid fa-envelope fa-fw" />
                                <a href="mailto:nacavi@hotmail.es">Email: nacavi@hotmail.es</a>
                            </div>
                        </div>

                        <div className="legal">
                            <h3>Enlaces de interés</h3>
                            <ul>
                                <li><a href="#">Aviso legal</a></li>
                                <li><a href="#">Política de privacidad</a></li>
                                <li><a href="#">Política de cookies</a></li>
                            </ul>
                        </div>
                    </div> 
               

                    <div className="horario">
                        <table>
                            <thead>
                                <tr>
                                    <th colSpan={2}>Horario de atención</th>
                                </tr>
                                <tr>
                                    <th>Día</th>
                                    <th>Horario</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Lunes</td>
                                    <td>Cerrado</td>
                                </tr>
                                <tr>
                                    <td>Martes a Jueves</td>
                                    <td>12:00 a 17:00</td>
                                </tr>
                                <tr>
                                    <td>Viernes</td>
                                    <td>12:00 a 17:00</td>
                                </tr>
                                <tr>
                                    <td>Sábado</td>
                                    <td>12:00 a 17:00</td>
                                </tr>
                                 <tr>
                                    <td>Domingo</td>
                                    <td>12:00 a 17:00</td>
                                 </tr>
                            </tbody>
                        </table>
                    </div>
                </div>    

                <div className="redes-sociales">
                    <a href="#"><i id="facebook" className="fa-fw fa-brands fa-facebook" /></a>
                    <a href="#"><i id="instagram" className="fa-fw fa-brands fa-instagram" /></a>
                    <a href="#"><i id="linkedin" className="fa-fw fa-brands fa-linkedin-in" /></a> 
                    <a href="#"><i className="fa-fw fa-brands fa-pinterest" /></a>
                </div>
            </footer>  
        </>
    )
}