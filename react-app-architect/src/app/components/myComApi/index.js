import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { selectReddit, invalidateReddit } from './actions';

class App extends PureComponent {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this)
        this.handleRefreshClick = this.handleRefreshClick.bind(this)
    }

    handleChange(nextReddit) {
        const { dispatch } = this.props;
        dispatch(selectReddit(nextReddit));
    }

    handleRefreshClick(e) {
        e.preventDefault();
        const { dispatch, selectedReddit } = this.props;
        dispatch(invalidateReddit(selectedReddit));
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated } = this.props;
        return (
            <div>
                <span>
                    <h1>{selectedReddit}</h1>
                    <select onChange={e => this.handleChange(e.target.value)} value={selectedReddit}>
                        {['reactjs', 'frontend'].map(option => (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </span>

                <p>
                    {lastUpdated && <span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}. </span>}
                    {!isFetching && (
                        <a href="javascript:;" onClick={this.handleRefreshClick}>
                            Refresh
                        </a>
                    )}
                </p>
                {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                {posts.length > 0 && (
                    <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <ul>{posts.map((post, i) => 
                            <li key={i} style={{textAlign: 'left', color: '#000'}}>
                                {post.title}
                            </li>)}
                        </ul>
                    </div>
                )}
            </div>
        )
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    lastUpdated: PropTypes.number,
    dispatch: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
    const selectedReddit = state.rootReducer.reducerMyComApi.getIn(['selectedReddit']);
    const postsByReddit = state.rootReducer.reducerMyComApi.getIn(['postsByReddit']);
    const postsByRedditGetSelect = postsByReddit.getIn([selectedReddit]);

    let { isFetching, lastUpdated, posts } = { 
        isFetching: postsByRedditGetSelect.getIn(['isFetching']) || false, 
        lastUpdated: postsByRedditGetSelect.getIn(['lastUpdated']) || null, 
        posts: postsByRedditGetSelect.getIn(['items']) || []
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated,
    }
};

export default connect(mapStateToProps)(App);
