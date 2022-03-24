import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import { combineReducers } from 'redux'
import * as actionTypes from './actionTypes'

const dishReducer = (dishState = DISHES, action) => {
    switch (action.type) {
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
})
