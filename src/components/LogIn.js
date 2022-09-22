import React from 'react';
import '../App.css';

function LogIn({ setActive }) {

    const handleLogIn = () => {

    }
    return (
        <form onSubmit={handleLogIn}>
            <h4>Log In</h4>
            <label htmlFor="login">Login</label>
            <input type="email" id='login' />
            <label htmlFor="password">Password</label>
            <input type="password" id='password' />
            <input type="submit" value='Log In' />
            <p onClick={() => setActive('SignUp')}>Not a member? SIGN UP</p>
        </form>
    )
}

export default LogIn