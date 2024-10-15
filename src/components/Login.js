import React, { useState } from 'react';

export default function Login({ onClose, onRegistrClick }) {
  return (
    <div className='login-container'>
      <div className='login-container-background'>
        <div className='logo'>
          <span className='exit' onClick={onClose}>&times;</span>
          <img src='./img/logo.png' alt='Logo'></img>
          <h4>GREENSHOP</h4>
        </div>
        <div className='login-main'>
          <p>Login</p>
          <input className='login-text' type='text' placeholder='almamun_uxui@outlook.com'></input>
          <input className='password-text' type='password' placeholder='password'></input>
          <button>Login</button>
          <h5>Don’t have an account? <a onClick={onRegistrClick}>Sign Up</a></h5>
        </div>
      </div>
    </div>
  );
}
