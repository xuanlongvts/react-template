import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';

import { selectReddit, invalidateReddit } from './actions';

class App extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleRefreshClick = this.handleRefreshClick.bind(this);
    }

    componentDidMount() {
        const { selectReddit, selectedReddit } = this.props;
        selectReddit(selectedReddit);
    }

    handleChange(nextReddit) {
        const { selectReddit } = this.props;
        selectReddit(nextReddit);
    }

    handleRefreshClick(e) {
        e.preventDefault();
        const { invalidateReddit, selectedReddit } = this.props;
        invalidateReddit(selectedReddit);
    }

    render() {
        const { selectedReddit, posts, isFetching, lastUpdated, errMess } = this.props;
        if (errMess) {
            return (
                <div className="reddit-api">
                    <Container>{errMess}</Container>
                </div>
            );
        }

        return (
            <div className="reddit-api">
                <Container>
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
                        <span onClick={!isFetching ? this.handleRefreshClick : null} className={!isFetching ? 'enable refresh' : 'refresh'}>
                            Refresh
                        </span>
                    </p>
                    {isFetching && posts.length === 0 && <h2>Loading...</h2>}
                    {!isFetching && posts.length === 0 && <h2>Empty.</h2>}
                    {posts.length > 0 && (
                        <ul className={isFetching ? 'loaded' : ''}>
                            {posts.map((post, key) => (
                                <li key={key}>{post.title}</li>
                            ))}
                        </ul>
                    )}
                </Container>
            </div>
        );
    }
}

App.propTypes = {
    selectedReddit: PropTypes.string.isRequired,
    posts: PropTypes.array.isRequired,
    isFetching: PropTypes.bool.isRequired,
    selectReddit: PropTypes.func.isRequired,
    invalidateReddit: PropTypes.func.isRequired,
    lastUpdated: PropTypes.number.isRequired,
    errMess: PropTypes.string,
};

const mapStateToProps = state => {
    const selectedReddit = state.reducerRedditApi.getIn(['selectedReddit']);
    const postsByReddit = state.reducerRedditApi.getIn(['postsByReddit']);
    const postsByRedditGetSelect = postsByReddit.getIn([selectedReddit]);

    let { isFetching, lastUpdated, posts, errMess } = {
        isFetching: postsByRedditGetSelect === undefined ? true : postsByRedditGetSelect.getIn(['isFetching']),
        lastUpdated: (postsByRedditGetSelect && postsByRedditGetSelect.getIn(['lastUpdated'])) || Date.now(),
        posts: (postsByRedditGetSelect && postsByRedditGetSelect.getIn(['items'])) || [],
        errMess: postsByRedditGetSelect && postsByRedditGetSelect.getIn(['errMess']),
    };

    return {
        selectedReddit,
        posts,
        isFetching,
        lastUpdated,
        errMess,
    };
};

const mapDispatchToProps = {
    selectReddit,
    invalidateReddit,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(App);
