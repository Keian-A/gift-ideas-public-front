import './LoginRedirect.css';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Input, Stack, TextField } from '@mui/material';
import SelectedGroup from '../selected-group/selected-group.jsx';
import GroupList from '../group-list/groupList.jsx';
import { useDispatch } from 'react-redux';
import { groupAddSuccess } from '../../store/user.js';

const SERVER = process.env.REACT_APP_SERVER;

function LoginRedirect() {
    let user = useSelector(state => state.user.user);
    let isAuthenticated = useSelector(state => state.auth.isLoggedIn);
    let dispatch = useDispatch();
    const [createGroupButton, setCreateGroupButton] = useState(false);
    const [groupData, setGroupData] = useState('');
    const [newGroupName, setNewGroupName] = useState('');
    const [groupID, setGroupID] = useState('');
    const [showJoinGroup, setShowJoinGroup] = useState(false);
    const navigate = useNavigate();

    // If user isn't logged in, redirects to login page
    useEffect(() => {
        if (!isAuthenticated) {
            navigate('/log-in');
        }
    }, [isAuthenticated, navigate]);

    // TODO: Finish method to fetch selected group
    const changeSelectedGroup = async (e) => {
        let tempGroupReq = {
            username: user.username,
            groupUUID: e.target.id
        }
        let { data } = await axios.post(`${SERVER}/fetchGroup`, tempGroupReq);
        setGroupData(data);
    }

    const handleGroupInputChange = (e) => {
        setGroupID(e.target.value);
    }

    const handleGroupTextChange = (e) => {
        setNewGroupName(e.target.value);
    }

    const joinGroupByID = async () => {
        try {
            let tempID = { username: user.username, groupID: groupID };
            let { data } = await axios.post(`${SERVER}/joinGroup`, tempID);
            setGroupData(data);
            setShowJoinGroup(false);
        } catch (e) {
            console.error(e.message);
        }
    }


    const changeGroupState = (userResponse) => {
        dispatch(groupAddSuccess(userResponse));
    }

    // TODO: Find out issue with logout on this function invocation.
    const createGroup = async (e) => {
        e.preventDefault();
        let tempGroupData = {
            username: user.username,
            groupName: newGroupName.trim()
        }
        if (tempGroupData.groupName !== "") {
            try {
                let { data } = await axios.post(`${SERVER}/createGroup`, tempGroupData);
                if (data) {
                    changeGroupState(data);
                }
                setCreateGroupButton(!createGroupButton);
            } catch (e) {
                console.error(e.message);
            }
        }
    }

    return (
        <div id='LoginRedirect'>
            <h3>Welcome back, {user ? user.username : null}</h3>
            <div className='giftGroups'>
                <div className='col1'>
                    <GroupList changeSelectedGroup={changeSelectedGroup} />
                    <div id="create-group-btn">
                        {createGroupButton ? (
                            <div>
                                <form onSubmit={createGroup}>
                                    <TextField onChange={handleGroupTextChange} id="standard-basic" label="Group Name" variant="standard" />
                                    <Button variant='outlined' type='submit'>Create</Button>
                                    <Button variant='outlined' onClick={() => setCreateGroupButton(!createGroupButton)}>Cancel</Button>
                                </form>
                            </div>
                        ) : (
                            <Stack>
                                <Button variant='outlined' onClick={() => setCreateGroupButton(!createGroupButton)}>Create Group</Button>
                                {showJoinGroup ? (
                                    <div>
                                        <Input onChange={handleGroupInputChange} placeholder='Put code here'></Input>
                                        <Button variant='outlined' onClick={() => joinGroupByID()}>Join</Button>
                                    </div>
                                ) : (
                                    <Button variant='outlined' onClick={() => setShowJoinGroup(!showJoinGroup)}>Join group by ID</Button>
                                )}
                            </Stack>
                        )}
                    </div>
                </div>
                <div className='col2'>
                    <SelectedGroup groupData={groupData} />
                </div>
            </div>
        </div>
    )
}

export default LoginRedirect;
