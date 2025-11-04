import React from "react";
import "./Home.css";
import Product from "./Product.js";

function Home(){
    return(
        <div>
            <div className="home">
                <div className="home_container">
                    <img src="https://wallpapers.com/images/high/e-commerce-pictures-sgogpik1xs1aof4c.webp" alt="image" className="home_image" />

                    <div className="home_row">
                        <Product/>
                        <Product/>
                    </div>
                    <div className="home_row">
                        <Product/>
                        <Product/>
                        <Product/>
                       
                    </div>
                    <div className="home_row"></div>
                </div>
            </div>
        </div>

    )
}

export default Home