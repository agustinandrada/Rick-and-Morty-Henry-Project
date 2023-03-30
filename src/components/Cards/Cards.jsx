import Card from '../Card/Card';
import SearchBar from '../SearchBar/SearchBar';


const Cards = ({characters, onClose, onSearch}) => {

   return <div>
      <SearchBar onSearch={onSearch}/>
      
      {characters.map((character) => {
         return <Card
         key={character.id}
         id={character.id}
         name={character.name}
         status = {character.status}
         species={character.species}
         gender = {character.gender}
         origin={character.name}
         image= {character.image}
         onClose={onClose}
         />
      })}
      </div>;
}


export default Cards;