import { Navigate } from 'react-router-dom';
import s from './dialogs.module.css';
import DialogItem from './dialog_item/dialog-item';
import MessageItem from './message_item/message_item';
import NewMessageContainer from './new_message/new-message _container';


const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map(d => <DialogItem name={d.name} id={d.id} img={d.img} />)
    let messagesElements = props.dialogsPage.messagesData.map(m => <MessageItem message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <NewMessageContainer />
            </div>
        </div>
    )

}

export default Dialogs;