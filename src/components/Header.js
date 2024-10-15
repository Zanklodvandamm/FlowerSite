import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaDoorOpen } from "react-icons/fa6";
import Login from './Login';
import Registration from './Registration';

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistrOpen, setIsRegistrOpen] = useState(false);

  const handleLoginClick = () => {
    setIsLoginOpen(true);
    setIsRegistrOpen(false);
  };

  const handleRegistrClick = () => {
    setIsRegistrOpen(true);
    setIsLoginOpen(false);
  };

  const handleCloseLogin = () => {
    setIsLoginOpen(false);
  };

  const handleCloseRegistr = () => {
    setIsRegistrOpen(false);
  };

  return (
    <header>
      <div className='logo-container'>
        <img src="./img/logo.png" alt="Logo"></img>
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
        <button className="login" onClick={handleLoginClick}>
          <span><FaDoorOpen></FaDoorOpen></span> Login
        </button>
      </div>

      {isLoginOpen && <Login onClose={handleCloseLogin} onRegistrClick={handleRegistrClick} />}
      {isRegistrOpen && <Registration onClose={handleCloseRegistr} onLoginClick={handleLoginClick} />}
    </header>
  );
}
