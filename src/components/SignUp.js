import React from 'react';
import '../App.css';

function SignUp({ setActive }) {
    const handleSignUp = () => {

    }
    return (
        <form onSubmit={handleSignUp}>
            <h4>Sign Up</h4>
            <label htmlFor="login">Login</label>
            <input type="email" id='login' />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id='confirmPassword' />
            <input type="submit" value='Sign Up' />
            <p onClick={() => setActive('LogIn')}>Already a member? Log In</p>
        </form>
    );
}


export default SignUp