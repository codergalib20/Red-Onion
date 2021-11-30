import React, { useEffect, useState } from 'react';
import CartItem from './CartItem';

const CardItems = () => {
    const [cardItems, setCartItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setCartItems(data))
            .catch(err => console.log(err));
    },[])
    return (
        <div>
            {/* {cardItems.length === 0  && 'Or Foods show in cart'}
            {!cardItems.length === 0 && */}
             <div>
                <h1 className="text-2xl font-medium text-gray-600 mt-6 border-b border-gray-500 pb-2">Your Cart</h1>
                <div>
                    {cardItems.map(item => <CartItem item={item}/>)}
                </div>
             </div>
            {/* } */}
        </div>
    );
};

export default CardItems;