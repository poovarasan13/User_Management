import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import CountdownData from './CountdownData';

const ComingBgImg = () => {
    return (
        <Fragment>
            <div className="page-wrapper" id="pageWrapper">
                {/* <!-- Page Body Start--> */}
                <Container fluid={true} className="p-0 m-0">
                    <div className="comingsoon comingsoon-bgimg">
                        <div className="comingsoon-inner text-center">
                            <a href="/">
                                <Image attrImage={{ src: `${require('../../../assets/images/logo/logo.png')}`, alt: '' }} />
                            </a>
                            <H5>WE ARE COMING SOON</H5>
                            <div className="countdown" id="clockdiv">
                                <CountdownData />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Fragment>
    );
};

export default ComingBgImg;