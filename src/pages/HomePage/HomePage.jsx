import "./HomePage.css"
import Footer from "../../components/Footer";
import Carousel from "../../components/Carousel";
import Navbar from "../../components/Nav/Navbar";
import Video from "../../components/Video/Video";

const HomePage = () => {


    return (
        <div>
            <Navbar />
            <Carousel />
            <Video />
            <Footer />
        </div>
    )

}

export default HomePage;