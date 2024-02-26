import { useEffect, useRef, useState } from 'react';
import { Login } from '../../services/authlogin.service.js';
import Button from '../Elements/Button/index.jsx';
import InputForm from '../Elements/Input/index.jsx';

const FormLogin = () => {

const [loginFailed, setLoginFailed] = useState("");

const handleLogin = (event) => {
        event.preventDefault();
        // localStorage.setItem('email',event.target.email.value);
        // localStorage.setItem('password',event.target.password.value);
        // console.log(localStorage.getItem('email'));
        // console.log(localStorage.getItem('password'));
        // window.location.href = '/products'
        const data = {
          username : event.target.username.value,
          password : event.target.password.value,
        }
        Login(data, (status, res) => {
          if (status) { 
            localStorage.setItem("token", res);
            window.location.href = '/products'
         } else {
          setLoginFailed(res.response.data);
         }
        });
    }

    const usernameRef = useRef(null);

    useEffect(() => {
        usernameRef.current.focus();
    }, [])
  
return (
  <form onSubmit={handleLogin}>
    <InputForm 
    label="username"
    type="text" 
    name="username" 
    placeholder="insert your username here..."
    ref={usernameRef}/>
     <InputForm 
    label="Password"
    type="password" 
    name="password" 
    placeholder="********"/>
    <Button className="bg-blue-600 w-full" type="submit">Login</Button>
    {loginFailed && <p className="text-red-500">{loginFailed}!</p>}
  </form>
  )
}

export default FormLogin