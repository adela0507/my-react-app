import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id,price,rating,title,image}){
    const [state,dispatch]=useStateValue();
    const addToBasket=()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">${price}</p>
                <div className="product_rating">
                    {Array(rating)
                    .fill()
                        .map((_, i)=>(
                        <p>💖</p>
                        )) }
                    </div>
            </div>
            <img src={image} alt="product" />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}

export default Product