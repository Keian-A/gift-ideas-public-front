import { useState } from 'react';
import './Login.css';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginSuccess } from '../../store/auth.js';
import { loginUserSuccess } from '../../store/user.js';
import { useNavigate } from 'react-router-dom';

const SERVER = process.env.REACT_APP_SERVER;

function Login() {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);
    const [passError, setPassError] = useState(false);
    const [errorMsg, setErrorMsg] = useState("");

    const changeAuthState = (userResponse) => {
        dispatch(loginSuccess());
        dispatch(loginUserSuccess(userResponse));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        let loginCreds = {
            username,
            password
        }
        try {
            let { data } = await axios.post(`${SERVER}/login`, loginCreds);
            if (data) {
                changeAuthState(data);
                navigate('/user-home');
            }
        } catch (e) {
            setErrorMsg(e.message);
            setPassError(true);
        }
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
                {passError ? (
                    <h6 className='red-text'>{errorMsg}</h6>
                ) : null}
                <form onSubmit={handleSubmit}>
                    <div className='inputSection'>
                        <input name="username" onChange={handleChange} className='formInput' placeholder='Username' />
                    </div>
                    <div className='inputSection'>
                        <input name="password" onChange={handleChange} className='formInput' placeholder='Password' type={show ? "text" : "password"} />
                        <button type='button' onClick={() => setShow(!show)}>Show password</button>
                    </div>
                    <button type='submit'>Log in</button>
                </form>
            </div>
        </div>
    );
}

export default Login;
