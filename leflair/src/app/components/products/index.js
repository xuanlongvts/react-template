import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';

import NotFound from '../NotFound';

import ProductList from './productList';
import ProductDetail from './productDetail';

class Products extends PureComponent {
    render() {
        const { match } = this.props;

        const listSubLink = [
            {
                title: 'Products list',
                path: `${match.url}`,
                exact: true,
                component: ProductList
            },
            {
                title: 'Products details',
                path: `${match.url}/:idproduct`,
                component: ProductDetail
            }
        ];

        return (
            <div id="prodPage">
                <Switch>
                    {listSubLink.length && listSubLink.map((route, key) => <Route key={key} {...route} />)}
                    <Route component={NotFound} />
                </Switch>
            </div>
        );
    }
}

Products.propTypes = {
    match: PropTypes.object.isRequired
};

export default Products;
