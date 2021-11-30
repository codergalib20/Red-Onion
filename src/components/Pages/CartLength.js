import React, { useEffect, useState } from 'react';

const CartLength = () => {
    const [cartLength, setCartLength] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
        .then(res => res.json())
        .then(data => setCartLength(data))
        .catch(err => console.log(err))
    },[cartLength])
    console.log(cartLength);
    return (
        <div>
            <span>{cartLength.length}</span>
        </div>
    );
};

export default CartLength;