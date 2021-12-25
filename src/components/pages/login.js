import React, { useState } from 'react';

export default function Login(props){
  return(
    <div className='login'>
      <form className='login__form'>
        <label className='email-label'>Username</label>
        <input
          type="email" 
          lassName='email-input'
          placeholder='Email'
        />
        <label className='password-input'>Password</label>
        <input
          type="password"
          className='password-input'
          placeholder='Password'
          onChange={() => set}
        />
      </form>
    </div>
  );
}