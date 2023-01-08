import './DropdownMenu.css';
// useSelector used for reading state, useDispatch used for using methods defined in reducers
import { useSelector } from 'react-redux';

function DropdownMenu() {

    let auth = useSelector(state => state.auth);

    return (
        <div className='dropdownmenu'>
            {!auth ? (
                // Renders if user isn't logged in
                <div className='linkcontainer'>
                    <a className='link' href='/signup'>Sign Up</a>
                    <a className='link' href="/log-in">Log in</a>
                </div>
            ) : (
                // Renders if user is logged in
                <div className='linkcontainer'>

                </div>
            )
            }
        </div >
    );
}

export default DropdownMenu;
