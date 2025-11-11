import React from "react";
import "./CheckoutProduct.css";
import Subtotal from "./Subtotal";

function CheckoutProduct(){
    return(
        <div className="checkoutProduct">
            <img src="https://fdcdn.akamaized.net/m/780x1170/products/96358/96357790/images/res_8cc9ea1326669725893297a9470e3687.jpg?s=3HlDpJPDPVSx" alt="" className="checkoutProduct_image" />
            <div className="checkoutProduct_info">
                <div className="checkoutProduct_Title"><p>UGG Ghete slip-on de piele intoarsa cu finisaj rezistent la apa Classic Ultra Mini</p></div>
                <p className="checkoutPrice">
                    <small>$</small>
                    <strong>100</strong>
                    </p>
                <div className="checkoutProduct_rating">💖💖</div>
                <button className="checkoutRemove">Remove from basket</button>

            </div>
        </div>
    )
}

export default CheckoutProduct