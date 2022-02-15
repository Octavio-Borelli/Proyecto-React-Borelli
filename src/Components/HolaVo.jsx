import React from 'react'
import ChauVo from '/Chau'

const HolaVo = () => {

    let product = {
        id: 'p01',
        name: 'name 1',
        price: 5,
        quantity: 6,
        status: true,
        photo: 'thumb1.gif'
    };

    return (
        <div>
            <h3>Product Info</h3>
            <ChauVo product={product} />
        </div>
    );

}

export default HolaVo

