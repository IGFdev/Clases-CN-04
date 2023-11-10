import React from "react";

function ProductDetail(props) {
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


    const prodId = Number(props.match.params.id);
    const product = products.forEach(currentProduct => currentProduct.id === prodId);


    return (
        <article>
            <h2>name: {product.name}</h2>
            <h3>id: {prodId}</h3>
        </article>
    )
}

export default ProductDetail;