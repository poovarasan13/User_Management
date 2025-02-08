import React, { Fragment, useState, useEffect, useContext } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';
import { Btn, H4, P } from '../../../AbstractElements';
import { EmailAddress, ForgotPassword, LoginWithJWT, Password, RememberPassword, SignIn } from '../../../Constant';

import { useNavigate } from 'react-router-dom';
import { Jwt_token } from '../../../Config/Config';
import man from '../../../assets/images/dashboard/profile.png';
import { handleResponse } from '../../../Services/fack.backend';

import CustomizerContext from '../../../_helper/Customizer';
import OtherWay from './OtherWay';

const LoginTab = ({ selected }) => {
  const [email, setEmail] = useState('test@gmail.com');
  const [password, setPassword] = useState('test123');
  const [togglePassword, setTogglePassword] = useState(false);
  const history = useNavigate();
  const { layoutURL } = useContext(CustomizerContext);

  const [value, setValue] = useState(localStorage.getItem('profileURL' || man));
  const [name, setName] = useState(localStorage.getItem('Name'));

  useEffect(() => {
    localStorage.setItem('profileURL', man);
    localStorage.setItem('Name', 'Emay Walter');
  }, [value, name]);

  const loginAuth = async (e) => {
    e.preventDefault();
    setValue(man);
    setName('Emay Walter');
    if (email !== '' && password !== '') {
      localStorage.setItem('login', JSON.stringify(true));
      history(`${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`);
    }
  };

  const loginWithJwt = (e) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: { email, password },
    };

    return fetch('/users/authenticate', requestOptions)
      .then(handleResponse)
      .then((user) => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        setValue(man);
        setName('Emay Walter');
        localStorage.setItem('token', Jwt_token);
        window.location.href = `${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`;
        return user;
      });
  };

  return (
    <Fragment>
      <Form className='theme-form'>
        <H4>{selected === 'simpleLogin' ? 'Sign In With Simple Login' : 'Sign In With Jwt'}</H4>
        <P>{'Enter your email & password to login'}</P>
        <FormGroup>
          <Label className='col-form-label'>{EmailAddress}</Label>
          <Input className='form-control' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
        </FormGroup>
        <FormGroup className='position-relative'>
          <Label className='col-form-label'>{Password}</Label>
          <div className='position-relative'>
            <Input className='form-control' type={togglePassword ? 'text' : 'password'} onChange={(e) => setPassword(e.target.value)} value={password} />
            <div className='show-hide' onClick={() => setTogglePassword(!togglePassword)}>
              <span className={togglePassword ? '' : 'show'}></span>
            </div>
          </div>
        </FormGroup>
        <div className='position-relative form-group mb-0'>
          <div className='checkbox'>
            <Input id='checkbox1' type='checkbox' />
            <Label className='text-muted' for='checkbox1'>
              {RememberPassword}
            </Label>
          </div>
          <a className='link' href='#javascript'>
            {ForgotPassword}
          </a>
          {selected === 'simpleLogin' ? (
            <Btn attrBtn={{ color: 'primary', className: 'd-block w-100 mt-2', onClick: (e) => loginAuth(e) }}>{SignIn}</Btn>
          ) : (
            <Btn attrBtn={{ color: 'primary', className: 'd-block w-100 mt-2', onClick: (e) => loginWithJwt(e) }}>{LoginWithJWT}</Btn>
          )}
        </div>
        <OtherWay />
      </Form>
    </Fragment>
  );
};

export default LoginTab;
