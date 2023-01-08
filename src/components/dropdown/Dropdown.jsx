import { useState } from 'react';
import DropdownMenu from '../dropdown-menu/DropdownMenu.jsx';
import Hamburger from '../../images/Hamburger.png';
import './Dropdown.css';

function Dropdown() {
    const [show, setShow] = useState(false);

    return (
        <div className='dropdown'>
            <div className='ddcontainer'>
                <div id='ddBtnContainer'>
                    <button id="ddbtn" onClick={() => setShow(!show)}><img id="hamburgerImage" src={Hamburger} alt="Menu" /></button>
                    {
                        show ? (
                            <DropdownMenu />
                        ) : null
                    }
                </div>
            </div>
        </div >
    );
}

export default Dropdown;
