import Button from "../Elements/Button"
import useLogin from "../../hooks/useLogin";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { DarkMode } from "../../context/DarkMode";
import { useContext } from "react";
import { useTotalPrice } from "../../context/totalPriceContext";

const Navbar = () => {
 
    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {isDarkMode, setIsDarkMode } = useContext(DarkMode);
    const { total } = useTotalPrice();
    
    useEffect(() => {
      if (cart.length > 0) {
        const sum = cart.reduce((acc, item) => {
          return acc + item.qty;
        }, 0);
        setTotalCart(sum);
      }
    }, [cart]);
    
    const handleLogout = () => {
        try {
          localStorage.removeItem("token");
          window.location.href = '/login';
        } catch (error) {
          alert("Error occurred while logging out:", error);
        }
      }

  return (
    <div className="py-5 h-20 bg-blue-600 flex justify-end text-white items-center px-10">
      {username}
       <Button className="bg-black ml-5 w-[120px]" onClick={handleLogout}>Logout</Button>
       <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
        total : {totalCart} | price : $ {total}
       </div>
       <Button className={`bg-black px-10 mx-5 text-white rounded`}
       onClick={() => setIsDarkMode(!isDarkMode)}>
        { isDarkMode ? "Light" : "Dark"}
       </Button>
    </div>
  )
}

export default Navbar