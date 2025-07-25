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
                     imagen="carta/imagen-carta.JPG"
                />
                              
                <h1>Carta</h1>

                <p>Un viaje culinario a través de la esencia de nuestra tierra.</p>

                <section>
                    <div>
                        <h2>Para comenzar</h2>

                        <div>
                            <details>
                                <summary>
                                    <strong>Aperitivo de la Casa</strong>
                                </summary>

                                <p>Pequeña degustación sorpresa del chef, inspirada en los productos de temporada de Jaén.</p>
                            </details>

                            <em>17€</em>
                        </div>

                        <div>
                            <details>
                                <summary>
                                    <strong>Ostra del Guadalquivir con Perlas de AOVE y Cítricos</strong>
                                </summary>

                                <p>Ostra fresca y carnosa, realzada con la delicadeza de nuestro aceite de oliva virgen extra y un toque refrescante de cítricos locales.</p>
                            </details>

                            <em>22€</em>
                        </div>

                        <div>
                            <details>
                                <summary>
                                    <strong>Espárragos Blancos de Jaén a la Parrilla con Holandesa de Trufa Blanca</strong>
                                </summary>

                                <p>Espárragos tiernos y ligeramente ahumados, acompañados de una salsa holandesa enriquecida con el aroma inconfundible de la trufa blanca.</p>
                            </details>

                            <em>20€</em>
                        </div>

                        <ul>
                            <li>Milhojas de Bruma<p>Crujiente hojaldre artesanal relleno de carne estofada lentamente con cebolla caramelizada, vino oporto y un toque de mostaza antigua. Servido sobre un coulis de tomate confitado. Un plato que equilibra tradición y modernidad.(25€)</p></li>
                            <li>Croquetas Cremosas de Rabo de Toro Estofado con Alioli de Ajo Negro:<p>Croquetas caseras con un corazón meloso de rabo de toro estofado a fuego lento, acompañadas de un alioli suave y lleno de sabor.(18€)</p></li>
                            <li>Anchoas del Cantábrico sobre Tosta de Pan de Cristal con Tomate Concassé y Hierbas Frescas:<p>Anchoas de calidad superior servidas sobre pan de cristal crujiente, con tomate fresco triturado y un bouquet de hierbas aromáticas.(24€)</p></li>
                            <li>Foie Gras Micuit Casero con Gelatina de Pedro Ximénez y Tostadas de Frutos Secos<p>Micuit de foie gras elaborado en nuestra cocina, acompañado de la dulzura elegante de una gelatina de vino Pedro Ximénez y tostadas crujientes con frutos secos.(28€)</p></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Del Mar a la Mesa</h2>

                        <ul>
                            <li>Lubina Salvaje al Horno con Emulsión de Azafrán y Verduritas de la Huerta:<p>Lomo de lubina salvaje cocinado a la perfección, acompañado de una suave y aromática emulsión de azafrán y una selección de verduras frescas de nuestra huerta.(38€)</p></li>
                            <li>Gamba Roja de Garrucha a la Plancha con Aire de Limón y Sal de Jamón:<p> Exquisitas gambas rojas, cocinadas en su punto justo para preservar su sabor dulce y marino, realzadas con un aire cítrico y la intensidad de la sal de jamón ibérico.(48€)</p></li>
                            <li>Merluza de Pincho a la Romana con Salsa Tártara Casera y Alcaparras Fritas:<p>Lomo de merluza fresca rebozado y frito, servido con una salsa tártara elaborada con ingredientes frescos y alcaparras crujientes.(35€)</p></li>
                            <li>Pulpo a la Brasa con Parmentier de Patata Ahumada y Pimentón de la Vera:<p>Tentáculo de pulpo tierno y ligeramente ahumado a la parrilla, acompañado de un cremoso puré de patata con el toque característico del pimentón.(40€)</p></li>
                            <li>Arroz Meloso con Bogavante y Almejas de Carril:<p>Un arroz rico y sabroso con la jugosidad del bogavante y el sabor intenso de las almejas frescas.(42€)</p></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Tesoros de la Dehesa</h2>

                        <ul>
                            <li>Fuego Patagónico:<p>Jugoso corte de cordero patagónico cocinado a la leña, marinado en finas hierbas andinas y especias ahumadas. Acompañado de puré rústico de papas moradas y una reducción de malbec..(48€)</p></li>
                            <li>Cordero Segureño Lechal Asado a Baja Temperatura con Romero y Almendras:<p>Paletilla de cordero lechal, cocinada lentamente para obtener una carne tierna y jugosa, aromatizada con romero fresco y acompañada de almendras tostadas.(42€)</p> </li>
                            <li>Lingote Crujiente de Cochinillo Ibérico Confitado con Puré de Manzana Reineta y Reducción de Vino Tinto:<p>Cochinillo ibérico cocinado lentamente hasta obtener una textura crujiente por fuera y melosa por dentro, acompañado de la acidez dulce del puré de manzana y la elegancia de la reducción de vino tinto.(45€)</p></li>
                            <li>Civet de Ciervo con Setas de Temporada y Castañas Glaseadas: <p>Un guiso tradicional de ciervo, cocinado lentamente con vino tinto y hierbas aromáticas, acompañado de setas frescas de temporada y castañas glaseadas.(40€)</p></li>
                            <li>Nocturno Imperial:<p>Solomillo de res de primera, sellado al punto exacto y bañado en una salsa de vino tinto con notas de trufa negra. Servido con quenelle de boniato y vegetales al vapor. Elegancia y profundidad en cada bocado.(52€)</p></li>    
                        </ul>
                    </div>

                    <div>
                        <h2>Dulce tentación</h2>

                        <ul>
                            <li>Sombra de Cacao: <p>Tarta intensa de chocolate belga con base crujiente de avellanas y centro fundente. Decorada con escamas de sal marina y coulis de frutos rojos. El placer oscuro del cacao en su máxima expresión.(18€)</p></li>
                            <li>Almendra Dorada:<p>Tarta cremosa elaborada con turrón de Jijona, sobre base de galleta tostada y un suave velo de miel. Coronada con almendras crocantes y un toque de nata infusionada en azahar. Tradición reinventada.(16€)</p></li>
                            <li>Suspiro de Vainilla:<p>Tarta cremosa elaborada con turrón de Jijona, sobre base de galleta tostada y un suave velo de miel. Coronada con almendras crocantes y un toque de nata infusionada en azahar. Tradición reinventada.(15€)</p></li>
                            <li>Tarta Tatín de Manzana con Helado de Canela: <p>La clásica tarta de manzana caramelizada servida tibia con un cremoso helado de canela.(14€)</p></li>
                            <li>Torrija Caramelizada con Leche Infusionada en Cítricos y Helado de Leche Merengada:<p>Una reinterpretación de un postre tradicional, con una torrija cremosa y caramelizada, leche infusionada con aromas cítricos y un refrescante helado de leche merengada.(16)</p></li>
                        </ul>
                    </div>

                    <div>
                        <h2>El Arte de la Coctelería</h2>

                        <ul>
                            <li>Rubí Escondido:<p>Mezcla vibrante de frutos rojos macerados, vodka premium, licor de flor de saúco y un toque de lima. Servido con hielo picado y decorado con arándanos frescos. Un cóctel intenso y seductor.(14€)</p></li>
                            <li>Sol de Medianoche:<p>Combinación exótica de mango, maracuyá, ron añejo y un susurro de jengibre. Equilibrado entre lo dulce y lo cítrico, servido con una rodaja de carambola. Refrescante, dorado y envolvente.(15€)</p></li>
                        </ul>
                    </div>

                    <div>
                        <h2>Bodega</h2>

                        <p>Nuestra selecta bodega cuenta con una cuidada selección de vinos de la región de Jaén, así como de otras denominaciones de origen nacionales e internacionales, para maridar a la perfección con cada uno de nuestros platos. Nuestro sumiller estará encantado de asesorarle y ofrecerle recomendaciones personalizadas. También disponemos de una selección de cervezas artesanales locales y nacionales.</p>
                    </div>
                </section>

                <section>
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

                <small>
                    Información Adicional:
                    <br />Pedido Mínimo: 50€
                    <br />Horario de Pedidos: 12:00-16:00 y 19:00-22:00.
                    <br />Recogida en Restaurante/Entrega a Domicilio: Consultar.
                    <br />Contacto para Pedidos: [Número de teléfono del restaurante] / [Dirección de correo electrónico del restaurante].
                    <br />Alérgenos: Indicar al realizar el pedido.
                    <br />¡Esperamos que disfrute de esta selección gourmet en casa!
                </small>
            </main>
            <Footer/>          
        </>
    );
};
            