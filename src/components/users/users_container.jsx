import { connect } from 'react-redux';
import { follow, unfollow, setCurrentPage, togglefollwingInProgress, getUsers } from '../../redux/usersReducer';
import { getPageSize, getUsersList, getCurrentPage, getIsFetching, getFollwingInProgress, getTotalUsersCount } from '../../redux/users-selectors';
import React from 'react';
import Users from './users';
import Preloader from '../common/preloader/preloader';


class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
        /*this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        })*/
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)

        /*this.props.toggleIsFetching(true)
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize,).then(data => {
            this.props.toggleIsFetching(false)
            this.props.setUsers(data.items)
        })*/
    }

    render() {

        return <>
            <div>{this.props.isFetching ? <Preloader /> : null}</div>
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                toggleIsFetching={this.props.toggleIsFetching}
                follwingInProgress={this.props.follwingInProgress} />
        </>
    }
}



/*let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        follwingInProgress: state.usersPage.follwingInProgress

    }
}*/

let mapStateToProps = (state) => {
    return {
        users: getUsersList(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        follwingInProgress: getFollwingInProgress(state)

    }
}
/* let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch(isFetchingAC(isFetching))
        }
    }
}
*/
export default connect(mapStateToProps,
    { follow, unfollow, setCurrentPage, togglefollwingInProgress, getUsers }
)(UsersContainer);