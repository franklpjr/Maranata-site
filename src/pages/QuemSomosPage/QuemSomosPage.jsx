import Footer from "../../components/Footer";
import Navbar from "../../components/Nav/Navbar";
import "./QuemSomos.css"

//Trocar Quem Somos por Nossa História

const QuemSomosPage = () => {

    return (
        <div>
            <Navbar />
                    <div className="init">
                        <h1>Quem Somos</h1>
                        <p>Página em desenvolvimento. Ajude o Maranata a completar este conteúdo: (92)99297-8550</p>
                    </div>    
                {/*<Link to="/"><img src={homebutton} className="home-button"/></Link> {/* Ultima alteracao, troquei o NavLink por Link e troquei /Maranata-site por /            */}
            <Footer />
        </div>
    )

}

export default QuemSomosPage;