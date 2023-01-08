import { useState } from 'react';
import './Login.css';

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send req to backend here
        console.log(username, password);
    }

    const handleChange = (e) => {
        if (e.target.name === "username") {
            setUsername(e.target.value);
        } else if (e.target.name === "password") {
            setPassword(e.target.value);
        }
    }

    return (
        <div className='login'>
            <div className='loginForm'>
                <h2>Log in</h2>
                <form onSubmit={handleSubmit}>
                    <div className='inputSection'>
                        <input name="username" onChange={handleChange} className='formInput' placeholder='Username' />
                    </div>
                    <div className='inputSection'>
                        <input name="password" onChange={handleChange} className='formInput' placeholder='Password' type={show ? "text" : "password"} />
                        <button onClick={() => setShow(!show)}>Show password</button>
                    </div>
                    <button type='submit'>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
