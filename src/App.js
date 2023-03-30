import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import About from './components/About/About'
import Detail from './components/Detail/Detail';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form/Form';
import { useNavigate, useLocation, Route, Routes } from 'react-router-dom';
import Favorites from './components/Favorites/Favorites';


function App() {
   const [characters, setCharacters] = useState([]);

   const navigate = useNavigate();
   const location = useLocation()

   const [access, setAccess] = useState(false);

   const EMAIL = 'agustinandrada1@gmail.com'
   const PASSWORD = 'pass123'

   function login(userData) {
      if (userData.email === EMAIL && userData.password === PASSWORD) {
         setAccess(true);
         navigate('/home');
      }
      else{
         alert('Usuario Incorrecto');
         window.location.reload()
      }
   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]);

   const onClose = (id) =>{
      const personajes = characters.filter((personaje)=> personaje.id !== parseInt(id))
      setCharacters(personajes)
   }

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');}
      });
   }

   return (
      <div className='App'>
         {location.pathname !== '/'  && <Nav/>}
         <Routes>
            <Route path="/home" element={<Cards onClose={onClose} characters={characters} onSearch={onSearch}/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path='/' element={<Form login={login}/>} />
            <Route path='/favorites' element={<Favorites onClose={onClose}/>} />
         </Routes>
      </div>
   );
}

export default App;
