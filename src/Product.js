import React from "react";
import "./Product.css";

function Product(){
    return (
        <div className="product">
            <div className="product_info">
                <p>Title</p>
                <p className="product_price">$30</p>
                <div className="product_rating">Stars</div>
            </div>
            <img src="https://th.bing.com/th?id=OPEC.wcGy3%2busQ%2fc5%2bA474C474&w=592&h=550&o=5&dpr=1.5&pid=21.1" alt="product" />
            <button>Add to Basket</button>
        </div>
    )
}

export default Product