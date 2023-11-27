import { Box, Button, Modal } from '@mui/material';
import { useState } from 'react';
import MyPagination from '../my-pagination/my-pagination.jsx';
import { useSelector } from 'react-redux';

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

const handlePurchase = async (giftID, currentMember) => {
    let tempGiftObj = {
        giftID: giftID,
        username: currentMember
    }
    console.log(tempGiftObj);
}

const handleDelete = async () => {

}

function RenderedMembers({ memberList, giftList }) {

    let user = useSelector(state => state.user.user);
    const [open, setOpen] = useState("");
    const handleClose = () => setOpen("");
    const handleOpen = (username) => setOpen(username);

    return (
        <div>
            {memberList.map((member, idx) => (
                <div className="family-member-modal" key={idx}>
                    {console.log(member)}
                    <Button onClick={() => handleOpen(member)}>{member}</Button>
                    <Modal
                        // May need to open by member ID later if group has identically named members
                        open={open === member}
                        onClose={() => handleClose()}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <Box sx={style}>
                            <MyPagination handlePurchase={handlePurchase} open={open} currentMember={user.username} handleDelete={handleDelete} gifts={giftList} />
                        </Box>
                    </Modal>
                </div>
            ))}
        </div>
    )
}

export default RenderedMembers;
