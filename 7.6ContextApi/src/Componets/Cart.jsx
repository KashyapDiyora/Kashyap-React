import React, { useState } from 'react'
import { useCart } from '../Context/Cart';

function Cart() {
    const cart = useCart();
    const total = cart.items.reduce((a,b) => a + b.price,0);
    return (
        <>
        <div>
            <h1>Cart</h1>
            {
                cart && cart.items.map((item) => {
                    return(
                        <li>{item.name} - ${item.price}</li>
                    )
                })
            }
            <h5>Total Bill : ${total}</h5>
        </div>
        
        </>
    )
}

export default Cart