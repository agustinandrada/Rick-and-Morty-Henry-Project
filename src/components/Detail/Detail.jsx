import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = ()=>{

    const {id} = useParams();
    const [character,setCharacter] = useState({})
    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(({ data }) => setCharacter(data)
        );
    },[id]);

    return (
        <div>
            {character.name ? (
            <>
            <h1>{character.name}</h1>
            <h2>{character.status}</h2>
            <h2>{character.species}</h2>
            <h2>{character.gender}</h2>
            <h2>{character.origin?.name}</h2>
            <img src={character.image} alt='imagen' />
            </>
    ):(
        <h3>Loading...</h3>
    )}
        </div>
    )
}

export default Detail;