import React, { useState } from 'react';
import Button from '../helpers/button';

export default function NewAccount(props){
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('New account form submitted');
    }

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

   return(
     <form className='new-account' onSubmit={handleSubmit}>
       <label>Name</label>
       <input
        type='text'
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
       />

       <label>Email</label>
       <input
        type='email'
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
       />

       <label>Password</label>
       <input
        type='password'
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
       />

       <label>Confirm Password</label>
       <input
        type='password'
        placeholder="Confirm Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
       />
       <Button className='new-account__button' type='submit' />
     </form>
   );
}