import Card from "../Card/Card";
import { useSelector } from "react-redux";

export default function Favorites() {

  const fav = useSelector(state => state.myFavorites);

  return (
    <>
      {fav && fav.map(({id, name, status, species, gender, image, onClose}) => {
        return (
            <Card
             key={id}
            id={id}
            name={name}
            status = {status}
            species={species}
            gender = {gender}
            origin={name}
            image= {image}
            onClose={onClose}
         />
         )
      })}
    </>
  );
}

