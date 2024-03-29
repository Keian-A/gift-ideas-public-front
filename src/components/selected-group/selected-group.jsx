import './selected-group.css';
import { Modal, Button, Box, FormControl, Input, FormHelperText } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import RenderedMembers from '../rendered-members/rendered-members';

const SERVER = process.env.REACT_APP_SERVER;

const box_style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const form_style = {
    display: 'flex',
    justifyContent: 'center',
}

function SelectedGroup({ setGroupData, groupData }) {
    const [open, setOpen] = useState("");
    const handleClose = () => setOpen("");
    const handleOpen = (str) => setOpen(str);
    let user = useSelector(state => state.user.user);

    const [giftName, setGiftName] = useState('');
    const [giftLink, setGiftLink] = useState('');
    const [giftSize, setGiftSize] = useState('');
    const [giftColor, setGiftColor] = useState('');
    const [giftDesc, setGiftDesk] = useState('');

    const handleFormChange = (e) => {
        switch (e.target.id) {
            case 'gift-name':
                setGiftName(e.target.value);
                break;
            case 'gift-link':
                setGiftLink(e.target.value);
                break;
            case 'gift-size':
                setGiftSize(e.target.value);
                break;
            case 'gift-color':
                setGiftColor(e.target.value);
                break;
            case 'gift-desc':
                setGiftDesk(e.target.value);
                break;
            default:
                console.error(`Something went wrong, reading element that doesn't exist in form`);
        }
    }

    const handleGiftSubmit = async (e) => {
        // querying group with UUID
        e.preventDefault();
        try {
            if (giftName) {
                let tempGroupObj = {
                    giftName,
                    giftLink,
                    giftSize,
                    giftColor,
                    giftDesc,
                    username: user.username,
                    group: groupData.groupUUID
                }
                let { data } = await axios.post(`${SERVER}/createGift`, tempGroupObj);
                setGroupData(data);
                handleClose();
            }
        } catch (e) {
            console.error(e.message);
        }
    }

    return (
        <div className='selected-group'>
            {groupData ? (
                <div className='sec-but-members'>
                    <h2>{groupData.groupName}'s Gifts!</h2>

                    <Button onClick={() => handleOpen("group-invite")}>Invite to group</Button>
                    <Modal
                        open={open === "group-invite"}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={box_style}>
                            <h3 id="invite-code">{`Invite to group with this code: ${groupData.groupUUID}`}</h3>
                        </Box>
                    </Modal>

                    <Button onClick={() => handleOpen("list")}>Add to My List</Button>
                    <Modal
                        open={open === "list"}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={box_style}>
                            <form onSubmit={handleGiftSubmit}>
                                <h3 style={{ textAlign: 'center' }}>Tell us more about your gift!</h3>
                                <FormControl sx={form_style}>
                                    {/* Gift Name */}
                                    <Input onChange={handleFormChange} inputProps={{ maxLength: 20 }} placeholder='Gift name*' required id="gift-name" />
                                </FormControl>
                                <FormControl sx={form_style}>
                                    {/* Gift Link */}
                                    <Input onChange={handleFormChange} inputProps={{ maxLength: 200 }} placeholder='Gift link' id="gift-link" />
                                </FormControl>
                                <FormControl sx={form_style}>
                                    {/* Size (optional) */}
                                    <Input onChange={handleFormChange} inputProps={{ maxLength: 6 }} placeholder='Gift size' id="gift-size" />
                                </FormControl>
                                <FormControl sx={form_style}>
                                    {/* Color (optional) */}
                                    <Input onChange={handleFormChange} inputProps={{ maxLength: 12 }} placeholder='Gift color' id="gift-color" />
                                </FormControl>
                                <FormControl sx={form_style}>
                                    {/* Description (optional) */}
                                    <Input onChange={handleFormChange} inputProps={{ maxLength: 50 }} placeholder='Description' id="gift-desc" />
                                </FormControl>
                                <FormHelperText>Anything else we should know?</FormHelperText>
                                <Button type="submit">Add to my list</Button>
                            </form>
                        </Box>
                    </Modal>
                    <RenderedMembers groupData={groupData} setGroupData={setGroupData} memberList={groupData.memberList} giftList={groupData.giftList} />
                </div>
            ) : null
            }
        </div>
    )
}

export default SelectedGroup;
