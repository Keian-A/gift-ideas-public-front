import './DropdownMenu.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function DropdownMenu() {

    let auth = useSelector(state => state.auth);
    const navigate = useNavigate();

    const logOut = async () => {
        // await dispatch(logoutSuccess());
        // navigate('/');
        window.location.reload(false);
    }

    return (
        <div className='dropdownmenu'>
            {!auth.isLoggedIn ? (
                // Renders if user IS NOT logged in
                <div className='linkcontainer'>
                    <button className='link' onClick={() => navigate('/signup')}><p>Sign Up</p></button>
                    <button className='link' onClick={() => navigate('/log-in')}><p>Log in</p></button>
                </div>
            ) : (
                // Renders if user IS logged in
                <div className='linkcontainer'>
                    <button className='link' onClick={() => logOut()}>Log out</button>
                </div>
            )}
        </div >
    );
}

export default DropdownMenu;
