import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'CURRENT_PAGE'
const SET_TOTAL_USER_COUNT = 'TOTAL_USER_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLWING_PROGRESS = 'TOGGLE_IS_FOLLWING_PROGRES'

let initialState = {
    users: [],
    totalUsersCount: 0,
    pageSize: 10,
    currentPage: 1,
    isFetching: true,
    follwingInProgress: []

};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }

        case SET_TOTAL_USER_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_IS_FOLLWING_PROGRESS:
            return {
                ...state,
                follwingInProgress: action.isFetching ? [...state.follwingInProgress, action.userId] : state.follwingInProgress.filter(id => id != action.userId)
            }

        default:
            return state;

    }

}

export const followSuccessed = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccessed = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USER_COUNT, totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const togglefollwingInProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLWING_PROGRESS,
    isFetching,
    userId
});
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    dispatch(setCurrentPage(currentPage));
    let response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(response.data.items))
    dispatch(setTotalUsersCount(response.data.totalCount))
}

export const follow = (userId) => async (dispatch) => {
    dispatch(togglefollwingInProgress(true, userId));
    let response = await usersAPI.follow(userId);
    if (response.data.resultCode == 0) {
        dispatch(followSuccessed(userId))
    }
    dispatch(togglefollwingInProgress(false, userId))

}
export const unfollow = (userId) => async (dispatch) => {
    dispatch(togglefollwingInProgress(true, userId));
    let response = await usersAPI.unfollow(userId);
    if (response.data.resultCode == 0) {
        dispatch(unfollowSuccessed(userId))
    }
    dispatch(togglefollwingInProgress(false, userId))
}


export default usersReducer;



