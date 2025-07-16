import Header from '../components/Header';
import Footer from '../components/Footer';

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
            src="./../imagenes/reservas/Captura2.JPG"
            alt="imagen de reserva"
            title="imagen de reserva"
        />

        <form
            method="post"
            action="#"
            id="datos"
        >
            <label>
                <span>*Nombre</span>

                <input
                    type="text"
                    required
                    name="nombre"
                    autoFocus
                />
            </label>

            <label>
                <span>*Teléfono</span>

                <input
                    type="tel"
                    required
                    name="telefono"
                    autoFocus
                />
            </label>

            <label>
                <span>*Número de comensales</span>

                <input
                    type="number"
                    required
                    min="1"
                    max="50"
                    name="comensales"
                    autoFocus
                />
            </label>

            <label>
                <span>*Hora</span>

                <input
                    type="time"
                    required
                    name="hora"
                    autoFocus
                />
            </label>

            <label>
                <span>*Calendario</span>

                <input
                    type="date"
                    required
                    name="calendario"
                    autoFocus
                />
            </label>
        </form>

        <button
            type="button"
            form="datos"
        >
            Reservar
        </button>
    </main>
    
             <Footer/>
       </>
    );
}