import './groupList.css';
import { useSelector } from 'react-redux';

function GroupList() {
    let user = useSelector(state => state.user.user);

    return (
        <ul className='groupsList'>
            <li id="groups-text">Groups:</li>
            {user.groups.map((group, idx) => (
                <li key={idx}>{group.groupName}</li>
            ))}
        </ul>
    )
}

export default GroupList;
