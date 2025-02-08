import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import { Image } from '../../../AbstractElements';

const LoginTwo = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='7' className='b-center bg-size' style={{ backgroundImage: `url(${require('../../../assets/images/login/2.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
              <Image attrImage={{ className: 'bg-img-cover bg-center d-none', src: `${require('../../../assets/images/login/2.jpg')}`, alt: 'looginpage' }} />
            </Col>
            <Col xl='5 p-0'>
              <LoginForm logoClassMain='text-start' />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginTwo;
