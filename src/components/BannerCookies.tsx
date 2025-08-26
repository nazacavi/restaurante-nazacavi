import './BannerCookies.css';
import { useState } from 'react';

export default function BannerCookies() {
    const mostrarCookiesSessionStorage = sessionStorage.getItem('mostrar-cookies') || '1';
    const [mostrarCookies, setMostrarCookies] = useState(Boolean(Number(mostrarCookiesSessionStorage)));

    function ocultarBanner() {
        sessionStorage.setItem('mostrar-cookies', '0');
        setMostrarCookies(false);
    } 

    return (
        <>
        {
            Boolean(mostrarCookies)
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