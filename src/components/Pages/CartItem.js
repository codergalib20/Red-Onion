import React from 'react';
import './Pages.css';

const CartItem = ({item}) => {
    const {name, price, img, count, } = item;
    console.log(item);
    console.log(img);
    const styleCartItem = {
        background : `url(${img}) top left`,
        backgroundSize : 'cover',
        borderRadius : '10px',
        height: '200px',
        position: 'relative',
    }

    return (
        <div style={styleCartItem} className="cart-item-style grid grid-cols-3 mt-6 overflow-hidden shadow-lg">
            <div  className="h-full flex items-center justify-center flex-col">
                <img className="h-5/6" src={img} alt="" />
            </div>
            <div className="col-span-2 h-full flex-col justify-evenly">
                <h1>{name}</h1>
                <h2>{price}</h2>
                <h3>{count}</h3>
            </div>
        </div>
    );
};

export default CartItem;