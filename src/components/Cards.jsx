import Card from './Card';

const Cards = (props) => {
   return <div>
      {props.characters.map((character) => {
         return <Card
         id={character.id}
         name={character.name}
         status = {character.status}
         species={character.species}
         gender = {character.gender}
         origin={character.name}
         image= {character.image}
         onClose={() => props.id}
         />
      })}
      </div>;
}

export default Cards;