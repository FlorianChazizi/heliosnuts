"use client"
import React from 'react'
import Image from 'next/image';
import '../styles/products.css';
import product from '../assets/product-img.png';

const Products = () => {
    const products = [
        { image: product, name: "Coctail Ξηρών καρπών" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },
        { image: product, name: "almond" },

    ];

    return (

        <div className="products-container">
            <h4 className="product-header">Τα Προϊόντα</h4>
            <div className="product-grid">
                {products.map((product, index) => (
                    <div className="product-card" key={index}>
                        <Image
                            className='product-image'
                            src={product.image}
                            alt={product.name}
                            title={product.name}
                        />   
                        <p className="product-name">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>


    )
}

export default Products