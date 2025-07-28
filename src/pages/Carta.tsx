import Header from '../components/Header';
import Footer from '../components/Footer';
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
              <section>     
                  <table>
                      <caption>Del Mar a la Mesa</caption>
                      <tbody>
                          <tr>
                            <td className='nombre-plato'>Lubina Salvaje al Horno</td>
                            <td className='precio-plato'>38€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Lomo de lubina salvaje cocinado a la perfección, acompañado de una suave y aromática emulsión de azafrán y una selección de verduras frescas de nuestra huerta.</td>
                          </tr>
                          <tr>
                            <td className='nombre-plato'>Gamba Roja de Garrucha</td>
                            <td className='precio-plato'>48€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Exquisitas gambas rojas, cocinadas en su punto justo para preservar su sabor dulce y marino, realzadas con un aire cítrico y la intensidad de la sal de jamón ibérico.</td>
                          </tr>
                          <tr>
                            <td className='nombre-plato'>Merluza de Pincho a la Romana</td>
                            <td className='precio-plato'>35€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Lomo de merluza fresca rebozado y frito, servido con una salsa tártara elaborada con ingredientes frescos y alcaparras crujientes.</td>
                          </tr>
                      </tbody>
                  </table>

                  <table>
                    <caption>Tesoro la Dehesa</caption>
                      <tbody>
                          <tr>
                            <td className='nombre-plato'>Cordero Segureño Lechal Asado</td>
                            <td className='precio-plato'>48€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Paletilla de cordero lechal, cocinada lentamente para obtener una carne tierna y jugosa, aromatizada con romero fresco y acompañada de almendras tostadas.</td>
                          </tr>
                          <tr>
                            <td className='nombre-plato'>Lingote Crujiente de Cochinillo Ibérico Confitado</td>
                            <td className='precio-plato'>41€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Cochinillo ibérico cocinado lentamente hasta obtener una textura crujiente por fuera y melosa por dentro, acompañado de la acidez dulce del puré de manzana y la elegancia de la reducción de vino tinto.</td>
                          </tr>
                          <tr>
                            <td className='nombre-plato'>Milhojas de Foie y Manzana Caramelizada</td>
                            <td className='precio-plato'>40€</td>
                          </tr>
                          <tr>
                            <td className='descripcion-plato'>Capas finas de manzana caramelizada intercaladas con foie gras de pato, servidas con reducción de Pedro Ximénez y crujientes de pan especiado.</td>
                          </tr>
                      </tbody>
                      
                  </table>
                
                  <table>
                    <caption>Dulce tentación</caption>
                    <tbody>
                      <tr>
                        <td className='nombre-plato'>Sombra de Cacao.</td>
                        <td className='precio-plato'>18€</td>
                      </tr>
                      <tr>
                          <td className='descripcion-plato'>Mousse de chocolate negro con núcleo líquido de praliné, servido con tierra de cacao y crujiente de avellana.</td>
                      </tr>
                      <tr>
                        <td className='nombre-plato'>Almendra Dorada.</td>
                        <td className='precio-plato'>16€</td>
                      </tr>
                      <tr>
                        <td className='descripcion-plato'>Bizcocho esponjoso de almendra con cobertura de caramelo dorado y helado artesanal de vainilla bourbon.</td>
                      </tr>
                      <tr>
                        <td className='nombre-plato'>Esfera de Frambuesa y Chocolate Blanco.</td>
                        <td className='precio-plato'>14€</td>
                      </tr>
                      <tr>
                        <td className='descripcion-plato'>Esfera fina de chocolate blanco rellena de mousse de frambuesa y centro líquido de frutos rojos, servida con coulis de frambuesa y pétalos cristalizados.</td>
                      </tr>
                      </tbody>
                  </table>
                  
                  <div>
                      <p>Nuestra coctelería ofrece creaciones artesanales que combinan técnica y originalidad, pensadas para sorprender los sentidos.  Contamos también con una cuidada selección de vinos nacionales e internacionales para cada momento de la experiencia gastronómica.</p>   
                  </div>
          
                  <h2>Menú "Alma de la Tierra" - Selección Gourmet para Llevar</h2> 
                  <table>
                    <tbody>
                      <tr className='titulo-seccion'>Entrantes</tr>

                      <tr>
                        <td>Ensalada de Bogavante.</td>
                        <td className='precio-plato'>35€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Frescos trozos de bogavante con aguacate y una vinagreta cítrica.</td>
                      </tr>

                      <tr>
                        <td>Milhojas de Foie Gras.</td>
                        <td className='precio-plato'>28€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Delicadas capas de foie gras con manzana y reducción de Pedro Ximénez.</td>
                      </tr>

                      <tr className='titulo-seccion'>Plato Principal</tr>

                      <tr>
                        <td>Merluza al Horno con Salsa de Azafrán.</td>
                        <td className='precio-plato'>38€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Lomo de merluza con suave salsa de azafrán y espárragos trigueros.</td>
                      </tr>

                      <tr>
                        <td>Solomillo de Ternera a la Parrilla.</td>
                        <td className='precio-plato'>50€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Solomillo de ternera con pimientos asados.</td>
                      </tr>
                      
                      <tr className='titulo-seccion'>Postre</tr>

                      <tr>
                        <td>Tarta de Chocolate con Crumble de Avellanas</td>
                        <td className='precio-plato'>16€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Intensa tarta de chocolate con crumble crujiente.</td>
                      </tr>

                      <tr>
                        <td>Panna Cotta de Vainilla con Frutos Rojos</td>
                        <td className='precio-plato'>14€</td>
                      </tr>

                      <tr>
                          <td className='descripcion-plato'>Panna Cotta de Vainilla con Frutos Rojos y mermelada de Frambuesa</td>
                      </tr>
                    </tbody>
                  </table>
              </section>
            </main>

            <Footer/>          
        </>
    );
};
            