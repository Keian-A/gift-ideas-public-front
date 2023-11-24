import './selected-group.css';
import { Modal, Button, Box, Typography } from '@mui/material';
import { useState } from 'react';

const style = {
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

// TODO: Make this Modal a form to add to list, and add route to backend for adding item to gift list for specified group
function SelectedGroup({ groupData }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className='selected-group'>
            {console.log(groupData)}
            {groupData ? (
                <div>
                    <h2>Selected Group: {groupData.groupName}</h2>
                    <Button onClick={handleOpen}>Add to My List</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                Text in a modal
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                            </Typography>
                        </Box>
                    </Modal>
                </div>
            ) : null}
        </div>
    )
}

export default SelectedGroup;
