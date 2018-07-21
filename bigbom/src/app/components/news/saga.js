import { put, takeLatest, call, select } from 'redux-saga/effects';
import * as nameActList from './consts';
import { selectedNewsFilter } from './selectors';
import * as actionList from './actions';
import services from './services';
import newsData from './newsData';

/*function* getNews() {
    try {
        const filter = yield select(selectedNewsFilter);
        const { limit, page } = {
            limit: filter.getIn(['limit']),
            page: filter.getIn(['page']),
        };
        const newsData = yield call(services.getNews);

        const startIndex = page * limit;
        const endIndex = ((startIndex + limit) > newsData.length) ? newsData.length : startIndex + limit;
        const { totalPage, data } = {
            totalPage: Math.ceil(newsData.length / limit) || 1,
            data: newsData.slice(startIndex, endIndex)
        };

        yield put(actionList.setNewsFilterTotalPage(totalPage));
        yield put(actionList.setBlogs(data));
    } catch (error) {
        yield put(actionList.setBlogsError(error));
    }
}*/

function* getNews() {
    try {
        const filter = yield select(selectedNewsFilter);
        const { limit, page } = {
            limit: filter.getIn(['limit']),
            page: filter.getIn(['page'])
        };

        const startIndex = page * limit;
        const endIndex = startIndex + limit > newsData.length ? newsData.length : startIndex + limit;
        const { totalPage, data } = {
            totalPage: Math.ceil(newsData.length / limit) || 1,
            data: newsData.slice(startIndex, endIndex)
        };
        yield put(actionList.setNewsFilterTotalPage(totalPage));
        yield put(actionList.setNews(data));
    } catch (error) {
        yield put(actionList.setNewsError(error));
    }
}

function* getBlogs() {
    try {
        const data = yield call(services.getBlogs);
        yield put(actionList.setBlogs(data));
    } catch (error) {
        yield put(actionList.setBlogsError(error));
    }
}

export default function* root() {
    yield takeLatest(nameActList.SET_NEWS_FILTER, getNews);
    yield takeLatest(nameActList.GET_NEWS, getNews);
    yield takeLatest(nameActList.GET_BLOGS, getBlogs);
}
