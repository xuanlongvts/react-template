import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Input } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import _ from 'lodash';
import CareersApply from './careers-apply';

import positionBg from '../../../images/bannerBg/position-bg.png';

const positions = [
    {
        location: 'Saigon, VN',
        department: 'Analytics',
        position: 'Business Strategy Manager'
    },
    {
        location: 'Hanoi, VN',
        department: 'Analytics',
        position: 'Business Strategy Senior Associate'
    },
    {
        location: 'Danang, VN',
        department: 'Analytics',
        position: 'Senior Analyst, Data Analytics'
    },
    {
        location: 'Los Angeles, US',
        department: 'Engineering',
        position: 'Blockchain Lead'
    },
    {
        location: 'Singapore, SG',
        department: 'Engineering',
        position: 'Business Strategy Senior Associate'
    },
    {
        location: 'Los Angeles, US',
        department: 'Creative',
        position: 'UI/UX Designer'
    },
    {
        location: 'Singapore, SG',
        department: 'Creative',
        position: 'Motion Designer'
    }
];

class CareersPosition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLocationOpen: false,
            isDepartmentOpen: false,

            locationOptions: ['All Locations'],
            departmentOptions: ['All Departments'],
            filter: {
                search: '',
                location: 'All Locations',
                department: 'All Departments'
            },
            resultData: []
        };
    }

    componentDidMount() {
        this.initOptions();
    }

    initOptions = () => {
        let [locationOptions, departmentOptions] = [['All Locations'], ['All Departments']];
        positions.forEach(item => {
            if (locationOptions.indexOf(item.location) === -1) {
                locationOptions.push(item.location);
            }
            if (departmentOptions.indexOf(item.department) === -1) {
                departmentOptions.push(item.department);
            }
        });
        this.setState({ locationOptions, departmentOptions }, () => {
            this.debounceFilterData()();
        });
    };

    filterData = () => {
        const { filter } = this.state;
        let resultData = [];
        let filterData = _.filter(positions, item => {
            if (!(filter.location === 'All Locations' || item.location === filter.location)) {
                return false;
            }
            if (!(filter.department === 'All Departments' || item.department === filter.department)) {
                return false;
            }
            if (
                !(
                    filter.search.trim() === '' ||
                    item.position.toLowerCase().indexOf(filter.search.trim().toLowerCase()) !== -1
                )
            ) {
                return false;
            }
            return true;
        });
        resultData = _
            .chain(filterData)
            .groupBy('department')
            .toPairs()
            .map(function(currentItem) {
                return _.zipObject(['department', 'positions'], currentItem);
            })
            .value();
        this.setState({ resultData });
    };

    debounceFilterData = () =>
        _.debounce(this.filterData, 500, {
            leading: false,
            trailing: true
        });

    toggleLocation = () => {
        const { isLocationOpen } = this.state;
        this.setState({ isLocationOpen: !isLocationOpen });
    };

    toggleDepartment = () => {
        const { isDepartmentOpen } = this.state;
        this.setState({ isDepartmentOpen: !isDepartmentOpen });
    };

    searchOnChange = event => {
        let { filter } = this.state;
        filter.search = event.target.value;
        this.setState({ filter }, () => {
            this.debounceFilterData()();
        });
    };

    optionOnChange = (field, value) => {
        return () => {
            let { filter } = this.state;
            filter[field] = value;
            this.setState({ filter }, () => {
                this.debounceFilterData()();
            });
        };
    };

    render() {
        const { isLocationOpen, isDepartmentOpen, locationOptions, departmentOptions, filter, resultData } = this.state;
        return (
            <React.Fragment>
                <div className="position-banner">
                    <LazyLoad height={200} offset={100} once>
                        <img src={positionBg} alt="careers" />
                    </LazyLoad>
                </div>

                <div className="container position-container">
                    <section className="carrer-position-title">
                        <div className="title">
                            Job <strong>positions</strong>
                        </div>
                        <div className="des">
                            We are always looking for creative, talented self-starters to join the Bigbom Eco family
                            Check out our open positions and fill out an application.
                        </div>
                    </section>
                    <section className="carrer-position-filter">
                        <Input
                            type="text"
                            name="position-filter-keysearch"
                            id="position-filter-keysearch"
                            className="filter-field"
                            placeholder="Keyword skill, Job title"
                            onChange={this.searchOnChange}
                        />
                        <ButtonDropdown
                            isOpen={isLocationOpen}
                            toggle={this.toggleLocation}
                            className="filter-field dropdown-group-btn"
                        >
                            <DropdownToggle outline className="toggle-btn">
                                <span className="toggle-btn-text">{filter.location}</span>
                                <FontAwesomeIcon icon={['fas', 'angle-down']} />
                            </DropdownToggle>
                            {locationOptions.length > 0 && (
                                <DropdownMenu>
                                    {locationOptions.map((item, index) => {
                                        return index === 0 ? (
                                            [
                                                <DropdownItem
                                                    key={item}
                                                    onClick={this.optionOnChange('location', locationOptions[0])}
                                                >
                                                    {locationOptions[0]}
                                                </DropdownItem>,
                                                <DropdownItem key="divider" divider />
                                            ]
                                        ) : (
                                            <DropdownItem key={item} onClick={this.optionOnChange('location', item)}>
                                                {item}
                                            </DropdownItem>
                                        );
                                    })}
                                </DropdownMenu>
                            )}
                        </ButtonDropdown>

                        <ButtonDropdown
                            isOpen={isDepartmentOpen}
                            toggle={this.toggleDepartment}
                            className="filter-field dropdown-group-btn"
                        >
                            <DropdownToggle outline className="toggle-btn">
                                <span className="toggle-btn-text">{filter.department}</span>
                                <FontAwesomeIcon icon={['fas', 'angle-down']} />
                            </DropdownToggle>
                            {departmentOptions.length > 0 && (
                                <DropdownMenu>
                                    {departmentOptions.map((item, index) => {
                                        return index === 0 ? (
                                            [
                                                <DropdownItem
                                                    key={item}
                                                    onClick={this.optionOnChange('department', departmentOptions[0])}
                                                >
                                                    {departmentOptions[0]}
                                                </DropdownItem>,
                                                <DropdownItem key="divider" divider />
                                            ]
                                        ) : (
                                            <DropdownItem key={item} onClick={this.optionOnChange('department', item)}>
                                                {item}
                                            </DropdownItem>
                                        );
                                    })}
                                </DropdownMenu>
                            )}
                        </ButtonDropdown>

                        <Button color="link" className="buttonGreen search-btn">
                            Search
                        </Button>
                    </section>
                    <section className="carrer-position-result">
                        {resultData &&
                            resultData.map(item => {
                                return (
                                    <div className="rs-block" key={item.department}>
                                        <div className="title-row">
                                            <span className="position-type">{item.department}</span>
                                        </div>
                                        <div className="rs-rows">
                                            {item.positions.map(position => {
                                                return (
                                                    <Link
                                                        to={'careers/' + position.position}
                                                        className="rs-row"
                                                        key={position.position + position.location}
                                                    >
                                                        <span className="rs-position">{position.position}</span>
                                                        <span className="rs-location">
                                                            {position.location}
                                                            <FontAwesomeIcon icon={['fas', 'angle-double-right']} />
                                                        </span>
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    </div>
                                );
                            })}
                    </section>
                    <section className="carrer-position-require-position">
                        <div className="des">
                            <div className="pharse">If you do not find the desired position, </div>
                            <div className="pharse">Please send us the information, we appreciate it very much</div>
                        </div>
                        <CareersApply
                            className="require-position-form"
                            hasAttachment={false}
                            actionAlign="right"
                            submit={() => {}}
                        />
                    </section>
                </div>
            </React.Fragment>
        );
    }
}

export default CareersPosition;
