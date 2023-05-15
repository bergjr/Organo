import "./Card.css"
import { MdClose } from 'react-icons/md'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

const Card = ({id, team, image, name, role, onDelete, colorCard, favorite, onFavorite }) => {
    
    const deleteHandler = (event) => {
        event.preventDefault();
        onDelete(event.currentTarget.id);
    }

    const propsFavorite = {
        size: 40,
        onFavorite: (e) => onFavorite(e.target.id)
    }

    return (
        <div key={id} className="card" style={{background: `linear-gradient(to bottom , ${colorCard} 0%, ${colorCard} 30%, #FFFFFF 0%, #FFFFFF 70%)`}}>
            <MdClose id={id} size={25} style={{alignSelf: 'flex-end', cursor: 'pointer'}} onClick={deleteHandler} />
            <div className="card__img">
                <img src={image} alt="Imagem" />
            </div>
            <p className="card__name">{name}</p>
            <p className="card__position" >{role}</p> 
            { favorite ? 
                <AiFillHeart color="red" id={id} onClick={(e) => onFavorite(e.currentTarget.id)} {...propsFavorite} /> 
                : 
                <AiOutlineHeart id={id} onClick={(e) => onFavorite(e.currentTarget.id)} {...propsFavorite}  />  
            }      
        </div>
    );
}

export default Card