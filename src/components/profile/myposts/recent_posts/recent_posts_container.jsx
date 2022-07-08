import { connect } from 'react-redux';
import RecentPosts from './recent_posts';

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.recentPostData
    }
}

const RecentPostsContainer = connect(mapStateToProps)(RecentPosts);

export default RecentPostsContainer; 