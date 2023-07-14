import "../css/about.css"

function About(){
    return(
        <div id="about">
            <div className="images">
                <img src="/images/oplateau.jpg" alt="" />
                <img src="/images/oplateau.jpg" alt="" />
            </div>
            <div className="descriptions">
                <h1>Qui sommes nous ?</h1>
                <p>
                    <span>
                        Vous recherchez un entreprise sepcialise dans la domaine du service traiteur dans le 77?
                        Geree par M.Buffet, l'entrepriseBuffet et Receptions accompagne
                        les proffesionels et les particuliers dans l'organisation de tous les types
                        d'evenements, mariage, anniversaire, lancement de produits, gala de charite, etc.
                    </span>
                    <span>
                        Avec plus de 20 ans d'experience dans le metier, M.Buffet vous propose des plats originaux
                        et creatifs.Mettant a votre disposition une carte en contante evolution au fil des saison
                        ,ce traiteur a Croissy-Beauboug s'evertue a vous offrir le meilleur
                        En matiere de produits afin de garantir la satisfaction de ses clients.
                    </span>
                    <span>
                        Lors de son parcours, ila notament eu la chance de travaillerdans de grandes maison comme le Plaza Athenee
                    </span>
                </p>
                <div className="options">
                    <a href="#">En savoir plus</a>

                </div>
            </div>
        </div>
    )
}

export default About;