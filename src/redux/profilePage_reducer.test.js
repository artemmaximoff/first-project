import profilePageReducer, {addPostCreator, deletePost} from './profilePage_reducer';
import React from "react";
let state = {
    recentPostData: [
        { id: 1, message: 'Hi, How are you?', likesqnt: '12' },
        { id: 2, message: "It's my first post!", likesqnt: '1' }
    ]

};

it('length of post should be added', () => {
    let action = addPostCreator("sfsdfsd");

    let newState = profilePageReducer(state, action);

    expect(newState.recentPostData.length).toBe(3)
    expect(newState.recentPostData[2].message).toBe("It's my first post!")
})
it('2 postmessage', () => {
    let action = addPostCreator("sfsdfsd");

    let newState = profilePageReducer(state, action);
    expect(newState.recentPostData[2].message).toBe("It's my first post!")
})

it('lenght of post after deleting shoild be decrement', () => {
    let action = deletePost(1);

    let newState = profilePageReducer(state, action);
    expect(newState.recentPostData.length).toBe(1)
})

it('lenght of post after deleting shouldnt be decrement if id is incorrect', () => {
    let action = deletePost(1000);

    let newState = profilePageReducer(state, action);
    expect(newState.recentPostData.length).toBe(2)
})