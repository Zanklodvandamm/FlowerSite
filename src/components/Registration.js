import React from 'react'

export default function Registration({ onClose, onLoginClick }) {
  return (
    <div className='registration-container'>
      <div className='registration-container-background'>
        <div className='logo'>
          <span className='exit' onClick={onClose}>&times;</span>
          <img src='./img/logo.png' alt='Logo'></img>
          <h4>GREENSHOP</h4>
        </div>
        <div className='registration-main'>
          <p>Create an account</p>
          <input className='username-text' type='text' placeholder='Username'></input>
          <input className='email-text' type='text' placeholder='Enter your email address'></input>
          <input className='password-text' type='password' placeholder='Password'></input>
          <input className='passwordrepeat-text' type='password' placeholder='Confirm Password'></input>
          <button>Registration</button>
          <h5>Already have an account? <a onClick={onLoginClick}>Login</a></h5>
        </div>
      </div>
    </div>
  );
}
