
import s from './message-item.module.css';


const MessageItem = (props) => {

    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

export default MessageItem;