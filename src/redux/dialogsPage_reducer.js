const SEND_MESSAGE = 'SEND-MESSAGE'


let initialState = {
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

};

const dialogPageReducer = (state = initialState, action) => {


    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: 6, message: body }],
            }



        default:
            return state
    }
}
export const sendMessageCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody });


export default dialogPageReducer;