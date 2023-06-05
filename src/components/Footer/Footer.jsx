import "./Footer.css"
import logomaranata5 from "../../assets/LOGOMARANATA5.png"


function Footer() {

    return(
        <div>
            <div className="footer-wrapper">
                <div className="socialmedia col-sm">
                    <a href="https://www.instagram.com/maranata.clube/">Instagram</a>
                    <a href="https://www.facebook.com/maranataclube/">Facebook</a>
                    <p>Youtube</p>
                </div>
                <img className="footer-img" src={logomaranata5}  />
                <div className="contato-wrapper  col-sm">
                    <p>Fale conosco:</p>
                    <p>contato@maranatadesbravadores.com</p>
                    <p>(92)99297-8550</p>
                    <p>Tv. Benjamin Lima, 80, São Jorge</p>
                    <p>Manaus-AM</p>
                </div>
            </div>
            <div className="footer-fjr">
                <p>Desenvolvido por FJR Software 2023. Todos os direitos reservados.</p>    
            </div> 
        </div>
    )
}

export default Footer;