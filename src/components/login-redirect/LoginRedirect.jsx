import './LoginRedirect.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SelectedGroup from '../selected-group/selected-group.jsx';

const SERVER = process.env.REACT_APP_SERVER;

function LoginRedirect() {
    let auth = useSelector(state => state.auth);
    const [groupID, setGroupID] = useState('');
    const [groupData, setGroupData] = useState('');
    const navigate = useNavigate();

    // If user isn't logged in, redirects to login page
    useEffect(() => {
        if (!auth.isLoggedIn) {
            navigate('/log-in');
        }
    }, [auth, navigate]);

    const changeSelectedGroup = (e) => {
        let { data } = axios.get(`${SERVER}/ROUTE-NAME`);
        setGroupData(data);
        setGroupID(e.target.id);
    }

    return (
        <div className='LoginRedirect'>
            <h3>Welcome back, {auth.user.username}</h3>
            <div className='giftGroups'>
                <div className='col1'>
                    <ul className='groupsList'>
                        <li id="groups-text">Groups:</li>
                        <li id="001" onClick={changeSelectedGroup}>Group 1</li>
                        <li id="002" onClick={changeSelectedGroup}>Group 2</li>
                        <li id="003" onClick={changeSelectedGroup}>Group 3</li>
                    </ul>
                </div>
                <div className='col2'>
                    <SelectedGroup groupID={groupID} groupData={groupData} />
                </div>
            </div>
        </div>
    )
}

export default LoginRedirect;
