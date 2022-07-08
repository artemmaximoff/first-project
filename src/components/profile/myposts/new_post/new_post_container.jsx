import React from 'react';
import { addPostCreator } from '../../../../redux/profilePage_reducer';
import { onPostChangeCreator } from '../../../../redux/profilePage_reducer';
import NewPost from './new_post';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (newPostBody) => {
            dispatch(addPostCreator(newPostBody));
        },
    }
}

const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer; 