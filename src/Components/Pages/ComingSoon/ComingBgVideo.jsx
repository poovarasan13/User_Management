import React, { Fragment } from 'react';
import CountdownComponent from './CountdownData';
import { Container } from 'reactstrap';
import comingsoon from '../../../assets/images/other-images/coming-soon-bg.jpg';
import authVideo from '../../../assets/video/auth-bg.mp4';
import { WE_ARE_COMING_SOON } from '../../../Constant';
import { H5, Image } from '../../../AbstractElements';

const ComingsoonVideo = (props) => {
  return (
    <Fragment>
      <div className='page-wrapper'>
        <Container fluid={true} className='p-0'>
          <div className='comingsoon auth-bg-video'>
            <video className='bgvideo-comingsoon' id='bgvid' poster={comingsoon} playsInline='' autoPlay={true} muted={true} loop={true}>
              <source src={authVideo} type='video/mp4' />
            </video>
            <div className='comingsoon-inner text-center'>
              <Image attrImage={{ src: `${require('../../../assets/images/logo/logo.png')}`, alt: '' }} />
              <H5>{WE_ARE_COMING_SOON}</H5>
              <div className='countdown' id='clockdiv'>
                <CountdownComponent />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </Fragment>
  );
};

export default ComingsoonVideo;
