import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import dialogPageReducer from "./dialogsPage_reducer";
import profilePageReducer from "./profilePage_reducer";
import sidebarReducer from "./sidebar_reducer"
import usersReducer from "./usersReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import appReducer from "./app-reducer";


let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogsPage: dialogPageReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    appInitialize: appReducer
})


const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // options like actionSanitizer, stateSanitizer
        }) : compose;
const enhancer = composeEnhancers(
    applyMiddleware(thunkMiddleware))
// other store enhancers if any

const store = createStore(reducers, enhancer);


window._store_ = store;

export default store;