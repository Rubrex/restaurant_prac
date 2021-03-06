import COMMENTS from '../data/comments'
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'
import { InitialContactForm } from './forms'
import { createForms } from 'react-redux-form' //Using this for Contact.js dummy data

const dishReducer = (dishState = { isLoading: false, dishes: [] }, action) => {
    switch (action.type) {
        case actionTypes.DISHES_LOADING:
            return {
                ...dishState,
                isLoading: true,
                dishes: []
            }
        case actionTypes.LOAD_DISHES:
            return {
                ...dishState,
                isLoading: false,
                dishes: action.payload
            }
        default:
            return dishState
    }
}
const commentsReducer = (commentState = COMMENTS, action) => {
    switch (action.type) {
        case actionTypes.ADD_COMMENT:
            // parsing dispatch actions value
            let comment = action.payload;
            // add id to comment
            comment.id = commentState.length;
            // add date to comment
            comment.date = new Date().toDateString();
            return commentState.concat(comment)
        default:
            return commentState
    }
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentsReducer,
    ...createForms({
        feedback: InitialContactForm
    })
})
