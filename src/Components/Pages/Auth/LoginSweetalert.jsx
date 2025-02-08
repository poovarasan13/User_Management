import React, { Fragment } from 'react';
import { Col, Container, Row } from 'reactstrap';
import LoginForm from './LoginForm';

const LoginSweetalert = () => {
  return (
    <Fragment>
      <section>
        <Container className='p-0' fluid={true}>
          <Row>
            <Col xl='12'>
              <LoginForm logoClassMain='text-start' />
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default LoginSweetalert;
