import Header from '../components/Header';
import Footer from '../components/Footer';
import './Reservas.css';

export default function Pagina3() {
    return (
        <>
            <Header/>    
            <p>Estamos en la página 3</p>
            <br></br>
            <a href="/">inicio</a>
            <br></br>
            <a href="/pagina2">pagina 2</a>


            <main>
        <h1>Haz tu reserva ahora</h1>

        <img
            src="././reservas/Captura2.JPG"
            alt="imagen de reserva"
            title="imagen de reserva"
        />
        <div className='formulario'>
            <form
                method="post"
                action="#"
                id="datos"
            >
                <h2>Registro</h2>

                <label>
                    <input
                        type="text"
                        name="nombre"
                        placeholder='nombre'
                        required
                        autoFocus
                    />
                </label>

                <label>
                    <input
                        type="tel"
                        name="telefono"
                        placeholder='teléfono'
                        required
                        autoFocus
                    />
                </label>

                <label>
                    <input
                        type="number"
                        min="1"
                        max="50"
                        name="comensales"
                        placeholder='número de comensales'
                        autoFocus
                        required
                    />
                </label>

                <label>
                    <input
                        type="time"
                        name="hora"
                        autoFocus
                        required
                    />
                </label>

                <label>
                    <input
                        type="date"
                        name="calendario"
                        autoFocus
                        required
                    />
                </label>
            </form>
            
            <button
                type="button"
                form="datos"
            >
                Reservar
            </button>
        </div>
    </main>
    
             <Footer/>
       </>
    );
}