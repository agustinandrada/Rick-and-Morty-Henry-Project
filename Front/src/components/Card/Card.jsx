import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../../redux/actions';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


export function Card({id, name, status, species,origin, gender, image, onClose}) {

   const dispatch = useDispatch()
   const [isFav, setIsFav] = useState(false)
   const fav = useSelector((state)=> state.myFavorites)

   function handleFavorite(){
      if(isFav){
         setIsFav(false);
         dispatch(removeFav(id));
      }
      else{
         setIsFav(true);
         dispatch(addFav(id, name, status, species,origin, gender, image, onClose));
      }
   }

   useEffect(() => {
      if (fav) {
        fav.forEach((favorite) => {
          if (favorite.id === id) {
            setIsFav(true);
          }
        });
      }
    }, [fav, id]);

   return (
      <div>
         {isFav ? (<button onClick={handleFavorite}>❤️</button>) : 
                  (<button onClick={handleFavorite}>🤍</button>)
         }
         <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt='' />
         <button onClick={()=>onClose(id)}>X</button>
      </div>
   )
}


export default Card