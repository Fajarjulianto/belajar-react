import { Link } from "react-router-dom"
import { useContext } from "react";
import { DarkMode } from "../../context/DarkMode.jsx";


const AuthLayouts = (props) => {
    const {isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const {children, title, type } = props
  return (
  <div className={`flex justify-center min-h-screen items-center ${isDarkMode && "bg-slate-900"}`}>
     <div className="w-full max-w-xs">
      <button className="absolute right-2 top-2 bg-blue-600 p-2 text-white rounded"
      onClick={() => setIsDarkMode(!isDarkMode)}>
        { isDarkMode ? "Light" : "Dark"}
      </button>
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      <p className="font-medium text-slate-500 mb-8">Welcome, please enteryour details</p>
      {children}
      <Navigation type={type}/>
    </div>
  </div>
  )
}

const Navigation = ({type}) => {
  if (type === "login") {
  return (
    <p className="text-sm mt-5 text-center">Don't Have an Account?{" "} 
    <Link className="font-bold text-blue-600" to="/register">
      Register
    </Link>
</p>
   )
 } else {
  return (
    <p className="text-sm mt-5 text-center">Already Have an Account?{" "}  
    <Link className="font-bold text-blue-600" to="/login">
      Login
    </Link>
    </p>
  )
 }
}

export default AuthLayouts