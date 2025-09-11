import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import './Carta.css';
import Hero from '../components/Hero';

export default function Carta() {
    return (
        <>
            <Header />
            
            <main className="carta">

              <Hero
                   titulo="Carta"
                   subtitulo=""
                   imagen="carta/imagen-carta.jpg"
              />
              <section className="categorias-menu">  
                <div className="categoria-pescados">
                  <h2>Del Mar a la Mesa</h2>

                  <div className="pescado-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Lubina Salvaje al Horno 
                        <span className="iconos">
                           <i title="Pescado/marisco" className="fa-fw fa-solid fa-fish" /> 
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Lomo de lubina salvaje cocinado a la perfección, acompañado de una suave y aromática emulsión de azafrán y una selección de verduras frescas de nuestra huerta</p>
                      <span className="precio-plato">38€</span>
                    </div>
                  </div>

                  <div className="pescado-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Gamba Roja de Garrucha
                        <span className="iconos">
                          <i title="Pescado/marisco" className="fa-fw fa-solid fa-fish" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Exquisitas gambas rojas, cocinadas en su punto justo para preservar su sabor dulce y marino, realzadas con un aire cítrico y la intensidad de la sal de jamón ibérico.</p>
                      <span className="precio-plato">48€</span>
                    </div>
                  </div>

                  <div className="pescado-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Merluza de Pincho a la Romana
                        <span className="iconos">
                           <i title="Pescado/marisco" className="fa-fw fa-solid fa-fish" />
                           <i title="Gluten" className="fa-fw fa-solid fa-wheat-awn" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Lomo de merluza fresca rebozado y frito, servido con una salsa tártara elaborada con ingredientes frescos y alcaparras crujientes.</p>
                      <span className="precio-plato">35€</span>
                    </div>
                  </div>
                </div>

                <div className="categoria-carnes">
                  <h2>Tesoro la Dehesa</h2>

                  <div className="carne-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Cordero Segureño Lechal Asado
                        <span className="iconos">
                            <i title="Lácteos" className="fa-fw fa-solid fa-cheese" />
                            <i title="Frutos secos" className="fa-fw fa-solid fa-seedling" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Paletilla de cordero lechal, cocinada lentamente para obtener una carne tierna y jugosa, aromatizada con romero fresco y acompañada de almendras tostadas.</p>
                      <span className="precio-plato">48€</span>
                    </div>
                  </div>

                  <div className="carne-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Lingote Crujiente de Cochinillo Ibérico Confitado
                        <span className="iconos">
                         <i title="Lácteos" className="fa-fw fa-solid fa-cheese"  />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Cochinillo ibérico cocinado lentamente hasta obtener una textura crujiente por fuera y melosa por dentro, acompañado de la acidez dulce del puré de manzana.</p>
                      <span className="precio-plato">41€</span>
                    </div>
                  </div>

                  <div className="carne-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Milhojas de Foie y Manzana Caramelizada
                        <span className="iconos">
                           <i title="Gluten" className="fa-fw fa-solid fa-wheat-awn" />
                           <i title="Lácteos" className="fa-fw fa-solid fa-cheese" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Capas finas de manzana caramelizada intercaladas con foie gras de pato, servidas con reducción de Pedro Ximénez y crujientes de pan especiado.</p>
                      <span className="precio-plato">41€</span>
                    </div>
                  </div>
                </div> 

                <div className="categoria-postres">
                  <h2>Dulce tentación</h2>

                  <div className="postre-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Sombra de Cacao.
                        <span className="iconos">
                           <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                           <i title=" Lácteos" className="fa-fw fa-solid fa-cheese" />
                           <i title="Frutos secos" className="fa-fw fa-solid fa-seedling" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Mousse de chocolate negro con núcleo líquido de praliné, servido con tierra de cacao y crujiente de avellana.</p>
                      <span className="precio-plato">18€</span>
                    </div>
                  </div>

                  <div className="postre-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Almendra Dorada.
                        <span className="iconos">
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                          <i title="Frutos secos" className="fa-fw fa-solid fa-seedling" />  
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Bizcocho esponjoso de almendra con cobertura de caramelo dorado y helado artesanal de vainilla bourbon.</p>
                      <span className="precio-plato">16€</span>
                    </div>
                  </div>

                  <div className="postre-box">
                    <div className="nombre-plato-incono-box">
                      <h3 className="nombre-plato">Esfera de Frambuesa y Chocolate Blanco.
                        <span className="iconos">
                           <i title="Gluten" className="fa-fw fa-solid fa-wheat-awn" />
                           <i title="Lácteos" className="fa-fw fa-solid fa-cheese" />
                        </span>
                      </h3>  
                    </div>

                    <div className="descripcion-precio-box">
                      <p className="descripcion-plato">Esfera fina de chocolate blanco rellena de mousse de frambuesa y centro líquido de frutos rojos, servida con coulis de frambuesa y pétalos cristalizados.</p>
                      <span className="precio-plato">14€</span>
                    </div>
                  </div>
                </div>
                
                <p className="vino-coctel">Nuestra coctelería ofrece creaciones artesanales que combinan técnica y originalidad, pensadas para sorprender los sentidos.  Contamos también con una cuidada selección de vinos nacionales e internacionales para cada momento de la experiencia gastronómica.</p>   
                
                <div className="comida-llevar">
                  <h2>Gourmet para Llevar</h2> 

                  <div className="entrantes-llevar">
                    <h3 className="titulo-entrantes-llevar">Entrantes</h3>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Ensalada de Bogavante.
                        <span className="iconos">
                          <i title="Pescado y marisco" className="fa-fw fa-solid fa-fish" />
                          <i className="fa-fw fa-solid fa-egg" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">35€</span>  
                    </div>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Milhojas de Foie Gras.
                        <span className="iconos">
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">28€</span>  
                    </div>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Merluza al Horno con Salsa de Azafrán.
                        <span className="iconos">
                          <i title="Pescado/marisco" className="fa-fw fa-solid fa-fish" />
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">38€</span>  
                    </div>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Solomillo de Ternera a la Parrilla.
                        <span className="iconos">
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">50€</span>  
                    </div>
                  </div>

                  <div className="postres-llevar">
                    <h3 className="titulo-entrantes-llevar">Postres</h3>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Tarta de Chocolate con Crumble de Avellanas
                        <span className="iconos">
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                          <i title="Gluten" className="fa-fw fa-solid fa-wheat-awn" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">16€</span>  
                    </div>

                    <div className="nombre-plato-incono-box-llevar">
                      <h3 className="nombre-plato-llevar">Panna Cotta de Vainilla con Frutos Rojos
                          <span className="iconos">
                          <i title="Huevo" className="fa-fw fa-solid fa-egg" />
                          <i title="Gluten" className="fa-fw fa-solid fa-wheat-awn" />
                        </span>
                      </h3>

                      <span className="precio-plato-llevar">14€</span>  
                    </div> 
                  </div>         
                </div>  
              </section> 
            </main>
            <FooterComponent/>          
        </>
    );
};
            