import './DropdownMenu.css';
import { useSelector } from 'react-redux';

function DropdownMenu() {

    let auth = useSelector(state => state.auth);

    return (
        <div className='dropdownmenu'>
            {!auth.isLoggedIn ? (
                // Renders if user IS NOT logged in
                <div className='linkcontainer'>
                    <a className='link' href='/signup'>Sign Up</a>
                    <a className='link' href="/log-in">Log in</a>
                </div>
            ) : (
                // Renders if user IS logged in
                <div className='linkcontainer'>

                </div>
            )
            }
        </div >
    );
}

export default DropdownMenu;
