import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Link, Route} from 'react-router-dom';

class Catagories extends PureComponent {
    constructor(props){
        super(props);

        this.state = {
            subLinkActive: null
        };
    }

    componentDidMount(){
        this.setState({
            subLinkActive: window.location.pathname
        });
    }

    handleSubLink(path){
        this.setState({
            subLinkActive: path
        });
    }

    render(){
        const { match } = this.props;
        const { subLinkActive } = this.state;
        const listSubLink = [
            {
                title: 'Shoes',
                path: `${match.url}/shoes`
            },
            {
                title: 'Boots',
                path: `${match.url}/boots`
            },
            {
                title: 'Footwear',
                path: `${match.url}/footwear`
            }
        ];

        return (
            <div className="catagories">
                <ul className="list-catagories">
                    {
                        listSubLink.map((item, key) => {
                            let classActive = (subLinkActive === item.path) ? 'curr' : null;
                            return <li key={key} className={classActive}><Link to={item.path} onClick={() => this.handleSubLink(item.path)}>{item.title}</Link></li>;
                        })
                    }
                </ul>
                <Route path={`${match.path}/:name`} render={({match}) => <h3>{match.params.name}</h3>} />
            </div>
        );
    }
}

Catagories.propTypes = {
    match: PropTypes.object.isRequired
};

export default Catagories;