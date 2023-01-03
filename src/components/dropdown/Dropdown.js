import { useState } from 'react';
import DropdownMenu from '../dropdown-menu/DropdownMenu.js';
import './Dropdown.css';

function Dropdown() {
    const [show, setShow] = useState(false);

    return (
        <div className='dropdown'>
            <button onClick={function () { setShow(!show) }} id="dropdownBtn">X</button>
            {
                show ? (
                    <DropdownMenu />
                ) : null
            }
        </div >
    );
}

export default Dropdown;
