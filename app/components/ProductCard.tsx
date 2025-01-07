import React from "react";
import "../styles/productcard.css";

interface ProductCardProps {
  image: string; 
  name: string; 
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <p className="product-name">{name}</p>
    </div>
  );
};

export default ProductCard;
