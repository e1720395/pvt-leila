import './sectionPrincipale.scss';

export default function entetePrincipale(){
    return(
        <div className="contenu-principal">
            <div class="citation">
            <img src="./images/menu-citation.jpg" alt="" />
            <blockquote>
            Le plus grand outrage que l'on puisse faire à un gourmand, c'est de l'interrompre dans l'exercice de ses mâchoires.
            <cite>- Alexandre Balthazar Grimod de la Reynière</cite>
            </blockquote>
            </div>

            <div class="carte">
                <section>
                    <ul>
                        <li>
                            <span class="nom">Jardin de champignons d’automne<br/><i class="desc">crème de cèpes, émulsion au thé noir</i></span>
                            <span class="prix">33</span>
                        </li>
                        <li>
                            <span class="nom">Sandre à la peau croustillante<br/><i class="desc">fondue d’échalotes, sauce au vin rouge</i></span>
                            <span class="prix">42</span>
                        </li>
                        <li>
                            <span class="nom">Saint-pierre rôti aux olives taggiasche<br/><i class="desc">mousseline d’artichaut, fumet de poisson au citron kalamansi</i></span>
                            <span class="prix">49</span>
                        </li>
                        <li>
                            <span class="nom">Côte de porcelet et poitrine de cochon du Cantal croustillant<br/><i class="desc">légumes de saison et crémeux de céleri-rave</i></span>
                            <span class="prix">42</span>
                        </li>
                        <li>
                            <span class="nom">Ris de veau doré au sautoir et cèpes<br/><i class="desc">mousseline de cèpes, jus de veau à la cazette du Morvan</i></span>
                            <span class="prix">63</span>
                        </li>
                        <li>
                            <span class="nom">Chariot de fromages affinés de nos régions</span>
                            <span class="prix">12</span>
                        </li>
                        <li>
                            <span class="nom">Tarte fine aux pommes de Bernard Loiseau<br/><i class="desc">sorbet pomme verte</i></span>
                            <span class="prix">12</span>
                        </li>
                    </ul>
                </section>
            </div>
            
        </div>
        );

    }