import React from "react";
import "./CheckoutProduct.css";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id,title,price,rating,image}){
    const [{basket},dispatch]=useStateValue();

    const removeFromBasket=()=>{
        dispatch({
            type:"REMOVE_FROM_BASKET",
            id:id,
        })
    }
    return(
        <div className="checkoutProduct">
            <img src={image} alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <div className="checkoutProduct_Title"><p>{title}</p></div>
                <p className="checkoutPrice">
                    <small>$</small>
                    <strong>{price}</strong>
                    </p>
                <div className="checkoutProduct_rating">{Array(rating)
                    .fill()
                        .map((_, i)=>(
                        <p>💖</p>
                        )) }</div>
                <button className="checkoutRemove" onClick={removeFromBasket}>Remove from basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct