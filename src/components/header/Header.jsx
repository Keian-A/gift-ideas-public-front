import Dropdown from '../dropdown/Dropdown.jsx';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div id="title">
                <a className='website-title' href="/">Gift Ideas</a>
            </div>
            <Dropdown />
        </div>
    );
}

export default Header;
