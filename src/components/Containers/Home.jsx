import Header from "../ui/Header";
import Presentation from "../ui/presentation";
import Choise from "../ui/choise";
import About from "../ui/about";

import "../css/home.css"

function Home(){
    return(
        <>
            <Header />
            <Presentation />
            <Choise />
            <About />
        </>
    )
}

export default Home;