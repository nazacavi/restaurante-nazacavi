
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Especialidades() {
    return (
        <>
            <Header />
            <main>
        <h2>Especialidades</h2>

        <img
           src="./especialidades/imagen-tarta-presentacion.JPG"
           title="Tarta de presentación"
           alt="Tarta de presentación"   
        />
        <div>
           <h3>Fuego Patagónico</h3>

           <p>Jugoso corte de cordero patagónico cocinado a la leña, marinado en finas hierbas andinas y especias ahumadas. Acompañado de puré rústico de papas moradas y una reducción de malbec. Un tributo a la cocina de fuego y a la intensidad del sur.</p>
           
           <img
               src="./especialidades/imagen-fuego-patagonico.JPG"
               title="Fuego Patagónico"
               alt="Fuego Patagónico"
           />
        </div>

        <div>
           <h3>Fuego Patagónico</h3>

           <p> Solomillo de res de primera, sellado al punto exacto y bañado en una salsa de vino tinto con notas de trufa negra. Servido con quenelle de boniato y vegetales al vapor. Elegancia y profundidad en cada bocado.</p>
           
           <img
               src="./especialidades/imagen-nocturno-imperial.JPG"
               alt="Nocturno Imperial"
               title="Nocturno Imperial"
           />   
        </div>

        <div>
           <h3>Milhojas de Bruma</h3>

           <p>Crujiente hojaldre artesanal relleno de carne estofada lentamente con cebolla caramelizada, vino oporto y un toque de mostaza antigua. Servido sobre un coulis de tomate confitado. Un plato que equilibra tradición y modernidad.</p>
        
           <img
               src="./especialidades/imagen-milhojas-bruma.JPG"
               alt="Milhojas de Bruma"
               title="Milhojas de Bruma"
           />
        </div>

        <div>
           <h3>Sombra de Cacao</h3>

           <p>Tarta intensa de chocolate belga con base crujiente de avellanas y centro fundente. Decorada con escamas de sal marina y coulis de frutos rojos. El placer oscuro del cacao en su máxima expresión.</p>
           
           <img
               src="./especialidades/imagen-sombra-cacao.JPG"
               alt="Sombra de cacao"
               title="Sombra de cacao"
           />
        </div>
        
        <div>
           <h3>Almendra Dorada</h3>

           <p>Tarta cremosa elaborada con turrón de Jijona, sobre base de galleta tostada y un suave velo de miel. Coronada con almendras crocantes y un toque de nata infusionada en azahar. Tradición reinventada.</p>

           <img
               src="./especialidades/imagen-almendra-dorada.JPG"
               alt="Almendra Dorada"
               title="Almendra Dorada"
           />
        </div>

        <div>
           <h3>Suspiro de Vainilla</h3>

           <p>Delicadas galletas de mantequilla con corazón de crema de vainilla bourbon y cítricos. Ligeramente espolvoreadas con azúcar glas y pétalos de flores secas. Un bocado sutil y etéreo. </p>

           <img
               src="./especialidades/imagen-suspiro-vainilla.JPG"
               alt="Suspiro de Vainilla"
               title="Suspiro de Vainilla"
           />
        </div>


        <div>
           <h3>Rubí Escondido</h3>

           <p>Mezcla vibrante de frutos rojos macerados, vodka premium, licor de flor de saúco y un toque de lima. Servido con hielo picado y decorado con arándanos frescos. Un cóctel intenso y seductor.</p>
        
           <img
               src="./especialidades/imagen-rubi-escondido.JPG"
               alt="Rubí Escondido"
               title="Rubí Escondido"
           />
        </div>

        <div>
           <h3>Sol de Medianoche</h3>

           <p>Combinación exótica de mango, maracuyá, ron añejo y un susurro de jengibre. Equilibrado entre lo dulce y lo cítrico, servido con una rodaja de carambola. Refrescante, dorado y envolvente.</p>
        
           <img
               src="./especialidades/imagen-sol-medianoche.JPG"
               alt="Sol de Medianoche"
               title="Sol de Medianoche"
           />
        </div>
    </main>


            
        
             <Footer/>
        </>
    );
}