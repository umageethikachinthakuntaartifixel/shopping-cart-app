import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
function Header() {
  const { totalItems } = useCart();//here usecart() is the custom hook
  return (
    <div className="header">
      <h2>Shopping Cart</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cart">
          Cart ({totalItems})
        </Link>
      </div>
    </div>
  );
}
export default Header;
