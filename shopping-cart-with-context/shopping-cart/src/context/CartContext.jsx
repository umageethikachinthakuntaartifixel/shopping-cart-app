import {
  createContext,
  useContext,
  useState,
  useEffect,
} from "react";
const CartContext = createContext();
function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    let savedCart =
      localStorage.getItem("cart");
    return savedCart
      ? JSON.parse(savedCart)
      : [];
  });
  // save localStorage
  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);
  // add item
  function addToCart(product) {
    let found = false;
    let updatedCart = cart.map((item) => {
      if (item.id === product.id) {
        found = true;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    if (found === false) {
      updatedCart.push({
        ...product,
        quantity: 1,
      });
    }
    setCart(updatedCart);
  }
  // increase quantity
  function increase(id) {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(updatedCart);
  }
  // decrease quantity
  function decrease(id) {
    let updatedCart = cart.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });
    updatedCart = updatedCart.filter((item) => {
      return item.quantity > 0;
    });
    setCart(updatedCart);
  }
  // remove item
  function removeItem(id) {
    let updatedCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(updatedCart);
  }
  // total items
  let totalItems = 0;
  cart.forEach((item) => {
    totalItems =
      totalItems + item.quantity;
  });
  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increase,
        decrease,
        removeItem,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
export function useCart() {

  return useContext(CartContext);
}
export default CartProvider;
