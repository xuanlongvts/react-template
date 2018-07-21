// import { combineReducers } from 'redux';
import { fromJS } from 'immutable';
import * as nameActList from './consts';

const initialState = fromJS({
    filterNews: {
        limit: 6,
        page: 0,
        totalPage: 1
    },
    news: {
        isLoading: false,
        error: null,
        data: []
    },
    blogs: {
        isLoading: false,
        error: null,
        data: []
    }
});

const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case nameActList.SET_NEWS_FILTER:
            return state
                .setIn(
                    ['filterNews', 'limit'],
                    (action.filter && action.filter.limit) || state.getIn(['filterNews', 'limit'])
                )
                .setIn(
                    ['filterNews', 'page'],
                    (action.filter && action.filter.page) || state.getIn(['filterNews', 'page'])
                );
        case nameActList.SET_NEWS_FILTER_TOTAL_PAGE:
            return state.setIn(['filterNews', 'totalPage'], action.totalPage);
        case nameActList.GET_NEWS:
            return state.setIn(['news', 'isLoading'], true);
        case nameActList.SET_NEWS:
            return state
                .setIn(['news', 'isLoading'], false)
                .setIn(['news', 'data'], action.data)
                .setIn(['news', 'error'], null);
        case nameActList.SET_NEWS_ERROR:
            return state.setIn(['news', 'isLoading'], false).setIn(['news', 'error'], action.error);
        case nameActList.GET_BLOGS:
            return state.setIn(['blogs', 'isLoading'], true);
        case nameActList.SET_BLOGS:
            return state
                .setIn(['blogs', 'isLoading'], false)
                .setIn(['blogs', 'data'], action.data || [])
                .setIn(['blogs', 'error'], action.error);
        case nameActList.SET_BLOGS_ERROR:
            return state.setIn(['blogs', 'isLoading'], false).setIn(['blogs', 'error'], action.error);
        default:
            return state;
    }
};

export default newsReducer;
