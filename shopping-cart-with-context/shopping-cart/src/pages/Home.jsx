import { useState } from "react";
import products from "../data/products";
import ProductCard from "../components/ProductCard";
function Home() {
  const [search, setSearch] = useState("");
  let filteredProducts = products.filter((product) => {
    return product.name
      .toLowerCase()
      .includes(search.toLowerCase());
  });
  return (
    <div>
      <input
        type="text"
        placeholder="Search Product"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
        className="search"
      />
      <div className="products">
        {filteredProducts.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Home;
