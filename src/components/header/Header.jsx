import TemporaryDrawer from '../TemporaryDrawer/TemporaryDrawer.jsx';
import './Header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

    const headerNav = () => {
        navigate('/');
    }

    return (
        <div className="header">
            <button className='headerBtn' onClick={headerNav}>
                <h1>Gift Ideas</h1>
            </button>
            <TemporaryDrawer />
        </div>
    );
}

export default Header;
