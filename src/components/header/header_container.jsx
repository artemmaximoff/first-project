import React from 'react';
import Header from './header';
import { logout, authMe } from '../../redux/auth-reducer';
import { connect } from 'react-redux';


class HeaderContainer extends React.Component {
    componentDidMount() {



        /*authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                this.props.setAuthUserData(id, email, login)

            }
        });*/


        /*  profileAPI.getProfile(userId).then(data => {
              let userId = data.userId;
              this.props.authProfile(data);
          })
          debugger;*/
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,

    }
}


export default connect(mapStateToProps, { authMe, logout })(HeaderContainer)