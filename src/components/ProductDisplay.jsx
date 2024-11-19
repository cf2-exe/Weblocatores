/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

export default function ProductDisplay({ sectionName }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://yourserver.com/api/products");
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <div className="flex flex-col gap-[2rem]">
        <h1 className="text-[3rem]">{sectionName}</h1>
        <div className="products-display">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
