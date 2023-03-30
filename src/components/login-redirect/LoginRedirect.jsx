import './LoginRedirect.css';
import { useSelector } from 'react-redux';

function LoginRedirect() {

    let auth = useSelector(state => state.auth);

    const redirectUser = () => {
        window.location.replace = "/log-in"
    }

    return (
        <div className='LoginRedirect'>
            {auth.isLoggedIn ? (
                <div className='loggedInVerified'>
                </div>
            ) : redirectUser()}
        </div>
    )
}

export default LoginRedirect;
