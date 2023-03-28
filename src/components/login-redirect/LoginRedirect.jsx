import './LoginRedirect.css';
import { useSelector } from 'react-redux';

function LoginRedirect() {

    let auth = useSelector(state => state.auth);

    return (
        <div className='LoginRedirect'>
            {auth.isLoggedIn ? (
                <div className='loggedInVerified'>
                </div>
            ) : (
                // Figure this out
                { window.location.replace = "/log-in" }
            )}
        </div>
    )
}

export default LoginRedirect;
