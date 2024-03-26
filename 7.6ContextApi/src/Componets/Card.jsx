import React from "react";

import { useCart } from "../Context/Cart";


function Card(props) {
    const cart = useCart();
    // console.log(cart);
    return (
        <>
            <div className='mx-auto p-8'>
                <h3 className='p-0.5 text-2xl'>{props.name}</h3>
                <p className='p-0.5 text-xl'>price : ${props.price}</p>
                <button className='px-5 py-2.5 my-2 bg-gray-100 rounded-xl cursor-pointer'
                onClick={()=> cart.setItems([...cart.items , {name : props.name , price : props.price},])}
                >Add to Cart</button>
            </div>
        </>
    )
}

export default Card
