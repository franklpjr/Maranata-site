import {Link, useParams} from "react-router-dom";
import Footer from "../../components/Footer";
import Navbar from "../../components/Nav/Navbar";
import data from "../../data";
import "./DetailsPage.css"

const DetailsPage = () => {

    const { sections } = data;

    const parameters = useParams();
    const { id: targetId } = parameters;

    const section = sections.find((section) => {
        return section.id === targetId;
    });

    return (
        <div>
            <Navbar />
            <div className="details-wrapper">
                {section ? (
                    <div>
                        <h1>{section.name}</h1>
                        <p>{section.description}</p>
                    </div>    
                ) : (
                    <p>Página não encontrada.</p>
                )}
                <Link to="/Maranata-site">Voltar</Link>
            </div>
            <Footer />
        </div>
    )

}

export default DetailsPage;