import { useEffect } from "react";
import "../css/header.css"


function Header(){
    // useEffect(()=>{
    //     const bar_controls = document.querySelector(".bar-controls")
    //     const menus = document.querySelector(".header-nav .menu .link-contain")
    // })
    const ControlBtn = ()=>{
        document.querySelector(".header-nav .menu .link-contain").classList.toggle("active")
        document.querySelector(".header-nav").classList.toggle("active")
    }
    
    return(
        <>
            <header className="header-nav">
                <div className="logo">
                    <span className="point"></span><p>O plateau</p>
                </div>
                <div className="menu">
                    <div className="link-contain">
                        <a href="#">Acceuil</a>
                        <a href="#">A propos</a>
                        <a href="#">Entreprise</a>
                        <a href="#">Particulier</a>
                        <a href="#">Contact</a>
                    </div>
                    <a href="#" className="login">login</a>
                    <button className="bar-controls" onClick={ControlBtn}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </header>
        </>
    )
}

export default Header;