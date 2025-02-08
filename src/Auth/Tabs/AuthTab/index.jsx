import React, { Fragment } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { AUTH0 } from '../../../Constant';
import { Btn, H4, Image, P } from '../../../AbstractElements';
import authImg from '../../../assets/images/auth-img.svg';

const AuthTab = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <Fragment>
      <div className='auth-content'>
        <Image attrImage={{ src: `${authImg}`, alt: '' }} />
        <H4>{'Welcome to login with Auth0'}</H4>
        <P>{'From improving customer experience through seamless sign-on to making MFA as easy as a click of a button – your login box must find the right balance between user convenience, privacy and security.'}</P>
        <Btn attrBtn={{ color: 'info', onClick: loginWithRedirect }}>{AUTH0}</Btn>
      </div>
    </Fragment>
  );
};

export default AuthTab;
