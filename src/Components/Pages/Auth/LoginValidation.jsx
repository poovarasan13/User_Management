import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';
import { Image } from '../../../AbstractElements';

const LoginValidation = () => {
  return (
    <Fragment>
      <section>
        <Container fluid={true}>
          <Row>
            <Col xl='7' className='b-center bg-size order-1' style={{ backgroundImage: `url(${require('../../../assets/images/login/1.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', display: 'block' }}>
              <Image attrImage={{ className: 'bg-img-cover bg-center d-none', src: `${require('../../../assets/images/login/1.jpg')}`, alt: 'looginpage' }} />
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

export default LoginValidation;
