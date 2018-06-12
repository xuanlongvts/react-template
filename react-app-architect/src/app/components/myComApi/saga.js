import {put, take, call, fork, select, all} from 'redux-saga/effects';
import API from '../../_services/api';
import * as actionList from './actions';
import * as nameActList from './consts';
import { selectedRedditSelector, postsByRedditSelector } from './selectors';

export const fetchPostsApi = (reddit) => {
    const restApi = new API();
    const path = `/r/${reddit}.json`;

    return restApi.fetch(path)
        .then(res => {
            return res.data.data.children.map((item) => {
                return item.data;
            });
        })
        .catch(err => console.log('err: ', err));
}

export function* fetchPosts(){
    while(true){
        const {reddit} = yield take(nameActList.SELECT_REDDIT);
        const posts = yield call(fetchPostsApi, reddit);
        yield put(actionList.receivePosts(reddit, posts));
    }
}

export function* invalidateReddit(){
    while(true){
        const { redditRefresh } = yield take(nameActList.INVALIDATE_REDDIT);
        const posts = yield call(fetchPostsApi, redditRefresh);
        yield put(actionList.receivePosts(redditRefresh, posts));
    }
}

export default function* root(){
    yield fork(fetchPosts);
    yield fork(invalidateReddit);
}