import { ADD_FAV, REMOVE_FAV } from "./types"

const initialState = {myFavorite: []}

export default function reducer(state = initialState, {type, payload}){

    switch(type){
        case ADD_FAV:
            return{...state, myFavorite:payload}
        case REMOVE_FAV:
            const filter = state.myFavorite.filter((character) => character.id !== parseInt(payload))
            return{myFavorite:filter}
        default:
            return {...state}
    }
}
