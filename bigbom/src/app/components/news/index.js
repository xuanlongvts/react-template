import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';
import LazyLoad from 'react-lazyload';

import Helmet from '../../_utils/helmet';

import LoadingComponent from '../_base/loadingComponent';
import { getNews, getBlogs, setNewsFilter } from './actions';

import imgNews from '../../../images/bannerTitle/news.png';
import imgBlog from '../../../images/bannerTitle/blog.png';

import imgBlog1 from '../../../images/news_thumb/1.png';
import imgBlog2 from '../../../images/news_thumb/2.png';
import imgBlog3 from '../../../images/news_thumb/3.png';
import imgBlog4 from '../../../images/news_thumb/4.png';
import imgBlog5 from '../../../images/news_thumb/5.png';
import imgBlog6 from '../../../images/news_thumb/6.png';

class News extends PureComponent {
    componentDidMount() {
        const { getBlogs, getNews } = this.props;
        getBlogs();
        getNews();
    }

    handlePageClick = data => {
        const { setNewsFilter } = this.props;
        setNewsFilter({ page: data.selected });
    };

    render() {
        const { blogs, news, filterNews } = this.props;

        const listImgThumbs = [imgBlog1, imgBlog2, imgBlog3, imgBlog4, imgBlog5, imgBlog6];

        const blogsTmp = {
            isLoading: blogs.getIn(['isLoading']),
            error: blogs.getIn(['error']),
            data: blogs.getIn(['data'])
        };

        const newsTmp = {
            isLoading: news.getIn(['isLoading']),
            error: news.getIn(['error']),
            data: news.getIn(['data'])
        };

        const filterNewsTmp = {
            limit: filterNews.getIn(['limit']),
            page: filterNews.getIn(['page']),
            totalPage: filterNews.getIn(['totalPage'])
        };
        return (
            <div id="news-page">
                <Helmet />
                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <LazyLoad height={200} offset={200} once>
                                <img src={imgNews} alt="news" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
                <section id="news">
                    <div className="container">
                        <div className="row">
                            {newsTmp.data.length ? (
                                newsTmp.data.map((item, index) => {
                                    const imgSrc = listImgThumbs[index];
                                    return (
                                        <div key={index} className="item col-sm-6 col-lg-4">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <LazyLoad height={200} offset={200} once>
                                                    <img src={imgSrc} alt={item.title} />
                                                </LazyLoad>
                                                <p className="title">{item.title}</p>
                                            </a>
                                        </div>
                                    );
                                })
                            ) : (
                                <LoadingComponent />
                            )}
                        </div>
                        <div className="boxPaging">
                            <ReactPaginate
                                previousLabel="«"
                                nextLabel="»"
                                breakLabel={<a href="">...</a>}
                                breakClassName="break-me"
                                initialPage={filterNewsTmp.page}
                                pageCount={filterNewsTmp.totalPage}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={5}
                                onPageChange={this.handlePageClick}
                                containerClassName="pagination"
                                subContainerClassName="pages pagination"
                                activeClassName="active"
                            />
                        </div>
                    </div>
                </section>

                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <LazyLoad height={200} offset={200} once>
                                <img src={imgBlog} alt="blog" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>
                <section id="blog">
                    <div className="container">
                        <div className="row">
                            {blogsTmp.data.length ? (
                                blogsTmp.data.map((item, index) => {
                                    const imgSrc = listImgThumbs[index];
                                    // item.thumbnail
                                    return (
                                        <div key={index} className="item col-sm-6 col-lg-4">
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                                <LazyLoad height={200} offset={200} once>
                                                    <img src={imgSrc} alt={item.title} />
                                                </LazyLoad>
                                                <p className="title">{item.title}</p>
                                            </a>
                                        </div>
                                    );
                                })
                            ) : (
                                <LoadingComponent />
                            )}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

News.propTypes = {
    getNews: PropTypes.func.isRequired,
    getBlogs: PropTypes.func.isRequired,
    setNewsFilter: PropTypes.func.isRequired,

    news: PropTypes.object.isRequired,
    blogs: PropTypes.object.isRequired,
    filterNews: PropTypes.object.isRequired
};

const mapStateToProps = state => {
    return {
        news: state.reducerNews.getIn(['news']),
        blogs: state.reducerNews.getIn(['blogs']),
        filterNews: state.reducerNews.getIn(['filterNews'])
    };
};

const mapDispatchToProps = {
    getNews,
    getBlogs,
    setNewsFilter
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(News);
