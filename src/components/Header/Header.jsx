import "./Header.css";
import logomaranata from "../../assets/LOGOMARANATA6.png"
import { useNavigate } from "react-router-dom";
import { useCallback } from "react";
import data from "../../data";
import SectionsList from "../../components/SectionsList";

function Header() {

    const navigate = useNavigate();

    const { sections } = data;

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const handleOnItemClick = useCallback((section) => {
        navigate(`/details/${section.id}`);
    })
    return(
        <div className="header-wrapper">
            <div className="header-content">
                <img className="header-img" src={logomaranata}  />
                <SectionsList sections={sections} onItemClick={handleOnItemClick} />
            </div>
        </div>
    )
}

export default Header;