import * as React from 'react';
import { Stack, ListItemIcon, ListItemButton, ListItem, List, Button, Drawer, Box } from '@mui/material';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutSuccess } from '../../store/auth.js';
import { logoutUserSuccess } from '../../store/user';
import HamburgerIcon from '../../images/Hamburger.png';
import './TemporaryDrawer.css';

function TemporaryDrawer() {
    const loggedInState = useSelector((state) => state.auth.isLoggedIn);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [state, setState] = React.useState({ right: false });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const logOut = async () => {
        dispatch(logoutSuccess());
        dispatch(logoutUserSuccess());
        navigate('/');
    }

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon>
                            {loggedInState ? (
                                <div>
                                    <Stack>
                                        <Button onClick={() => logOut()} variant='outlined'>Log Out</Button>
                                    </Stack>
                                </div>
                            ) : (
                                <div>
                                    <Stack>
                                        <Button onClick={() => navigate('/log-in')} variant='outlined'>Log In</Button>
                                        <Button onClick={() => navigate('/signup')} variant='outlined'>Sign Up</Button>
                                    </Stack>
                                </div>
                            )}
                        </ListItemIcon>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div id="hamburger-div">
            <Button onClick={toggleDrawer('right', true)}>
                <img id="hamburger-icon" src={HamburgerIcon} alt="hamburger"></img>
            </Button>
            <Drawer
                anchor={'right'}
                open={state['right']}
                onClose={toggleDrawer('right', false)}
            >
                {list('right')}
            </Drawer>
        </div>
    );
}

export default TemporaryDrawer;
