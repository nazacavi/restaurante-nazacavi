import './MenuDeGrupo.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero from '../components/Hero';


export default function MenuDeGrupo() {
    return (
        <>
            <Header />

            <Hero
                  titulo="Menús de grupo"
                  subtitulo=""
                  imagen="/menus-grupo/imagen-hero-menus.jpg"
            />
        
            <main className="menus-de-grupo">
                <details className="menu">
                    <summary>Menú 1</summary>

                    <ol className="menu-grupos">
                        <li>
                            <span>Aperitivos de bienvenida</span>

                            <ul>
                                <li>Copa de cava brut nature con una ostra francesa Gillardeau nº3 sobre lecho de hielo y un toque de limón.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Primer plato</span>

                            <ul>
                                <li>Risotto cremoso de boletus edulis con lascas de trufa negra y aceite de oliva virgen extra de variedad picual.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Segundo plato</span>

                            <ul>
                                <li>Solomillo de ternera retinta a la parrilla con salsa perigord (trufa negra) y milhojas de patata y foie gras.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Pre-Postre:</span>

                            <ul>
                                <li>Sorbete de limón y hierbabuena con un toque de vodka (opcional).</li>
                            </ul>
                        </li>

                        <li>
                            <span>Postre:</span>

                            <ul>
                                <li>Coulant de chocolate negro con corazón de frambuesa y helado artesanal de vainilla de Madagascar.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Bodegas</span>

                            <ul>
                                <li>Vino blanco D.O. Condado de Huelva</li>
                            </ul>
                        </li>           
                    </ol>
                </details>

                <details className="menu">
                    <summary>Menú 2</summary> 

                    <ol>
                    <li>
                        <span>Aperitivos de bienvenida</span>

                        <ul>
                            <li>Copa de cava brut nature con una ostra francesa Gillardeau nº3 sobre lecho de hielo y un toque de limón.</li>
                        </ul>
                    </li>

                    <li>
                        <span>Primer plato</span>

                        <ul>
                            <li>Lubina salvaje al horno con costra de almendras y salsa holandesa ligera con cítricos.</li>
                        </ul>
                    </li>

                    <li>
                        <span>Segundo plato</span>

                        <ul>
                            <li>Merluza de pincho en papillote con espárragos trigueros, tomate cherry confitado y vinagreta de piñones y albahaca.</li>
                        </ul>
                    </li>

                    <li>
                        <span>Pre-Postre:</span>

                        <ul>
                            <li>Sorbete de limón y hierbabuena con un toque de vodka (opcional).</li>
                        </ul>
                    </li>

                    <li>
                        <span>Postre:</span>

                        <ul>
                            <li>Tarta fina de manzana caramelizada con crema inglesa y crumble de almendras.</li>
                        </ul>
                    </li>

                    <li>
                        <span>Bodegas</span>

                        <ul>
                            <li>Vino blanco D.O. Condado de Huelva</li>
                        </ul>
                    </li>           
                    </ol>
                </details>

                <details className="menu">
                    <summary>Menú 3</summary>

                    <ol>
                        <li>
                            <span>Aperitivos de bienvenida</span>

                            <ul>
                                <li>Copa de cava brut nature con una ostra francesa Gillardeau nº3 sobre lecho de hielo y un toque de limón.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Primer plato</span>

                            <ul>
                                <li>Raviolis rellenos de rabo de toro estofado al vino tinto con mantequilla de salvia y queso comté rallado.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Segundo plato</span>

                            <ul>
                                <li>Paletilla de cordero lechal confitada a baja temperatura con su jugo reducido y puré de chirivía.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Pre-Postre:</span>

                            <ul>
                                <li>Sorbete de limón y hierbabuena con un toque de vodka (opcional).</li>
                            </ul>
                        </li>

                        <li>
                            <span>Postre:</span>

                            <ul>
                                 <li>Degustación de mini postres de autor: macaron, trufa de chocolate, tartaleta de frutas frescas.</li>
                            </ul>
                        </li>

                        <li>
                            <span>Bodegas</span>

                            <ul>
                                <li>Vino blanco D.O. Condado de Huelva</li>
                            </ul>
                        </li>           
                    </ol>
                </details>
            </main>
    
            <Footer/>
        </>
    );
}