import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

export default function App() {

  return (
    <>
      <Header />

      <main>
        <Hero
            titulo="Bienvenido"
            subtitulo="Les recibimos con la mesa puesta y el corazón abierto. Aquí, cada detalle está pensado para que disfruten de una experiencia culinaria única. Nuestra carta, elaborada con pasión y los mejores ingredientes, invita a explorar sabores que deleitan y sorprenden. El ambiente, cálido y acogedor, es el escenario perfecto para compartir momentos inolvidables. Les invitamos a relajarse, saborear y dejarse consentir por nuestro equipo, que se esmera en hacer de su visita una ocasión especial. Que disfruten cada instante."
            imagen="/restaurante/imagen-portada.JPG"
        />

        <section>
            <div className="especialidades-informacion">
                <h2>Especialidades</h2>

                <p> 
                    En nuestro restaurante, las especialidades en carnes son el alma del menú, preparadas con pasión y sabor auténtico.
                    Disfruta de una carta de cócteles creativos, perfectos para cada ocasión.
                    Y no te vayas sin probar nuestros postres artesanales, el dulce final que merece tu paladar.
                    Cada plato es elaborado con ingredientes de la más alta calidad.
                    Nos enorgullece haber sido reconocidos con premios por nuestra excelencia en el servicio y sabor.
                    Ven y descubre por qué somos el destino favorito de los amantes de la buena comida.
                    Te esperamos para brindarte una experiencia inolvidable.
                </p>
            </div>

            <div className='carrusel'> 
                <div className='cinta'>
                  <img
                      src="/restaurante/imagen-pate.JPG"
                      title="imagen de paté "
                      alt="imagen de paté"
                  />
                  
                  <img
                      src="/restaurante/imagen-torrija.JPG"
                      alt="imagen de torrija"
                      title="imagen de torrija"
                  />   

                  <img
                      src="/restaurante/imagen-coctel.JPG"
                      alt="imagen de coctel"
                      title="imagen de coctel"
                  />
                  
                  <img
                      src="/restaurante/imagen-carne.JPG"
                      alt="imagen de carne"
                      title="imagen de carne"
                  />

                  <img
                      src="/restaurante/imagen-ensaladilla.JPG"
                      alt="imagen de ensaladilla"
                      title="imagen de endaladilla"
                  />

                  <img
                      src="/restaurante/imagen-tortitas.JPG"
                      alt="imagen de tortitas"
                      title="imagen de tortitas"
                  />

                  <img
                      src="/restaurante/imagen-pate.JPG"
                      title="imagen de paté "
                      alt="imagen de paté"
                  />
                  
                  <img
                      src="/restaurante/imagen-torrija.JPG"
                      alt="imagen de torrija"
                      title="imagen de torrija"
                  />   

                  <img
                      src="/restaurante/imagen-coctel.JPG"
                      alt="imagen de coctel"
                      title="imagen de coctel"
                  />
                  
                  <img
                      src="/restaurante/imagen-carne.JPG"
                      alt="imagen de carne"
                      title="imagen de carne"
                  />

                  <img
                      src="/restaurante/imagen-ensaladilla.JPG"
                      alt="imagen de ensaladilla"
                      title="imagen de endaladilla"
                  />

                  <img
                      src="/restaurante/imagen-tortitas.JPG"
                      alt="imagen de tortitas"
                      title="imagen de tortitas"
                  />    
                </div>
            </div>
        </section>

        <section className='actividades'> 
            <div className='eventos-comidas'>
                <img
                    src="/restaurante/evento-imagen.JPG"
                    alt="imagen-evento"
                    title="imagen-evento"
                />

                <div className='texto-eventos-comidas'>
                    <h2>Sabores que viajan contigo</h2>
                    <p>Delicias listas para llevar o para compartir en tu evento especial.</p>
                </div>

                <img
                    src="/restaurante/coche-domicilio.JPG"
                    alt="imagen-coche"
                    title="imagen-coche"
                />             
            </div>            
        </section>

        <section className="seccion-chef">
              <h2>Nuestro Chef</h2>

              <div className="contenedor-chef">
                <p>
                    En el corazón de nuestra cocina se encuentra el alma de nuestro restaurante: el chef.
                    Reconocido como uno de los mejores en su arte, su talento ha sido galardonado con premios internacionales.
                    Cada platillo que crea es una obra maestra, combinando técnica, creatividad y pasión.
                    Su experiencia en cocinas de renombre mundial se refleja en cada detalle del menú.
                    Bajo su dirección, hemos elevado la gastronomía a otro nivel.
                    No solo cocina, crea experiencias que conquistan todos los sentidos.
                    Gracias a su visión, nuestro restaurante se ha posicionado entre los mejores.
                    Ven a probar el sabor de una cocina con sello de excelencia mundial.
                    Nuestro chef no se detiene. Cada temporada, renueva la carta con propuestas audaces que sorprenden y deleitan. 
                </p>

                <img
                    src="/restaurante/imagen-chef.JPG"
                    title="imagen del Chef"
                    alt="imagen del Chef"
                />
                </div>
        </section>
      </main>

      <Footer/>          
    </>
  );
};
