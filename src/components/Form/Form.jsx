import { useState } from "react";

const  validate = (userData, setErrors, errors) => {
    const regex = /\d+/;
    console.log(regex.test(userData.password));

    if(!userData.email) setErrors({...errors, email:'Email Vacio'})
    else{
        if(userData.email.length > 35) setErrors({...errors, email:'El email debe ser menor a los 35 caracteres'});
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/.test(userData.email)) setErrors({...errors, email:''})// esta es la expresion de email@email.com
    else setErrors({...errors, email:'Email Invalido'});
    }
    if(!userData.password) setErrors({password:'Introduzca una contraseña'});
    if(!regex.test(userData.password)) setErrors({password:'La contraseña debe tener al menos un numero'});
    if(userData.password.length<6) setErrors({password:'Contraseña demasiada corta'});
    if(userData.password.length>10) setErrors({password:'Contraseña demasiada larga'})
    else{setErrors({...errors, email:'', password:''})}

}

export default function Form(login){

    const [userData, setUserData] = useState({email:'',password:''});

    const [errors,setErrors] = useState({email:'',password:''});



    const handleChange = (event)=>{
        const property=event.target.name;
        const value = event.target.value;

        setUserData({...userData,[property]:value})
        validate({...userData,[property]:value}, setErrors, errors);
    }

    const submitHandler = (event, userData, login)=>{
        event.preventDefault() //! Asi no recarga la pag cuando tocamos enter
        login(userData)
    }

    return(
        <form onSubmit={submitHandler}>
            <label htmlFor="email">
                Email:
                <input
                type="email"
                name="email"
                value={userData.email}
                onChange={handleChange}/>
                <span>{errors.email}</span>
            </label>
        <br />
            <label htmlFor="password">
                Password:
                <input
                type="password"
                name="password"
                value={userData.password}
                onChange={handleChange}/>
                <span>{errors.password}</span>
            </label>
        <br />
        <button type="submit">Submit</button>
        </form>
    )
}