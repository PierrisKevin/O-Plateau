import "../css/presentation.css"

function Presentation(){

    return(
        <div id="home">
            <div className="box-contain">
                <div className="box">
                    <div className="proposition">
                        <h2>Vous etes une entreprise !</h2>
                        <p>
                            Nous vous reservons une pack special pour vous !
                        </p>
                    </div>
                    <div className="more-info">
                        <a href="#">En savoir plus</a>
                    </div>
                </div>
                <div className="box">
                <div className="proposition">
                        <h2>Vous sohaitez faire un evenement particulier!</h2>
                        <p>
                            Nous vous reservons une pack special pour vous !
                        </p>
                    </div>
                    <div className="more-info">
                        <a href="#">En savoir plus</a>
                    </div>
                </div>
            </div>
            <div className="desc-contain">
                <h1>
                    Decouvrer une large gamme de nos produits alimentaire
                </h1>
                <p>Vous recherchez un entreprise specialisee dans le domaine du service traiteur dans le 77 ?
                    Geree par M.Buffet l'entreprise et receptions accompagne les profesionnels dans l'organisation
                    de tous les types d'evenement : mariage, anniversaire, lancement de produit, gala de charite etc.
                </p>
                <div className="discover">
                    <a href="#">Decouvrir <img src="/icons/enter.png"/> </a>
                </div>
                
            </div>
        </div>
    )
}

export default Presentation;

// Mr sariaka 