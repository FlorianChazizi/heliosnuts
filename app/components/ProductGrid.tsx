import React from "react";
import ProductCard from "./ProductCard";
import "../styles/productgrid.css";

interface Product {
  id: number;
  image: string;
  name: string;
}

interface ProductGridProps {
  products: Product[]; // List of products to display
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} image={product.image} name={product.name} />
      ))}
    </div>
  );
};

export default ProductGrid;
