import React from 'react';
import LogoRender from './logoRender';
import investors from '../../_data/investors';

const listInvestors = () => {
    return (
        <div className="brand-rela listInvestors">
            {investors.length &&
                investors.map((item, key) => {
                    return <LogoRender logo={item} key={key} />;
                })}
        </div>
    );
};

export default listInvestors;
