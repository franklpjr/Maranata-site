import "./HomePage.css"
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Nav/Navbar";

const HomePage = () => {


    return (
        <div>
            <Navbar />
            <Carousel />
            <Footer />
        </div>
    )

}

export default HomePage;