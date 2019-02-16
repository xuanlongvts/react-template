import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { SELECT_REDDIT, REQUEST_POSTS, RECEIVE_POSTS, INVALIDATE_REDDIT, REQUEST_POSTS_FAILE } from './consts';

const initialState = fromJS({
    isFetching: true,
    items: [],
    lastUpdated: null,
    errMess: null,
});

const selectedReddit = (state = 'reactjs', action) => {
    switch (action.type) {
        case SELECT_REDDIT:
            return action.reddit;
        default:
            return state;
    }
};

const postsByReddit = (state = initialState, action) => {
    const key = action.reddit;
    switch (action.type) {
        case INVALIDATE_REDDIT:
        case REQUEST_POSTS:
            return state.setIn([key, 'isFetching'], true);
        case RECEIVE_POSTS:
            return state
                .setIn([key, 'isFetching'], false)
                .setIn([key, 'items'], action.posts)
                .setIn([key, 'errMess'], null)
                .setIn([key, 'lastUpdated'], action.receivedAt);
        case REQUEST_POSTS_FAILE:
            return state.setIn([key, 'errMess'], action.errMess);
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    postsByReddit,
    selectedReddit,
});

export default rootReducer;
