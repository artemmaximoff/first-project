import { NavLink } from 'react-router-dom';
import Friend from './friend/friend';
import s from './friends-list.module.css'

const FriendsList = (props) => {

    let friendsElements = props.sidebar.friendsData.map(el =>
        <Friend name={el.name} img={el.img} />
    )

    return (
        <div className={s.friendsList}>
            <h4>Friends:</h4>
            <div className={s.currentFriends}>
                {friendsElements}
            </div>
        </div>
    )
}

export default FriendsList;