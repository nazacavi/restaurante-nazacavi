import './App.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function App() {

  return (
    <>
      <Header />

      <main>
          <section>
              <h1>Bienvenido</h1>

              <img
                  src="./imagenes/restaurante/imagen-portada.JPG"
                  alt="foto-restaurante"
                  title="foto-restaurante"
              />

             <p>Les recibimos con la mesa puesta y el corazón abierto. Aquí, cada detalle está pensado para que disfruten de una experiencia culinaria única. Nuestra carta, elaborada con pasión y los mejores ingredientes, invita a explorar sabores que deleitan y sorprenden. El ambiente, cálido y acogedor, es el escenario perfecto para compartir momentos inolvidables. Les invitamos a relajarse, saborear y dejarse consentir por nuestro equipo, que se esmera en hacer de su visita una ocasión especial. Que disfruten cada instante.</p>
          </section>

          <section>
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

              <div> 
                  <img
                      src="./imagenes/restaurante/imagen-pate.JPG"
                      title="imagen de paté "
                      alt="imagen de paté"
                  />
                  
                  <img
                      src="./imagenes/restaurante/imagen-torrija.JPG"
                      alt="imagen de torrija"
                      title="imagen de torrija"
                  />   

                  <img
                      src="./imagenes/restaurante/imagen-coctel.JPG"
                      alt="imagen de coctel"
                      title="imagen de coctel"
                  />
                  
                  <img
                      src="./imagenes/restaurante/imagen-carne.JPG"
                      alt="imagen de carne"
                      title="imagen de carne"
                  />

                  <img
                      src="./imagenes/restaurante/imagen-ensaladilla.JPG"
                      alt="imagen de ensaladilla"
                      title="imagen de endaladilla"
                  />

                  <img
                      src="./imagenes/restaurante/imagen-tortitas.JPG"
                      alt="imagen de tortitas"
                      title="imagen de tortitas"
                  />
              </div>
          </section>

          <section>
              <h2>Servicios</h2>

              <p>En nuestro espacio, la pasión por la gastronomía se extiende más allá de la mesa. Nos dedicamos a crear experiencias memorables, desde la cuidadosa selección de ingredientes frescos y de temporada, hasta la atención personalizada que nos distingue. Celebramos la vida contigo, ofreciendo servicios de celebraciones a medida, donde cada detalle se adapta a tus sueños, transformando tus eventos en momentos únicos e inolvidables. Además, entendemos la importancia de la comodidad y la flexibilidad, por eso, nuestro servicio de comida para llevar te permite disfrutar de nuestros sabores en la intimidad de tu hogar o donde prefieras, manteniendo la calidad y el sabor que nos caracteriza.</p>

              <div>
                  <div>
                      <img
                          src="./imagenes/restaurante/evento-imagen.JPG"
                          alt="imagen-evento"
                          title="imagen-evento"
                      />

                      <span>Eventos</span>
                  </div>
              </div>

              <div>
                  <figure>
                      <img
                          src="./imagenes/restaurante/coche-domicilio.JPG"
                          alt="imagen-coche"
                          title="imagen-coche"
                      />
                      
                      <figcaption>Comida para llevar</figcaption>
                  </figure>
              </div>
          </section>

          <section>
              <h2>Nuestro Chef</h2>

              <p>
                  En el corazón de nuestra cocina se encuentra el alma de nuestro restaurante: el chef.
                  Reconocido como uno de los mejores en su arte, su talento ha sido galardonado con premios internacionales.
                  Cada platillo que crea es una obra maestra, combinando técnica, creatividad y pasión.
                  Su experiencia en cocinas de renombre mundial se refleja en cada detalle del menú.
                  Bajo su dirección, hemos elevado la gastronomía a otro nivel.
                  No solo cocina, crea experiencias que conquistan todos los sentidos.
                  Gracias a su visión, nuestro restaurante se ha posicionado entre los mejores.
                  Ven a probar el sabor de una cocina con sello de excelencia mundial.       
              </p>

              <img
                  src="./imagenes/restaurante/imagen-chef.JPG"
                  title="imagen del Chef"
                  alt="imagen del Chef"
              />
          </section>
      </main>

      <Footer/>          
    </>
  );
};
