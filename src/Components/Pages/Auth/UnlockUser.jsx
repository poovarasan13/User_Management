import React, { Fragment, useState } from 'react';
import { Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap';
import { Btn, H4, P, Image } from '../../../AbstractElements';
import { Link } from 'react-router-dom';
import logoWhite from '../../../assets/images/logo/logo.png';
import logoDark from '../../../assets/images/logo/logo_dark.png';

const UnlockUser = ({ logoClassMain }) => {
  const [togglePassword, setTogglePassword] = useState(false);
  return (
    <Fragment>
      <section>
        <Container fluid={true} className='p-0 login-page'>
          <Row className='m-0'>
            <Col className='p-0'>
              <div className='login-card'>
                <div>
                  <div>
                    <Link className={`logo ${logoClassMain ? logoClassMain : ''}`} to={process.env.PUBLIC_URL}>
                      <Image attrImage={{ className: 'img-fluid for-light', src: logoWhite, alt: 'looginpage' }} />
                      <Image attrImage={{ className: 'img-fluid for-dark', src: logoDark, alt: 'looginpage' }} />
                    </Link>
                  </div>
                  <div className='login-main unlock-user'>
                    <Form className='theme-form login-form'>
                      <H4>Unlock</H4>
                      <FormGroup className='position-relative'>
                        <Label className='col-form-label'>Enter your Password</Label>
                        <div className='position-relative'>
                          <Input className='form-control' type={togglePassword ? 'text' : 'password'} name='login[password]' required placeholder='*********' />
                          <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
                            <span className={togglePassword ? '' : 'show'}></span>
                          </div>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <div className='checkbox p-0'>
                          <Input id='checkbox1' type='checkbox' />
                          <Label className='text-muted' for='checkbox1'>
                            Remember password
                          </Label>
                        </div>
                      </FormGroup>
                      <FormGroup>
                        <Btn attrBtn={{ className: 'd-block w-100', color: 'primary', type: 'submit' }}>Unlock </Btn>
                      </FormGroup>
                      <P attrPara={{ className: 'mb-0' }}>
                        Already have an account?
                        <Link className='ms-2' to={`${process.env.PUBLIC_URL}/pages/authentication/login-simple`}>
                          Sign in
                        </Link>
                      </P>
                    </Form>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Fragment>
  );
};

export default UnlockUser;
