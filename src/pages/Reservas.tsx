import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import Hero from '../components/Hero';
import './Reservas.css';
import { useState } from 'react';

export default function Reservas() {
    function borrarErrores() {
        const $errores = document.getElementsByClassName('mensaje-error');
        for(const $error of $errores) {
            $error.remove();
        }

        const $inputs = document.getElementsByTagName('input');
        for(const $input of $inputs) {
            $input.style.border = '1px solid #979595';
        }
    } 

    function enviarFormulario(event) {
        borrarErrores();
        let hayError = false;
        event.preventDefault();

        const nombre = document.getElementById('nombre').value
        const telefono = document.getElementById('telefono').value

        if(nombre === '') {
            const $inputNombre = document.getElementById('nombre');
            $inputNombre.style.border = '1px solid red';
            $inputNombre.parentElement.innerHTML += '<span class="mensaje-error">El nombre no puede estar vacío</span>'
            hayError = true;
        }

        if (nombre.includes('0') || nombre.includes('1') || nombre.includes('2') ||
            nombre.includes('3') || nombre.includes('4') || nombre.includes('5') ||
            nombre.includes('6') || nombre.includes('7') || nombre.includes('8') ||
            nombre.includes('9') || nombre.includes('.') || nombre.includes(','))  {
            const $inputNombre = document.getElementById('nombre');
            $inputNombre.style.border = '1px solid red';
            $inputNombre.parentElement.innerHTML += '<span class="mensaje-error">El nombre no puede contener números, puntos ni comas</span>'
            hayError = true;
        }

        if (telefono.includes(' ') || telefono.includes('.') || telefono.includes(',') ) {
            const $inputNombre = document.getElementById('telefono');
            $inputNombre.style.border = '1px solid red';
            $inputNombre.parentElement.innerHTML += '<span class="mensaje-error">El teléfono debe contener solo numeros sin espacios y símbolos</span>'
            hayError = true;
        }

        if (telefono.length < 9) {
            const $inputNombre = document.getElementById('telefono');
            $inputNombre.style.border = '1px solid red';
            $inputNombre.parentElement.innerHTML += '<span class="mensaje-error">El teléfono debe tener al menos 9 dígitos</span>'
            hayError = true;
        }

        if(hayError) {
            return;
        }

        alert('Reserva enviada correctamente');

        const formulario = document.getElementById('datos');
        formulario.reset();
    }

    let map;
    const COORDENADAS_RESTAURANTE = { lat: 37.784663566162735, lng: -3.7815352410237035 }
    async function initMap() {
      const { Map } = await google.maps.importLibrary("maps");

      map = new Map(document.getElementById("map"), {
        center: COORDENADAS_RESTAURANTE,
        zoom: 20,
      });
    }
    initMap();

    const [distancia, setDistancia] = useState(0);
    function obtenerDistanciaEntreDosCoordenadas(lat1, long1, lat2, long2) {
    	const R = 6371; // Radio de la tierra

    	const toRadians = (degree: number): number => degree * (Math.PI / 180);

    	const dLat = toRadians(lat2 - lat1);
    	const dLong = toRadians(long2 - long1);

    	const a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
    		+ Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2))
    		* Math.sin(dLong / 2) * Math.sin(dLong / 2);

    	const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    	return R * c; // Distancia en kilometros
    }

    async function calcularDistanciaAlUsuario() {
        navigator.geolocation.getCurrentPosition((position) => {
            const distanciaEnKm = obtenerDistanciaEntreDosCoordenadas(position.coords.latitude, position.coords.longitude, COORDENADAS_RESTAURANTE.lat, COORDENADAS_RESTAURANTE.lng);
            setDistancia(distanciaEnKm);
        });
    }
    calcularDistanciaAlUsuario();
    
    return (
        <>
            <Header/> 

            <Hero
                titulo="Haz tu reserva ahora"
                subtitulo=""
                imagen="reservas/Captura2.JPG"
            />   

            <main>
                <div id="map" />

                {
                    distancia > 0 
                    ?
                        <p className="distancia">
                            Estás a tan solo
                            {
                                distancia < 1
                                    ? ` ${(distancia * 1000).toFixed(2)} metros `
                                    : ` ${distancia.toFixed(2)} kilómetros `
                            }
                            de nuestro restaurante
                            </p>
                    : ''
                }

                <div className='formulario'>
                    <form
                        onSubmit={enviarFormulario}
                        id="datos"
                    >
                        <h2>Registro</h2>

                        <label>
                            <input
                                id="nombre"
                                type="text"
                                name="nombre"
                                placeholder='nombre'
                                required
                            />
                        </label>

                        <label>
                            <input
                                id="telefono"
                                type="tel"
                                name="telefono"
                                placeholder='teléfono'
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="number"
                                min="1"
                                max="50"
                                name="comensales"
                                placeholder='número de comensales'
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="date"
                                name="fecha"
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="time"
                                name="hola"
                                required
                            />
                        </label>
                    </form>

                    <button form="datos">
                        Reservar
                    </button>
                </div>
            </main>
    
            <FooterComponent/>
       </>
    );
}