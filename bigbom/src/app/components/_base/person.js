import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Persons = ({ person }) => {
    return (
        <div className="inforPerson">
            <div className="imgLinked">
                <span className="imgAva">
                    <LazyLoad height={200} offset={200} once>
                        <img src={person.avatar} alt={person.description} />
                    </LazyLoad>
                </span>
                <a href={person.linkedIn} target="_blank" className="ico-linked" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
                </a>
            </div>
            <p className="name">{person.name}</p>
            <p className="position">{person.position}</p>
        </div>
    );
};

Persons.propTypes = {
    person: PropTypes.object.isRequired
};

export default Persons;
