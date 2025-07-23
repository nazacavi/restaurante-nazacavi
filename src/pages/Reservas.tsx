import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import './Reservas.css';

export default function Reservas() {



    
    return (
        <>
            <Header/> 

            <Hero
                titulo="Haz tu reserva ahora"
                subtitulo=""
                imagen="././reservas/Captura2.JPG"
            />   

            <main>
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
                            />
                        </label>

                        <label>
                            <input
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
                                type="time"
                                name="hora"
                                required
                            />
                        </label>

                        <label>
                            <input
                                type="date"
                                name="calendario"
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