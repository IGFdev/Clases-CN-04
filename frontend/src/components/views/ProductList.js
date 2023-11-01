import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
    const products = [
        {
            id: 1,
            name: 'Heladera'
        },
        {
            id: 2,
            name: 'Microondas'
        },
        {
            id: 3,
            name: 'TV'
        }
    ];

    return (
        <>
            {
                products.map((product, index) => (
                    <Link key={index} to={`/products/${product.id}/detail`}>
                        <article>
                            <h2>name: {product.name}</h2>
                            <h3>id: {product.id}</h3>
                        </article>
                    </Link>
                ))
            }
        </>
    )
}

export default ProductList;