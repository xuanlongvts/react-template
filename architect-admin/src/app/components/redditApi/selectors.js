// export const selectedRedditSelector = state =>  state.rootReducer.selectedReddit;
// export const postsByRedditSelector = state => state.rootReducer.postsByReddit;

export const selectedRedditSelector = state => {
    return state.reducerRedditApi.getIn(['selectedReddit']);
};
export const postsByRedditSelector = state => state.reducerRedditApi.getIn(['postsByReddit']);
