import { useState } from 'react';
import './Signup.css';

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(username, password);
    }

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    const changePassShow = () => {
        setShow(!show);
    }

    return (
        <div className='signup'>
            <form onSubmit={formSubmit}>
                <label>Enter username</label>
                <input name="username" required onChange={handleChange}></input>
                <label>Enter password</label>
                <input type={show ? "text" : "password"} name="password" required onChange={handleChange}></input>
                <button onClick={changePassShow}>Show Password</button>
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}

export default Signup;
