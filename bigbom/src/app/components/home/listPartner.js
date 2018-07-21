import React from 'react';
import LogoRender from './logoRender';
import partners from '../../_data/partner';

const listPartners = () => {
    return (
        <div className="brand-rela listPartners">
            {partners.length &&
                partners.map((item, key) => {
                    return <LogoRender logo={item} key={key} />;
                })}
        </div>
    );
};

export default listPartners;
