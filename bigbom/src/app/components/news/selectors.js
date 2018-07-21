export const selectedNewsFilter = state => {
    return state.reducerNews.getIn(['filterNews']);
};
