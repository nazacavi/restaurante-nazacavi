import { NavLink } from 'react-router-dom';
import BannerCookies from './BannerCookies';
import './FooterComponent.css';
import Chat from './Chat';

export default function FooterComponent () {
    return (
        <>
            <Chat />
            <BannerCookies />

            <footer>  
                <div className="menu">
                    <img
                        className="imagen-logo"
                        src="imagotipo.png"
                        height="70"
                        width="70"
                        title="logo"
                        alt="logo"
                    />

                    <nav className="secciones">
                        <NavLink className="enlace" to="/">inicio</NavLink>
                        <NavLink className="enlace" to="/carta">carta</NavLink>
                        <NavLink className="enlace" to="/especialidades">especialidades</NavLink>
                        <NavLink className="enlace" to="/menu-de-grupo">menú de grupo</NavLink>
                        <NavLink className="enlace" to="/reservas">reservas</NavLink>
                    </nav>      
                </div>

                <hr />

                <div className="informacion"> 
                    <div className="contenedor">               
                        <div className="contacto">
                            <h3>Contacto</h3>

                            <div className="direccion">
                                <i className="fa-solid fa-location-dot fa-fw" />
                                <address>C/ Mar y Sol, Nº25, 28045 - Madrid</address>
                            </div>

                            <div>
                                <i className="fa-solid fa-mobile-screen-button fa-fw" />
                                <a href="tel:656254977">Móvil: 656254977</a>
                            </div>

                            <div>
                                <i className="fa-solid fa-envelope fa-fw" />
                                <a href="mailto:info@restaurante-nazacavi.es">Email: info@restaurante-nazacavi.es</a>
                            </div>
                        </div>

                        <div className="legal">
                            <h3>Enlaces de interés</h3>
                            <ul>
                                <li><a href="/restaurante-nazacavi/aviso-legal">Aviso legal</a></li>
                                <li><a href="/restaurante-nazacavi/politica-de-privacidad">Política de privacidad</a></li>
                                <li><a href="/restaurante-nazacavi/politica-de-cookies">Política de cookies</a></li>
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
                    <a 
                        href="https://www.facebook.com/?locale=es_ES"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <i id="facebook"className="fa-fw fa-brands fa-facebook" />
                    </a>

                    <a 
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                            <i id="instagram" className="fa-fw fa-brands fa-instagram" />
                    </a>

                    <a href="https://www.linkedin.com/home"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i id="linkedin" className="fa-fw fa-brands fa-linkedin-in" />
                    </a> 

                    <a href="https://es.pinterest.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fa-fw fa-brands fa-pinterest" />
                    </a>
                </div>
            </footer>  
        </>
    )
}