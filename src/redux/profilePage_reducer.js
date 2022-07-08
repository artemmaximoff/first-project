import { profileAPI } from '../api/api';

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE-POST'
const SET_USERS_PROFILE = 'SET-USERS-PROFILE'
const SET_USERS_STATUS = 'SET-USERS-STATUS'
const SAVE_PHOTO = 'SET-PHOTO'

let initialState = {
    recentPostData: [
        { id: 1, message: 'Hi, How are you?', likesqnt: '12' },
        { id: 2, message: "It's my first post!", likesqnt: '1' }
    ],
    profile: null,
    status: ''

};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostBody,
                likesqnt: 0
            };
            return {
                ...state,
                recentPostData: [newPost, ...state.recentPostData],
            }
        case DELETE_POST:
            return {
                ...state,
                recentPostData: state.recentPostData.filter(p => p.id != action.postId),
            }

        case SET_USERS_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_USERS_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        case SAVE_PHOTO: {
            return {
                ...state,
                profile: { ...state.profile, photos: action.photos }
            }
        }
        default:
            return state;

    }

}

export const addPostCreator = (newPostBody) => ({ type: ADD_POST, newPostBody });
export const deletePost = (postId) => ({ type: DELETE_POST, postId })
export const setUserProfile = (profile) => ({ type: SET_USERS_PROFILE, profile })
export const setUsersStatus = (status) => ({ type: SET_USERS_STATUS, status })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO, photos })


export const getProfile = (userId) => async (dispatch) => {
    let response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));

}

export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId);
    dispatch(setUsersStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
        dispatch(setUsersStatus(status))
    }
}

export const savePhoto = (file) => async (dispatch) => {
    let response = await profileAPI.savePhoto(file);

    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}


export const changeInfo = (profile, setStatus) => async (dispatch, getState) => {
    const userId = getState().auth.id
    const response = await profileAPI.changeInfo(profile);

    if (response.data.resultCode === 0) {
        dispatch(getProfile(userId))
    } else {
        setStatus(response.data.messages);
        return Promise.reject(response.data.messages)
    }
}

export default profilePageReducer;


