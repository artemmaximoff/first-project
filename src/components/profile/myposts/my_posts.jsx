import s from './myposts.module.css';
import NewPostContainer from './new_post/new_post_container';
import RecentPostsContainer from './recent_posts/recent_posts_container';
import React from 'react';

const MyPosts = React.memo(props => {
    
    return (
        <div className={s.myPosts}>
            <h2>My posts:</h2>
            <NewPostContainer />
            <RecentPostsContainer />
        </div>)
})

export default MyPosts;