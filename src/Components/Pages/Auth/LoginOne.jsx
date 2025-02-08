import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import { Image } from '../../../AbstractElements';
import LoginForm from './LoginForm';

const LoginOne = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='5' className='b-center bg-size' style={{ backgroundImage: `url(${require('../../../assets/images/login/3.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
              <Image attrImage={{ className: 'bg-img-cover bg-center d-none', src: `${require('../../../assets/images/login/3.jpg')}`, alt: 'looginpage' }} />
            </Col>
            <Col xl='7 p-0'>
              <LoginForm logoClassMain='text-start' />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginOne;
