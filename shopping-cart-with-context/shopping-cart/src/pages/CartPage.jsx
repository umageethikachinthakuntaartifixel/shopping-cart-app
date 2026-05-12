import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
function CartPage() {
  const { cart } = useCart();
  let totalPrice = 0;
  cart.forEach((item) => {
    totalPrice =
      totalPrice + item.price * item.quantity;
  });
  return (
    <div className="cart">
      <h2>Cart Items</h2>
      {cart.length === 0 ? (
        <p>Cart Empty</p>
      ) : (
        cart.map((item) => {
          return (
            <CartItem
              key={item.id}
              item={item}
            />
          );
        })
      )}
      <h2>
        Total : {totalPrice}
      </h2>

    </div>
  );
}
export default CartPage;
