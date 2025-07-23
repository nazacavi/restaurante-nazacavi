import './Hero.css';

export default function Hero({ titulo, subtitulo, imagen }) {
    return (
        <>
            <div id="hero">
                <img
                    src={imagen}
                    alt="foto-restaurante"
                    title="foto-restaurante" 
                />

                <div className="mask" />

                <div className="text">
                    <h1>{titulo}</h1>
                    <p>{subtitulo}</p>
                </div>
            </div>
        </>
    );
}