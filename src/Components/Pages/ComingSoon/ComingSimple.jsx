import React, { Fragment } from 'react';
import { Container } from 'reactstrap';
import { H5, Image } from '../../../AbstractElements';
import CountdownData from './CountdownData';
import logo from '../../../assets/images/other-images/logo-login.png';

const ComingSimple = () => {
  return (
    <Fragment>
      <div className='page-wrapper' id='pageWrapper'>
        {/* <!-- Page Body Start--> */}
        <Container fluid={true} className='p-0'>
          <div className='comingsoon'>
            <div className='comingsoon-inner text-center'>
              <a href='/'>
                <Image attrImage={{ src: `${logo}`, alt: '' }} />
              </a>
              <H5>WE ARE COMING SOON</H5>
              <div className='countdown' id='clockdiv'>
                <CountdownData />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default ComingSimple;
