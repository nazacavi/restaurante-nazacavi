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
            <Footer/>
        </>
    );
}