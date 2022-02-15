import React from 'react'

const ChauVo = ({ product }) => {
    return (
        <div>
            id: {product.id}
            <br />
            name: {product.name}
            <br />
            price: {product.price}
            <br />
            quantity: {product.quantity}
            <br />
            total: {product.price * product.quantity}
            <br />
            status: {product.status ? 'Show' : 'Hide'}
            <br />
            <img src={'./images/' + product.photo} width="120" />
        </div>
    )
};

export default ChauVo