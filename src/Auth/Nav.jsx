import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { AUTH0, JWT } from '../Constant';
import { Image } from '../AbstractElements';
import simpleLogin from '../assets/images/simple-login.svg';
import jwtImg from '../assets/images/jwt.svg';
import authImg from '../assets/images/auth0.svg';

const NavAuth = ({ callbackNav, selected }) => {
  return (
    <Nav className='border-tab flex-column' tabs>
      <NavItem>
        <NavLink className={selected === 'simpleLogin' ? 'active' : ''} onClick={() => callbackNav('simpleLogin')}>
          <Image attrImage={{ src: `${simpleLogin}`, alt: '' }} />
          <span>Simple Login</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={selected === 'jwt' ? 'active' : ''} onClick={() => callbackNav('jwt')}>
          <Image attrImage={{ src: `${jwtImg}`, alt: '' }} />
          <span>{JWT}</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className={selected === 'auth0' ? 'active' : ''} onClick={() => callbackNav('auth0')}>
          <Image attrImage={{ src: `${authImg}`, alt: '' }} />
          <span>{AUTH0}</span>
        </NavLink>
      </NavItem>
    </Nav>
  );
};

export default NavAuth;
