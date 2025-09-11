
import './Especialidades.css';
import Header from '../components/Header';
import FooterComponent from '../components/FooterComponent';
import Hero from '../components/Hero';

export default function Especialidades() {
    return (
        <>
            <Header />
            <main>

                <Hero
                    titulo="Especialidades"
                    subtitulo=""
                    imagen="especialidades/imagen-tarta-presentacion.JPG"
                />

                <section className="contenedor-principal-especialidades">
                    <article className="contenedor-imagen-texto-especialidades">
                        <img
                          src="./especialidades/imagen-fuego-patagonico.JPG"
                          title="Fuego Patagónico"
                          alt="Fuego Patagónico"
                          />    

                        <div className="contenedor-texto-especialidades">
                            <h2>Fuego Patagónico</h2>

                            <p>Jugoso corte de cordero patagónico cocinado a la leña, marinado en finas hierbas andinas y especias ahumadas. Acompañado de puré rústico de papas moradas y una reducción de malbec. Un tributo a la cocina de fuego y a la intensidad del sur.</p> 
                        </div>
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <div className="contenedor-texto-especialidades">
                            <h2>Osobuco riojano </h2>

                            <p> Solomillo de res de primera, sellado al punto exacto y bañado en una salsa de vino tinto con notas de trufa negra. Servido con quenelle de boniato y vegetales al vapor. Elegancia y profundidad en cada bocado.</p>
                        </div>

                        <img
                            src="./especialidades/imagen-nocturno-imperial.JPG"
                            alt="Nocturno Imperial"
                            title="Nocturno Imperial"
                        />   
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <img
                        src="./especialidades/imagen-milhojas-bruma.JPG"
                        alt="Milhojas de Bruma"
                        title="Milhojas de Bruma"
                        />

                        <div className="contenedor-texto-especialidades" >
                            <h2>Milhojas de Bruma</h2>

                            <p>Crujiente hojaldre artesanal relleno de carne estofada lentamente con cebolla caramelizada, vino oporto y un toque de mostaza antigua. Servido sobre un coulis de tomate confitado. Un plato que equilibra tradición y modernidad.</p>
                        </div>
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <div className="contenedor-texto-especialidades">
                            <h2>Sombra de Cacao</h2>

                            <p>Tarta intensa de chocolate belga con base crujiente de avellanas y centro fundente. Decorada con escamas de sal marina y coulis de frutos rojos. El placer oscuro del cacao en su máxima expresión.</p>
                        </div>

                       <img
                           src="./especialidades/imagen-sombra-cacao.JPG"
                           alt="Sombra de cacao"
                           title="Sombra de cacao"
                       />
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <img
                           src="./especialidades/imagen-almendra-dorada.JPG"
                           alt="Almendra Dorada"
                           title="Almendra Dorada"
                       />

                       <div className="contenedor-texto-especialidades">
                            <h2>Almendra Dorada</h2>

                            <p>Tarta cremosa elaborada con turrón de Jijona, sobre base de galleta tostada y un suave velo de miel. Coronada con almendras crocantes y un toque de nata infusionada en azahar. Tradición reinventada.</p>
                        </div>   
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <div className="contenedor-texto-especialidades">
                            <h2>Suspiro de Vainilla</h2>

                            <p>Delicadas galletas de mantequilla con corazón de crema de vainilla bourbon y cítricos. Ligeramente espolvoreadas con azúcar glas y pétalos de flores secas. Un bocado sutil y etéreo. </p>
                        </div>

                       <img
                           src="./especialidades/imagen-suspiro-vainilla.JPG"
                           alt="Suspiro de Vainilla"
                           title="Suspiro de Vainilla"
                       />
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <img
                            src="./especialidades/imagen-rubi-escondido.JPG"
                            alt="Rubí Escondido"
                            title="Rubí Escondido"
                        />

                        <div className="contenedor-texto-especialidades">
                            <h2>Rubí Escondido</h2>

                            <p>Mezcla vibrante de frutos rojos macerados, vodka premium, licor de flor de saúco y un toque de lima. Servido con hielo picado y decorado con arándanos frescos. Un cóctel intenso y seductor.</p>
                        </div>
                    </article>

                    <article className="contenedor-imagen-texto-especialidades">
                        <div className="contenedor-texto-especialidades">
                            <h2>Sol de Medianoche</h2>

                            <p>Combinación exótica de mango, maracuyá, ron añejo y un susurro de jengibre. Equilibrado entre lo dulce y lo cítrico, servido con una rodaja de carambola. Refrescante, dorado y envolvente.</p>
                        </div>

                       <img
                           src="./especialidades/imagen-sol-medianoche.JPG"
                           alt="Sol de Medianoche"
                           title="Sol de Medianoche"
                       />
                    </article>
                </section>
            </main>
            
            <FooterComponent/>
        </>
    );
}