import './LoginRedirect.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function LoginRedirect() {
    let auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    // If user isn't logged in, redirects to login page
    useEffect(() => {
        console.log(auth)
        if (!auth.isLoggedIn) {
            navigate('/log-in');
        }
    }, [auth, navigate]);

    return (
        <div className='LoginRedirect'>
            {/* <h3>Welcome back, {auth.user.username}</h3> */}
        </div>
    )
}

export default LoginRedirect;
