
import { connect } from 'react-redux';
import FriendsList from './friends-list/friends-list';


let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar
    }
}

const Friends = connect(mapStateToProps)(FriendsList)

export default Friends;