import React from "react";
import "./Header.css";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
import { useStateValue } from "./StateProvider";


function Header(){
  const [{basket},dispatch]=useStateValue();
    return (
        <div className="header">
          <Link to="/" style={{textDecoration:"none"}}>
             <div className="header_logo">
        <StorefrontIcon fontSize='large' className='header_logoImage'/>
        <h2 className="header_logoTitle">eShop</h2>
      </div>
          </Link>

      <div className="header_searchbar">
        <input type="text" className='header_searchInput' />
        <SearchIcon fontSize='large' className='header_searchIcon'/>
      </div>
      
      <div className="header_nav">
        <div className="nav_item">
          <span className="nav_itemLineOne">Hello guest</span>
          <span className="nav_itemLineTwo">Sign in</span>
        </div>
        <div className="nav_item">
          <span className="nav_itemLineOne">Your</span>
          <span className="nav_itemLineTwo">Shop</span>
        </div>
        <Link to="/checkout"  style={{textDecoration:"none"}} > 
        <div className="nav_itemBasket">
          <ShoppingBasketIcon fontSize='large'/>
          <span className="nav_itemLineTwo nav_basketCount">{basket.length}</span>
        </div>
        </Link>
      </div>
        </div>
    )
}

export default Header