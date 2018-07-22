import React, { PureComponent } from 'react';
import LazyLoad from 'react-lazyload';

import Helmet from '../../_utils/helmet';

import { members, membersElse } from '../../_data/members';
import membersData from '../../_data/advisors';
import Person from '../_base/person';
import imgTeam from '../../../images/bannerTitle/team.png';
import imgAdvisor from '../../../images/bannerTitle/advisor.png';

class Team extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            listPersons: [...members, ...membersElse]
        };
    }

    static getDerivedStateFromProps(nextProps) {
        const {
            location,
            history: { action }
        } = nextProps;

        if (location && action === 'PUSH') {
            window.scrollTo(0, 0);
        }

        return null;
    }

    render() {
        const { listPersons } = this.state;

        return (
            <div id="team">
                <Helmet />
                <div className="bannerTitle">
                    <div className="container">
                        <div className="title">
                            <LazyLoad height={200} offset={200} once>
                                <img src={imgTeam} alt="team" />
                            </LazyLoad>
                        </div>
                    </div>
                </div>

                <section id="ourTeam">
                    <div className="container">
                        <div className="listPersons">
                            {listPersons.map((item, key) => {
                                return <Person person={item} key={key} />;
                            })}
                        </div>
                    </div>
                </section>

                <div className="bannerTitle">
                    <div className="title">
                        <LazyLoad height={200} offset={200} once>
                            <img src={imgAdvisor} alt="advisor" />
                        </LazyLoad>
                    </div>
                </div>

                <section id="advisor">
                    <div className="container">
                        <div className="listPersons">
                            {membersData.length &&
                                membersData.map((item, key) => {
                                    return <Person person={item} key={key} />;
                                })}
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Team;
