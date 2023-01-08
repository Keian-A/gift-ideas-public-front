import Dropdown from '../dropdown/Dropdown.jsx';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div id="title">
                <h2>Gift Ideas</h2>
            </div>
            <Dropdown />
        </div>
    );
}

export default Header;
