import Button from '../Elements/Button/index.jsx';
import InputForm from '../Elements/Input/index.jsx';
const FormRegister = () => {
  return (
    <form action="">
     <InputForm 
    label="Fullname"
    type="text" 
    name="fullname" 
    placeholder="insert your name here..."/>
    <InputForm 
    label="Email"
    type="email" 
    name="email" 
    placeholder="example@gmail.com"/>
     <InputForm 
    label="Password"
    type="password" 
    name="password" 
    placeholder="********"/>
      <InputForm 
    label="Confirm Password"
    type="password" 
    name="confirm password" 
    placeholder="********"/>
    <Button className="bg-blue-600 w-full">Register</Button>
    </form>
  )
}

export default FormRegister