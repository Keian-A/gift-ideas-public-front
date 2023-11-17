import './LoginRedirect.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, TextField } from '@mui/material';
import SelectedGroup from '../selected-group/selected-group.jsx';

const SERVER = process.env.REACT_APP_SERVER;

function LoginRedirect() {
    let auth = useSelector(state => state.auth);
    const [createGroupButton, setCreateGroupButton] = useState(false);
    const [groupID, setGroupID] = useState('');
    const [groupData, setGroupData] = useState('');
    const [newGroupName, setNewGroupName] = useState('');
    const navigate = useNavigate();

    // If user isn't logged in, redirects to login page
    useEffect(() => {
        if (!auth.isLoggedIn) {
            navigate('/log-in');
        }
    }, [auth, navigate]);

    // TODO: Finish method to fetch selected group
    const changeSelectedGroup = async (e) => {
        let { data } = await axios.get(`${SERVER}/ROUTE-NAME`);
        setGroupData(data);
        setGroupID(e.target.id);
    }

    const handleGroupTextChange = (e) => {
        setNewGroupName(e.target.value);
    }

    // TODO: Finish method to send group to backend to create group, ensure admin of group is set
    const createGroup = async () => {
        let tempGroupName = newGroupName.trim();
        let tempGroupData = {
            groupName: newGroupName,
            groupLeader: auth.user,
        }
        if (tempGroupName.length !== "") {
            try {
                await axios.create(`${SERVER}/createGroup`, tempGroupData);
            } catch (e) {
                console.error(e.message);
            }
        }
    }

    return (
        <div id='LoginRedirect'>
            <h3>Welcome back, {auth.user.username}</h3>
            <div className='giftGroups'>
                <div className='col1'>
                    <ul className='groupsList'>
                        <li id="groups-text">Groups:</li>
                        <li id="001" onClick={changeSelectedGroup}>Group 1</li>
                        <li id="002" onClick={changeSelectedGroup}>Group 2</li>
                        <li id="003" onClick={changeSelectedGroup}>Group 3</li>
                    </ul>
                    <div id="create-group-btn">
                        {createGroupButton ? (
                            <div>
                                <form onSubmit={createGroup}>
                                    <TextField onChange={() => handleGroupTextChange()} id="standard-basic" label="Group Name" variant="standard" />
                                </form>
                                <Button variant='outlined' type='submit'>Create</Button>
                                <Button variant='outlined' onClick={() => setCreateGroupButton(!createGroupButton)}>Cancel</Button>
                            </div>
                        ) : (
                            <Button variant='outlined' onClick={() => setCreateGroupButton(!createGroupButton)}>Create Group</Button>
                        )}
                    </div>
                </div>
                <div className='col2'>
                    <SelectedGroup groupID={groupID} groupData={groupData} />
                </div>
            </div>
        </div>
    )
}

export default LoginRedirect;
