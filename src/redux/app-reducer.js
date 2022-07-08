import { authMe } from './auth-reducer';
const INITIALIZED_SUCCESED = 'INITIALIZED_SUCCESED'

let initialState = {
    initialized: false,
    globalError: null
};

const appReducer = (state = initialState, action) => {

    switch (action.type) {
        case INITIALIZED_SUCCESED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;

    }

}

export const initializedSuccesed = () => ({ type: INITIALIZED_SUCCESED });


export const initializeApp = () => (dispatch) => {
    let promise = dispatch(authMe());
    promise.then(() => {
        dispatch(initializedSuccesed())
    })

}

export default appReducer;


