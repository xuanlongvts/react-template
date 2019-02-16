import React from 'react';
import PropTypes from 'prop-types';
import { Link, Route } from 'react-router-dom';

import productsData from './dataListProducts';
import Product from './Product';

const ProductsNav = ({ match }) => {
    return (
        <section id="product-page" className="productsWrap">
            <div className="siderbar">
                <h3>Categories products</h3>
                {productsData.length && (
                    <ul className="list-products">
                        {productsData.map((route, key) => {
                            return (
                                <Route key={key} path={`${match.url}/${route.id}`}>
                                    {prop => (
                                        <li className={prop.match ? 'curr' : null}>
                                            <Link to={`${match.url}/${route.id}`}>{route.name}</Link>
                                        </li>
                                    )}
                                </Route>
                            );
                        })}
                    </ul>
                )}
            </div>

            <Route path={`${match.url}/:productId`} render={props => <Product data={productsData} {...props} />} />
            <Route exact path={match.url} render={() => <div style={{ textAlign: 'center' }}>Please select a product.</div>} />
        </section>
    );
};

ProductsNav.propTypes = {
    children: PropTypes.object,
    match: PropTypes.object,
};

export default ProductsNav;
