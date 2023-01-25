import { useState } from 'react';
import axios from 'axios';
import './Signup.css';

const SERVER = process.env.REACT_APP_SERVER;

function Signup() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [cPassword, setCPassword] = useState("");
    const [email, setEmail] = useState("");
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    // TODO: Defensive program input to validate number
    const [phoneNumber, setPhoneNumber] = useState("");
    const [birthday, setBirthday] = useState("");
    const [show, setShow] = useState(false);
    const [showError, setShowError] = useState(false);

    const formSubmit = async (e) => {
        e.preventDefault();
        // Send req to backend here
        try {
            if (password === cPassword) {
                let newUser = {
                    username,
                    password,
                    email,
                    firstname,
                    lastname,
                    phoneNumber,
                    birthday
                }
                let result = await axios.post(`${SERVER}/newUser`, newUser);
                console.log(result);
            } else {
                setShowError(true);
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    const handleChange = (e) => {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "confirm-password":
                setCPassword(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
                break;
            case "first-name":
                setFirstname(e.target.value);
                break;
            case "last-name":
                setLastname(e.target.value);
                break;
            case "phone-number":
                setPhoneNumber(e.target.value);
                break;
            case "birthday":
                setBirthday(e.target.value);
                break;
            default:
                console.error("Input field expected error.");
        }
    }

    const changePassShow = () => {
        setShow(!show);
    }

    return (
        <div className='signup'>
            <div id="signupForm">
                <h2>Create an Account</h2>
                <h6 className='smallInfo'>All fields with * are required</h6>
                <form onSubmit={formSubmit}>
                    <div className='inputSection'>
                        <input placeholder='*Username' className='formInput' name="username" required onChange={handleChange}></input>
                    </div>
                    {showError ? (
                        <div className='inputSection'>
                            <h4 className='passwordError'>Password fields don't match</h4>
                        </div>
                    ) : null}
                    <div className='inputSection'>
                        <input placeholder='*Password' className='formInput' type={show ? "text" : "password"} name="password" required onChange={handleChange}></input>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='*Confirm Password' className='formInput' type={show ? "text" : "password"} name="confirm-password" required onChange={handleChange}></input>
                        <button onSubmit="return false;" onClick={changePassShow}>Show Password</button>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='*Email' className='formInput' name="email" type="text" required onChange={handleChange}></input>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='*First Name' className='formInput' name="first-name" type="text" required onChange={handleChange}></input>
                    </div>
                    <div className='inputSection'>
                        <input placeholder='*Last Name' className='formInput' name="last-name" type="text" required onChange={handleChange}></input>
                    </div>
                    <div className='label'>
                        <label>Phone Number</label>
                    </div>
                    <div className='inputSection'>
                        <input className='formInput' name="phone-number" type="number" onChange={handleChange}></input>
                    </div>
                    <div className='label'>
                        <label>Birthday</label>
                    </div>
                    <div className='inputSection'>
                        <input className='formInput' name="birthday" type="date" onChange={handleChange}></input>
                    </div>
                    <button type='submit'>Sign up!</button>
                </form>
            </div>
        </div>
    );
}

export default Signup;
