import { useState } from 'react';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [show, setShow] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        // Send req to backend here
        console.log(username, password, cPassword);
    }

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        } else if (e.target.name === "confirm-password") {
            setCPassword(e.target.value);
        }
    }

    const changePassShow = () => {
        setShow(!show);
    }

    return (
        <div className='signup'>
            <div id="signupForm">
                <h2>Create an Account</h2>
                <form onSubmit={formSubmit}>
                    <div className='inputSection'>
                        <input placeholder='Username' className='formInput' name="username" required onChange={handleChange}></input>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='Password' className='formInput' type={show ? "text" : "password"} name="password" required onChange={handleChange}></input>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='Confirm Password' className='formInput' type={show ? "text" : "password"} name="confirm-password" required onChange={handleChange}></input>
                        <button onClick={changePassShow}>Show Password</button>
                    </div>
                    <button type='submit'>Sign up!</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
