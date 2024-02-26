import Button from "../Elements/Button";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cartSlices";
const CardProduct = (props) => {
  const {children} = props
  return (
     <div className="w-full max-w-xs bg-white border border-gray-200 rounded-lg shadow mx-3 my-2 px-5 mt-5 py-5">
        {children}
    </div>
  );
}
const Header  = (props) => {
  const {image, id} = props
  return (
      <Link to={`/detailproduct/${id}`}>
      <img src={image} 
      alt="product"
      className="p-8 rounded-t-lg h-60 w-full object-cover" /> 
      </Link> 
  )
  }

const Body = (props) => {
  const {name, children} = props
return (
<div className="pb-5">
    <a href="">
        <h5 className="text-xl font-semibold tracking-tight text-gray-900">
           {name.substring(0, 20)}...
        </h5>
        <p className="text-s text-gray-700">{children.substring(0, 50)}</p>
    </a>
</div>
  )
}

const Footer = (props) => {
  const dispatch = useDispatch();
  const {price, id} = props
  return (
    <div className="flex justify-between items-center gap-5">
    <span className="font-bold text-xl">${""}
    {price.toLocaleString("id-ID", { styles : "currency", currency : "USD"})}</span>
    <Button className="bg-blue-600" onClick={ () => dispatch(addToCart({id, qty: 1}))}>Add To Cart</Button>
</div>
  )
}

CardProduct.Header = Header
CardProduct.Body = Body
CardProduct.Footer = Footer


  export default CardProduct 