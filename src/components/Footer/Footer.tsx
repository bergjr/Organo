import "./Footer.css"

const Footer = () => {
    return(
        <section className="footer">
            <div className="footer__container">
            <div className="footer__container__redes-socias">
                <a href="www.facebook.com"><img src="./assets/fb.png" alt="Link para o facebook"/></a>
                <a href="www.twitter.com"><img src="./assets/twitter.png" alt="Link para o twitter"/></a>
                <a href="www.instagram.com"><img src="./assets/ig.png" alt="Link para o instagram"/></a>
            </div>
            <div className="footer__container__logo"> 
            </div>
            <p className="footer__container__text">Desenvolvido por Alura.</p>
            </div>
        </section>
    )
}

export default Footer;