
import { connect } from 'react-redux';
import Dialogs from './dialogs';
import { withAuthRiderect } from '../../hoc/withAuthRiderect'
import { compose } from 'redux';



let mapStateToProps = (state) => ({
    dialogsPage: state.dialogsPage,
})

let AuthRedirectComponent = withAuthRiderect(Dialogs)


export default compose(
    connect(mapStateToProps),
    withAuthRiderect
)(Dialogs)