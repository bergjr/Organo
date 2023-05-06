import "./Card.css"

const Card = ({ time, imagem, nome, cargo }) => {
    return (
        <div className={`card card--${time}`}>
            <div className="card__img">
                <img src={imagem} alt="Imagem" />
            </div>
            <p className="card__name">{nome}</p>
            <p className="card__position" >{cargo}</p>    
        </div>
    );
}

export default Card