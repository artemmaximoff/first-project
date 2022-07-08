let initialState = {
    friendsData: [
        { id: 1, name: 'Sveta', img: 'https://pixelbox.ru/wp-content/uploads/2018/02/anonymous_steam_avatars-1-1.jpg' },
        { id: 2, name: 'Kolya', img: 'https://download-cs.net/steam/avatars/3400.jpg' },
        { id: 3, name: 'Vazgen', img: 'https://pngset.com/images/meme-for-steam-avatars-helmet-clothing-apparel-angry-birds-transparent-png-513153.png' },
        { id: 4, name: 'Ignat', img: 'https://pixelbox.ru/wp-content/uploads/2018/02/funny_batman_steam_avatars.jpg' },
        { id: 5, name: 'Derek', img: 'https://cs13.pikabu.ru/post_img/big/2019/12/19/10/1576775540159193283.jpg' },

    ],
}

const sidebarReducer = (state = initialState, action) => {
    return state;
}

export default sidebarReducer
