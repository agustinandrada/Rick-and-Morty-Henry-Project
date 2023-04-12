export default function validation(userData, setErrors, errors){
  if (!userData.email) {
    setErrors({...errors, email: 'Email Vacio'});
    return errors;
  }
  const newErrors = {};

  if (!userData.email) {
    newErrors.email = 'Email Vacio';
  } else {
    if (!/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{3})+$/.test(userData.email)) {
      newErrors.email = 'Email Invalido';
    }
    if (userData.email.length > 35) {
      newErrors.email = 'email demasiado largo';
    }
  }

  if (!userData.password) {
    newErrors.password = 'Ingrese una contraseña';
  } else {
    const regex = /\d+/;
    if (!regex.test(userData.password)) {
      newErrors.password = 'La contraseña debe tener al menos un numero';
    }
    if (userData.password.length < 6 || userData.password.length > 10) {
      newErrors.password = 'la contraseña tiene que tener una longitud entre 6 y 10 caracteres';
    }
  }

  setErrors(newErrors);
  return newErrors;
}


