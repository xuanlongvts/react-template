import React, { PureComponent } from 'react';

import HeadTop from './_base/headTop';

const bredCrumArr = ['Material-UI', 'Lap', 'Breadcrumbs'];
class About extends PureComponent {
    render() {
        return (
            <section className="aboutPage">
                <HeadTop titleShow="Category" breadcrumbs={bredCrumArr} />
                <p className="txtIntro">About</p>
            </section>
        );
    }
}

export default About;
