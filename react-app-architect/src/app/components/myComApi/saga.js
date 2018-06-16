import {put, take, call, fork, select, all} from 'redux-saga/effects';
import API from '../../_services/api';
import * as actionList from './actions';
import * as nameActList from './consts';
import { postsByRedditSelector } from './selectors';

const fetchPostsApi = (reddit) => {
    const restApi = new API();
    const path = `/r/${reddit}.json`;

    return restApi.fetch(path)
        .then(res => {
            return res.data.data.children.map((item) => {
                return item.data;
            });
        })
        .catch(err => console.log('err: ', err));
};

function* fetchPosts(){
    while(true){
        const {reddit} = yield take(nameActList.SELECT_REDDIT);
        const posts = yield call(fetchPostsApi, reddit);
        yield put(actionList.receivePosts(reddit, posts));
    }
}

function* invalidateReddit(){
    const delay = (ms) => new Promise(res => setTimeout(res, ms));
    while(true){
        const { reddit } = yield take(nameActList.INVALIDATE_REDDIT);

        // Get data from state
        // let getPostsFromState = yield select(postsByRedditSelector);
        // getPostsFromState = getPostsFromState.getIn(['items']);
        // yield delay(1000);

        // Get new data from api
        const posts = yield call(fetchPostsApi, reddit); // call api for get new data

        yield put(actionList.receivePosts(reddit, posts));
    }
}

export default function* root(){
    yield fork(fetchPosts);
    yield fork(invalidateReddit);
}