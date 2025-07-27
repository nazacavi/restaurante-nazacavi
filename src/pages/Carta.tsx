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
                              <td>Lubina Salvaje al Horno</td>
                              <td>38€</td>
                            </tr>

                            <tr>
                              <td>Lomo de lubina salvaje cocinado a la perfección, acompañado de una suave y aromática emulsión de azafrán y una selección de verduras frescas de nuestra huerta.</td>
                            </tr>

                            <tr>
                              <td>Gamba Roja de Garrucha</td>
                              <td>48€</td>
                            </tr>

                            <tr>
                              <td>Exquisitas gambas rojas, cocinadas en su punto justo para preservar su sabor dulce y marino, realzadas con un aire cítrico y la intensidad de la sal de jamón ibérico.</td>
                            </tr>

                            <tr>
                              <td>Merluza de Pincho a la Romana</td>
                              <td>35€</td>
                            </tr>

                            <tr>
                              <td>Lomo de merluza fresca rebozado y frito, servido con una salsa tártara elaborada con ingredientes frescos y alcaparras crujientes.</td>
                            </tr>
                        </tbody>
                    </table>

                    <table>
                      <caption>Tesoros de la Dehesa</caption>

                        <tbody>
                            <tr>
                              <td>Cordero Segureño Lechal Asado</td>
                              <td>48€</td>
                            </tr>

                            <tr>
                              <td>Paletilla de cordero lechal, cocinada lentamente para obtener una carne tierna y jugosa, aromatizada con romero fresco y acompañada de almendras tostadas.</td>
                            </tr>

                            <tr>
                              <td>Lingote Crujiente de Cochinillo Ibérico Confitado</td>
                              <td>41€</td>
                            </tr>

                            <tr>
                              <td>Cochinillo ibérico cocinado lentamente hasta obtener una textura crujiente por fuera y melosa por dentro, acompañado de la acidez dulce del puré de manzana y la elegancia de la reducción de vino tinto.</td>
                            </tr>

                            <tr>
                              <td>Milhojas de Foie y Manzana Caramelizada</td>
                              <td>40€</td>
                            </tr>

                            <tr>
                              <td>Capas finas de manzana caramelizada intercaladas con foie gras de pato, servidas con reducción de Pedro Ximénez y crujientes de pan especiado.</td>
                            </tr>
                        </tbody>

                        
                    </table>
                  

                    <table>
                      <caption>Dulce tentación</caption>

                      <tbody>
                        <tr>
                          <td>Sombra de Cacao</td>
                          <td>18€</td>
                        </tr>

                        <tr>
                            <td>Mousse de chocolate negro con núcleo líquido de praliné, servido con tierra de cacao y crujiente de avellana.</td>
                        </tr>

                        <tr>
                          <td>Almendra Dorada</td>
                          <td>16€</td>
                        </tr>

                        <tr>
                          <td>Bizcocho esponjoso de almendra con cobertura de caramelo dorado y helado artesanal de vainilla bourbon.</td>
                        </tr>

                        <tr>
                          <td>Esfera de Frambuesa y Chocolate Blanco</td>
                          <td>14€</td>
                        </tr>

                        <tr>
                          <td>Esfera fina de chocolate blanco rellena de mousse de frambuesa y centro líquido de frutos rojos, servida con coulis de frambuesa y pétalos cristalizados.</td>
                        </tr>
                        </tbody>
                    </table>
                    
                    
                    <div>
                        <p>Nuestra coctelería ofrece creaciones artesanales que combinan técnica y originalidad, pensadas para sorprender los sentidos.  Contamos también con una cuidada selección de vinos nacionales e internacionales para cada momento de la experiencia gastronómica.</p>   
                    </div>

                    
           
                    <h2>Menú "Alma de la Tierra" - Selección Gourmet para Llevar</h2>

                    <p>Disfrute de la excelencia culinaria en casa.</p>

                    <div>
                        <h3>Entrante (Elige 1)</h3>

                        <ul>
                            <li>Ensalada de Bogavante con Vinagreta de Cítricos: (35€). Frescos trozos de bogavante con aguacate y una vinagreta cítrica.</li>
                            <li>Milhojas de Foie Gras con Manzana Caramelizada: (28€). Delicadas capas de foie gras con manzana y reducción de Pedro Ximénez.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Plato Principal (Elige 1)</h3>

                        <ul>
                            <li>Merluza al Horno con Salsa de Azafrán: (38€). Lomo de merluza con suave salsa de azafrán y espárragos trigueros.</li>
                            <li>Solomillo de Ternera a la Parrilla con Pimientos Asados: (50€). Solomillo de ternera con pimientos asados.</li>
                        </ul>
                    </div>

                    <div>
                        <h3>Postre (Elige 1)</h3>

                        <ul>
                            <li>Tarta de Chocolate con Crumble de Avellanas: (16€). Intensa tarta de chocolate con crumble crujiente.</li>
                            <li>Panna Cotta de Vainilla con Frutos Rojos: (14€). Cremosa panna cotta con salsa de frutos rojos. (Salsa aparte)</li>
                        </ul>
                    </div>
                </section>

            </main>
            <Footer/>          
        </>
    );
};
            