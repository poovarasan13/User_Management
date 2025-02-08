import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import RegisterFrom from './RegisterFrom';
import { Image } from '../../../AbstractElements';

const RegisterVideo = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0'>
          <Row className='m-0'>
            <Col xl='7' className='b-center bg-size' style={{ backgroundImage: `url(${require('../../../assets/images/login/1.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
              <Image attrImage={{ className: 'bg-img-cover bg-center d-none', src: `${require('../../../assets/images/login/1.jpg')}`, alt: 'looginpage' }} />
            </Col>
            <Col xl='5' className='p-0'>
              <RegisterFrom logoClassMain ="text-start"/>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default RegisterVideo;
