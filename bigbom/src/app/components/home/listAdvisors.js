import React from 'react';
import Person from '../_base/person';
import membersData from '../../_data/advisors';

const listPersons = () => (
    <div className="listPersons">
        {membersData.length &&
            membersData.map((item, key) => {
                return <Person person={item} key={key} />;
            })}
    </div>
);

export default listPersons;
