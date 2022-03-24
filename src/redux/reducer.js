import DISHES from '../data/dishes'
import COMMENTS from '../data/comments'
import { combineReducers } from 'redux'

const dishReducer = (dishState = DISHES, action) => {
    return dishState
}
const commentsReducer = (commentState = COMMENTS, action) => {
    if (action.type === 'ADD_COMMENT') {
        // parsing dispatch actions value
        let comment = action.payload;
        // add id to comment
        comment.id = commentState.length;
        // add date to comment
        comment.date = new Date().toDateString();
        return commentState.concat(comment);

    }
    return commentState;
}

export const Reducer = combineReducers({
    dishes: dishReducer,
    comments: commentsReducer,
})
