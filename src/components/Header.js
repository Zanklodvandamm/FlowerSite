import React from 'react'
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";

export default function Header() {
  return (
    <header>
        <div className='logo-container'>
            <img src="./img/logo.png"></img>
            <span>GreenShop</span>
        </div>
        
        
        <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>Plant Care</li>
            <li>Blogs</li>
        </ul>

        <div className='search-and-login-container'>
            <FaSearch className="search-icon"/>
            <FaShoppingCart className="shopping-icon"/>
            <button className="login"><span><FaDoorOpen></FaDoorOpen>      </span>Login</button>
        </div>
        

      </header>
  )
}
