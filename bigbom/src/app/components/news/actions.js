import * as listTypes from './consts';

export const setNewsFilter = (filter) => {
    return {
        type: listTypes.SET_NEWS_FILTER,
        filter
    };
};

export const setNewsFilterTotalPage = (totalPage) => {
    return {
        type: listTypes.SET_NEWS_FILTER_TOTAL_PAGE,
        totalPage
    };
};

export const getNews = () => {
    return {
        type: listTypes.GET_NEWS
    };
};

export const setNews = (news) => {
    return {
        type: listTypes.SET_NEWS,
        data: news
    };
};

export const setNewsError = (error) => {
    return {
        type: listTypes.SET_NEWS_ERROR,
        error
    };
};

export const getBlogs = () => {
    return {
        type: listTypes.GET_BLOGS
    };
};

export const setBlogs = (blogs) => {
    return {
        type: listTypes.SET_BLOGS,
        data: blogs
    };
};

export const setBlogsError = (error) => {
    return {
        type: listTypes.SET_BLOGS_ERROR,
        error
    };
};
