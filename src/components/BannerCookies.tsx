import './BannerCookies.css';
import { useState } from 'react';

export default function BannerCookies() {
    const [mostrarCookies, setMostrarCookies] = useState(true);

    function ocultarBanner() {
        setMostrarCookies(false);
    } 

    return (
        <>
        {
            !!mostrarCookies
            ?
                <aside id="cookies">
                    <img src="cookie.png" alt="Imagen de una galleta" />

                    <p>
                        Esta página podría utilizar cookies. Si sigues navegando consientes su uso y nos permites usar tu información con fines publicitarios
                    </p>

                    <a href="/restaurante-nazacavi/politica-de-cookies">Más info</a>

                    <button onClick={ocultarBanner}>Aceptar</button>
                </aside>
            :
                ''
        }
        </>
    )
}