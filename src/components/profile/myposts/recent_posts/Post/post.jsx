import s from './post.module.css';


const Post = (props) => {

    return (
        <div>
            <div className={s.item}>
                <img src="https://www.meme-arsenal.com/memes/ede6da73f226721ea502fde3e1ad9088.jpg"></img>
                <div>{props.message}</div>
            </div>
            <div><span>Likes: </span>{props.likesqnt}</div>

        </div>
    )
}

export default Post; 