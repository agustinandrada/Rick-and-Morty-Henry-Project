import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import { useState } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Form from './components/Form/Form';




function App() {
   const [characters, setCharacters] = useState([]);
   
   const [userData, setUserData] = useState({email:'',password:''});

   const onLog = () =>{
      
   }



   const onClose = (id) =>{
      const personajes = characters.filter((personaje)=> personaje.id !== parseInt(id))
      setCharacters(personajes)
   }
   
   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } //else {
            //window.alert('¡No hay personajes con este ID!');}
      });
   }

   return (
      <div className='App'>
         <Nav/>
         <Routes>
            <Route path="/home" element=<Cards onClose={onClose} characters={characters} onSearch={onSearch}/> />
            <Route path="/about" element=<About/> />
            <Route path="/detail/:id" element=<Detail/> />
            <Route path='/' element=<Form/> />
         </Routes>
      </div>
   );
}

export default App;
