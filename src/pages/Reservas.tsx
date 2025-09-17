import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import Hero from '../components/Hero';
import './Reservas.css';

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