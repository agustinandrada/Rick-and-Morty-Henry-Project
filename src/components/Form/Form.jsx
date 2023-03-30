import { useState } from "react";
import validation from "../validation";

export default function Form({login}){

    const [userData, setUserData] = useState({email:'',password:''});

    const [errors,setErrors] = useState({email:'',password:''});



    const handleChange = (event)=>{
        const property= event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]:value})
        validation({...userData,[property]:value}, setErrors, errors);
    }

    function handleSubmit(event) {
        event.preventDefault(); //! Asi no recarga la pag cuando tocamos enter
        login(userData);
    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email"></label>
                Email:
                <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}/>
                <span>{errors.email}</span>
        <br />
            <label htmlFor="password"></label>
                Password:
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}/>
                <span>{errors.password}</span>
        <hr />
        <button type="submit">Submit</button>
        </form>
    )
}