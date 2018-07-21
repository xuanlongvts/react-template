import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import Person from '../_base/person';
import { members } from '../../_data/members';

class listPersons extends PureComponent {
    render() {
        return (
            <div className="listPersons">
                {members.map((item, key) => {
                    return <Person person={item} key={key} />;
                })}

                <Link to="/team" className="inforPerson viewAll">
                    <p>
                        View <br /> all
                    </p>
                </Link>
            </div>
        );
    }
}

export default listPersons;
