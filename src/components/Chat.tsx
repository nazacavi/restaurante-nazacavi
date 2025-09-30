import { useState } from 'react';
import './Chat.css';

interface Mensaje {
    texto: string;
    remitente: 'usuario' | 'sistema';
}

export default function Chat() {
    const mensajeInicial: Mensaje = {
        texto: '¡Hola! ¿En qué puedo ayudarte?',
        remitente: 'sistema',
    }
    const localStorageMensajes: Mensaje[] = JSON.parse(localStorage.getItem('mensajes') || JSON.stringify([mensajeInicial]));
    const [mensajes, setMensajes] = useState(localStorageMensajes);

    function enviarMensaje(event) {
        event.preventDefault();

        const $input = document.querySelector('#mensaje') as HTMLInputElement | null;
        if(!$input) {
            return;
        }

        const nuevoMensajes: Mensaje[] = [
            ...mensajes,
            {
                texto: $input.value,
                remitente: 'usuario',
            },
            //Solamente como prueba de que funcionan los mensajes del sistema
            {
                texto: 'Actualmente todos nuestros agentes están ocupados, vuelve a intentarlo más tarde, gracias.',
                remitente: 'sistema',
            }
        ];
        setMensajes(nuevoMensajes);

        localStorage.setItem('mensajes', JSON.stringify(nuevoMensajes));

        $input.value = '';
    }

    function limpiarChat() {
        setMensajes([mensajeInicial]);
        localStorage.setItem('mensajes', JSON.stringify(mensajeInicial));
    }

    return (
        <>
        {
            <aside id="chat">
                <div className="mensajes">
                    {
                        mensajes.map((mensaje) => {
                            return <p className={`mensaje ${mensaje.remitente}`}>{ mensaje.texto }</p>
                        })
                    }

                    <button
                        className="btn-limpiar"
                        onClick={() => limpiarChat() }
                    >
                        <i className="fa-fw fa fa-trash-alt" /> 
                        Limpiar chat
                    </button>
                </div>

                <form onSubmit={(event) => enviarMensaje(event) }>
                    <label>
                        <input
                            placeholder="Escribe tu mensaje..."
                            name="mensaje"
                            id="mensaje" 
                        />
                    </label>
                    <button><i className="fa-fw fa fa-paper-plane" /></button>
                </form>
            </aside>
        }
        </>
    )
}