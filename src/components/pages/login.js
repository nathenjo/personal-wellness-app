import React, { useState } from 'react';

export default function Login(props){
  return(
    <div className='login'>
      <form>
        <label>Username</label>
        <input/>
        <label>Password</label>
        <input/>
      </form>
    </div>
  );
}