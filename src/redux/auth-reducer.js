import { authAPI, securityAPI } from '../api/api';


const SET_USERS_DATA = 'SET_USERS_DATA'

const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'


let initialState = {
    id: null,
    email: null,
    login: null,
    profile: null,
    isAuth: false,
    captchaUrl: null

};

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USERS_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;

    }

}

export const setAuthUserData = (id, email, login, isAuth, captchaUrl) => ({ type: SET_USERS_DATA, payload: { id, email, login, isAuth, captchaUrl } });
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_URL_SUCCESS, payload: { captchaUrl } });
export default authReducer;

export const authMe = () => async (dispatch) => {
    let response = await authAPI.authMe();
    if (response.data.resultCode === 0) {
        let { id, email, login } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }
}



export const login = (email, password, rememberMe, captcha, setStatus) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
        dispatch(authMe())
    }

    else {
        if (response.data.resultCode === 10) {
            dispatch(getCaptchaUrl())
        }
        setStatus(response.data.messages[0]);
    }

}

export const getCaptchaUrl = () => async (dispatch) => {
    const response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl))

}



export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false, null))
    }
}




