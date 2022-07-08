import { sendMessageCreator } from '../../../redux/dialogsPage_reducer';
import NewMessage from './new-message';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageCreator(newMessageBody));
        }
    }
}

const NewMessageContainer = connect(mapStateToProps, mapDispatchToProps)(NewMessage);

export default NewMessageContainer;