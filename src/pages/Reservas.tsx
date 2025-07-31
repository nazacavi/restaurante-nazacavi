import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './Reservas.css';

export default function Reservas() {

    function enviarFormulario(event) {
        event.preventDefault();

        const nombre = document.getElementById('nombre').value
        const telefono = document.getElementById('telefono').value

        if(nombre === '') {
            alert('El nombre no pude estar vacío');
            return;
        }

        if (nombre.includes('0') || nombre.includes('1') || nombre.includes('2') ||
            nombre.includes('3') || nombre.includes('4') || nombre.includes('5') ||
            nombre.includes('6') || nombre.includes('7') || nombre.includes('8') ||
            nombre.includes('9') || nombre.includes('.') || nombre.includes(','))  {
            alert('El nombre no puede contener números, puntos ni comas');
            return;
        }

        if (telefono.includes(' ') || telefono.includes('.') || telefono.includes(',') ) {
            alert('El teléfono debe contener solo numeros sin espacios y símbolos')
            return;
        }

        if (telefono.length < 9) {
            alert('El teléfono debe tener al menos 9 dígitos');
            return;
        }

        alert('Reserva enviada correctamente')
    }
    
    return (
        <>
            <Header/> 

            <Hero
                titulo="Haz tu reserva ahora"
                subtitulo=""
                imagen="reservas/Captura2.JPG"
            />   

            <main>
                <div className='formulario'>
                    <form
                        method="post"
                        action="#"
                        onSubmit={enviarFormulario}
                        id="datos"
                    >
                        <h2>Registro</h2>

                        <label>
                            <input
                                id= "nombre"
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
    
            <Footer/>
       </>
    );
}