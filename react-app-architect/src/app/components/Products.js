import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';
import Product from './Product';

class Products extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            subLinkActive: null
        };
    }

    componentDidMount() {
        this.setState({
            subLinkActive: window.location.pathname
        });
    }

    handleSubLink(path) {
        this.setState({
            subLinkActive: path
        });
    }

    render() {
        const { match } = this.props;
        const { subLinkActive } = this.state;
        const productsData = [
            {
                id: 1,
                name: 'NIKE Liteforce Blue Sneakers',
                description:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
                status: 'Available'
            },
            {
                id: 2,
                name: 'U.S. POLO ASSN. Slippers',
                description:
                    'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
                status: 'Available'
            },
            {
                id: 3,
                name: 'ADIDAS Adispree Running Shoes',
                description:
                    'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
                status: 'Available'
            },
            {
                id: 4,
                name: 'Lee Cooper Mid Sneakers',
                description:
                    'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
                status: 'Out of Stock'
            }
        ];
        return (
            <div className="products">
                <div
                    style={{
                        display: 'block',
                        justifyContent: 'space-between'
                    }}
                >
                    <div
                        style={{
                            float: 'left',
                            padding: '10px',
                            width: '30%',
                            background: '#f0f0f0',
                            marginLeft: 'auto'
                        }}
                    >
                        <h3>Products</h3>
                        {productsData.length && (
                            <ul
                                className="list-products"
                                style={{
                                    listStyleType: 'none',
                                    padding: 0,
                                    fontSize: '15px'
                                }}
                            >
                                {productsData.map((item, key) => {
                                    let classActive = null;
                                    subLinkActive ===
                                        `${match.url}/${item.id}` &&
                                        (classActive = 'curr');
                                    return (
                                        <li key={key} className={classActive}>
                                            <Link
                                                to={`${match.url}/${item.id}`}
                                                onClick={() =>
                                                    this.handleSubLink(
                                                        `${match.url}/${
                                                            item.id
                                                        }`
                                                    )
                                                }
                                            >
                                                {item.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        )}
                    </div>
                </div>
                <Route
                    path={`${match.url}/:productId`}
                    render={props => <Product data={productsData} {...props} />}
                />
                <Route
                    exact
                    path={match.url}
                    render={() => (
                        <div style={{ textAlign: 'center' }}>
                            Please select a product.
                        </div>
                    )}
                />
            </div>
        );
    }
}

Products.propTypes = {
    match: PropTypes.object.isRequired
};

export default Products;
