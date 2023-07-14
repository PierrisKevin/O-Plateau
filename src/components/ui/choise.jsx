import "../css/choise.css"

function Choise(){
    return(
        <>
            <div id="choise">
                <h1>Pourquoi nous choisir ?</h1>
                <div className="card-container">
                    <div className="card">
                        <div className="icon">
                            <img src="/icons/emoji.png" alt="" />
                        </div>
                        <div className="titre">
                            <h2>Nous satisfaison nos client</h2>
                            <p>Mise en place de votre commande selon votre souhait</p>

                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src="/icons/divers.png" alt="" />
                        </div>
                        <div className="titre">
                            <h2>Nous satisfaison nos client</h2>
                            <p>Des variete de plat qui n'attend que vous ales decouvrir</p>

                        </div>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img src="/icons/chef.png" alt="" />
                        </div>
                        <div className="titre">
                            <h2>Nous satisfaison nos client</h2>
                            <p>Nos chef sont experiementer sortant des grandes ecoles de cuisinnes</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}

export default Choise;