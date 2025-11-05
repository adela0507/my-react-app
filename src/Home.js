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
                        <Product 
                        id="1234"
                        title="UGG
Ghete slip-on de piele intoarsa cu finisaj rezistent la apa Classic Ultra Mini"
                        price={100}
                        rating={5}
                        image="https://fdcdn.akamaized.net/m/780x1170/products/96358/96357790/images/res_8cc9ea1326669725893297a9470e3687.jpg?s=3HlDpJPDPVSx"
                        />
                        <Product
                         id="12349"
                        title="Valentino Bags
Geanta shopper din piele ecologica Zero"
                        price={120}
                        rating={4}
                        image="https://fdcdn.akamaized.net/m/780x1170/products/94481/94480691/images/res_33152e9ad8e227b5b189887de1de37ff.jpg?s=FTAAdHwRwSBq"
                       />
                    </div>
                    <div className="home_row">
                        <Product
                         id="12347"
                        title="GUESS
Rochie-pulover cu pliuri"
                        price={60}
                        rating={3}
                        image="https://fdcdn.akamaized.net/m/780x1170/products/95111/95110401/images/res_13e709429c39617fa03091715c563d1e.jpg?s=eipT9QGagnKF"
                       />
                        <Product
                         id="12346"
                        title="GUESS
Ghete de piele ecologica"
                        price={90}
                        rating={5}
                        image="https://fdcdn.akamaized.net/m/780x1170/products/71986/71985530/images/res_4e1a917305f39a44ba8e58851869fcaf.jpg?s=7aJjD5w42PXg"
                       />
                        <Product
                         id="12345"
                        title="Karl Lagerfeld
Pantofi sport din piele cu aplicatie logo metalica"
                        price={110}
                        rating={3}
                        image="https://fdcdn.akamaized.net/m/780x1170/products/51852/51851787/images/res_3d4c273c79fcbf8fe79bde14710195d0.jpg?s=vaYSXZ96pWXQ"
                       />
                       
                    </div>
                    <div className="home_row"></div>
                </div>
            </div>
        </div>

    )
}

export default Home