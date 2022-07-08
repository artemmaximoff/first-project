import React from 'react';
import Profile from './profile';
import { connect } from 'react-redux';
import { getProfile, getStatus, updateStatus, savePhoto, changeInfo } from '../../redux/profilePage_reducer';
import { withAuthRiderect } from '../../hoc/withAuthRiderect'
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom"
import { compose } from 'redux';



class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.autorisedId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getProfile(userId)

        this.props.getStatus(userId)

        /*profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        })*/
    }

    componentDidMount() {
        this.refreshProfile()

    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }
    }

    render() {


        return (
            <Profile {...this.props}
                isOwner={!this.props.router.params.userId}
            />
        )
    }
}

let AuthRedirectComponent = withAuthRiderect(ProfileContainer);


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    isAuth: state.auth.isAuth,
    autorisedId: state.auth.id,


});

function withRouter(AuthRedirectComponent) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <AuthRedirectComponent
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default compose(
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, changeInfo }),
    withAuthRiderect,
    withRouter,

)(ProfileContainer)