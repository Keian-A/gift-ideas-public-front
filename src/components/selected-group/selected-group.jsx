import './selected-group.css';

function SelectedGroup({ groupID }) {
    return (
        <div className='selected-group'>
            <h2>Selected Group: {groupID}</h2>
        </div>
    )
}

export default SelectedGroup;
