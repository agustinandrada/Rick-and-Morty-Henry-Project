import { useState } from "react";


export default function SearchBar(props) {
   const [Id, setId] = useState("")

   const handleChange =(event) =>{
      setId(event.target.value)
   }

   return (
      <div>
         <input type='search' value={Id} onChange={handleChange}/>
         <button onClick={()=>props.onSearch(Id)}>Agregar</button>
      </div>
   );
}
