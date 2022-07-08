
import s from './recent_post.module.css';
import Post from './Post/post';


const RecentPosts = (props) => {


    let recentPostElements = props.posts.map(p =>
        <Post message={p.message} likesqnt={p.likesqnt} />
    )

    return (
        <div className={s.recentPosts}>
            {recentPostElements}
        </div>
    )
}

export default RecentPosts; 