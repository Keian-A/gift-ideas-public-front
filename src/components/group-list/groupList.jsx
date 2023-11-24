import './groupList.css';
import { useSelector } from 'react-redux';

function GroupList({ changeSelectedGroup }) {
    let user = useSelector(state => state.user.user);

    return (
        <ul className='groupsList'>
            {console.log(user.groups)}
            <li id="groups-text">Groups:</li>
            {user.groups.map((group, idx) => (
                <li onClick={changeSelectedGroup} id={group.groupUUID} key={idx}>{group.groupName}</li>
            ))}
        </ul>
    )
}

export default GroupList;
