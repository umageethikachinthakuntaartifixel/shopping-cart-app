import { useCart } from "../context/CartContext";
function ProductCard({ product }) {
  const { addToCart } = useCart();
  return (
    <div className="card">
      <h3>{product.name}</h3>
      <p>
        {product.price}
      </p>
      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}
export default ProductCard;
