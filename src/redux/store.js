import dialogPageReducer from "./dialogsPage_reducer";
import profilePageReducer from "./profilePage_reducer";
import sidebarReducer from "./sidebar_reducer"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT'





let store = {

    _state: {
        dialogsPage: {
            dialogsData: [
                { id: 1, name: 'Pasha', img: 'https://steamavatar.io/img/1477684926Qx9fW.png' },
                { id: 2, name: 'Kolya', img: 'https://download-cs.net/steam/avatars/3400.jpg' },
                { id: 3, name: 'Vazgen', img: 'https://pngset.com/images/meme-for-steam-avatars-helmet-clothing-apparel-angry-birds-transparent-png-513153.png' },
                { id: 4, name: 'Tanya', img: 'https://steamavatar.io/img/1477742891ZNgng.jpg' },
                { id: 5, name: 'Simon', img: 'https://i03.fotocdn.net/s113/a3a7ad20cc313001/public_pin_l/2544912626.jpg' }
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Whats up?" },
                { id: 3, message: "Don't lie to me I not a dog" }
            ],
            newMessageText: ''
        },

        profilePage: {
            recentPostData: [
                { id: 1, message: 'Hi, How are you?', likesqnt: '12' },
                { id: 2, message: "It's my first post!", likesqnt: '1' }
            ],
            newPostText: 'samurai'
        },

        sidebar: {
            friendsData: [
                { id: 1, name: 'Sveta', img: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' },
                { id: 2, name: 'Kolya', img: 'https://download-cs.net/steam/avatars/3400.jpg' },
                { id: 3, name: 'Vazgen', img: 'https://pngset.com/images/meme-for-steam-avatars-helmet-clothing-apparel-angry-birds-transparent-png-513153.png' },
                { id: 4, name: 'Ignat', img: 'https://pixelbox.ru/wp-content/uploads/2018/02/funny_batman_steam_avatars.jpg' },
                { id: 5, name: 'Derek', img: 'https://cs13.pikabu.ru/post_img/big/2019/12/19/10/1576775540159193283.jpg' },

            ],
        }
    },
    _callSubscriber() {
        console.log('state changed')
    },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },


    dispatch(action) {
        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogPageReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._callSubscriber(this._state)
    }
}

window.store = store;
export default store;
