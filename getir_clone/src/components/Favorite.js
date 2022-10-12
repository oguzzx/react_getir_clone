import { useState, useEffect } from "react";
import Products from "../api/products.json";
import ProductItem from "../components/ui/ProductItem";

function Favorite() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="container mx-auto md:pt-8">
      <h3 className="text-sm font-semibold mb-3">Favoriler</h3>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-9 gap-0.1 rounded-lg overflow-hidden">
        {products.length &&
          products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
}

export default Favorite;
