import React, { PureComponent } from 'react';

import './style.scss';

class WhyChoose extends PureComponent {
    render() {
        return (
            <div className="whyChoose">
                <ul>
                    <li>+ Technology of Facebook</li>
                    <li>+ Big community</li>
                    <li>+ The same with React Native</li>
                    <li>
                        <a href="https://reactjs.org/blog/2015/03/19/building-the-facebook-news-feed-with-relay.html" target="_blank" rel="noopener noreferrer">
                            + Technology trend are <strong>GraphQL</strong> and <strong>RelayJS</strong>
                        </a>
                    </li>
                    <li>
                        <a href="https://developer.github.com/v4/" target="_blank" rel="noopener noreferrer">
                            + API version 4 Github
                        </a>
                    </li>
                    <li>
                        <a href="https://reactjs.org/blog/2015/02/20/introducing-relay-and-graphql.html" target="_blank" rel="noopener noreferrer">
                            More
                        </a>
                    </li>
                    <li>
                        At Facebook, we have apps built entirely using Flux, entirely using Relay, or with both. One pattern we see emerging is letting Relay
                        manage the bulk of the data flow for an application, but using Flux stores on the side to handle a subset of application state.
                    </li>
                </ul>
            </div>
        );
    }
}

export default WhyChoose;
