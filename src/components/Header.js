import React from 'react'


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
            {/* <FaSearch className="search-icon"/>
            <FaShoppingCart className="shopping-icon"/> */}
            <button className="login"><span>GG</span>Login</button>
        </div>
        

      </header>
  )
}
