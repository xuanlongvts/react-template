// export const selectedRedditSelector = state =>  state.rootReducer.reducerMyComApi.selectedReddit;
// export const postsByRedditSelector = state => state.rootReducer.reducerMyComApi.postsByReddit;

export const selectedRedditSelector = state =>  state.rootReducer.reducerMyComApi.getIn(['selectedReddit']);
export const postsByRedditSelector = state => state.rootReducer.reducerMyComApi.getIn(['postsByReddit']);