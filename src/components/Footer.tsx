
import './Footer.css';

export default function Footer () {
    return (
        <>
            <footer>  

                 <div className='footer-navegador'>

                        <img
                            className="imagen-logo"
                            src="./imagenes/imagotipo.png"
                            height="150"
                            width="150"
                            title="logo"
                            alt="logo"
                        />

                        <nav className='navegacion-enlaces-footer'>
                        <a className='enlaces-footer' href='#inicio'>inicio</a>
                        <a className='enlaces-footer' href=''>menu</a>
                        <a className='enlaces-footer' href=''>especialidades</a>
                        <a className='enlaces-footer' href=''>carta</a>
                        <a className='enlaces-footer' href=''>reservas</a> 
                        </nav>      
                </div>

                <div>
                    <hr></hr>
                </div>

                <div className='footer-informacion'> 
                    <div className='informacion-legal'>               
                        <div className="informacion-contacto">
                            <h3>Contacto</h3>

                            <div id="direccion">
                                <i className="fa-solid fa-location-dot"></i>

                                <address>Plaza del la Constitución 6, 00958, Madrid</address>
                            </div>

                            <div>
                                <i className="fa-solid fa-mobile-screen-button"></i>

                                <a href="tel:672125807">Móvil: 52412587</a>
                            </div>

                            <div>
                                <i className="fa-solid fa-envelope"></i>

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
               

                    <div className='horario'>
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
                    <a href="#"><i id="facebook" className="fa-brands fa-facebook"></i></a>
                    <a href="#"><i id="instagram" className="fa-brands fa-instagram"></i></a>
                    <a href="#"><i id="linkedin" className="fa-brands fa-linkedin-in"></i></a> 
                    <a href="#"><i className="fa-brands fa-pinterest"></i></a>
                </div>
            </footer>  
        </>
    )
}