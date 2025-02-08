import React, { Fragment } from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { BuyNow, CheckFeatures, Document, QuickOption, Support } from '../../Constant';

const NavCustomizer = ({ callbackNav, selected }) => {
  return (
    <Fragment>
      <Nav className='flex-column nac-pills' id='c-pills-tab' role='tablist' aria-orientation='vertical'>
        <NavItem>
          <NavLink className={selected === 'check-layout' ? 'active' : ''} onClick={() => callbackNav('check-layout', true)}>
            <div className='settings'>
              <i className='icon-paint-bucket'></i>
            </div>
            <span>{QuickOption}</span>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className={selected === 'sidebar-type' ? 'active' : ''} onClick={() => callbackNav('sidebar-type', true)}>
            <div className='settings'>
              <i className='icon-settings'></i>
            </div>
            <span>{QuickOption}</span>
          </NavLink>
        </NavItem>
        <a className='nav-link' href='https://pixelstrap.freshdesk.com/' target='_blank' rel='noopener noreferrer'>
          <div>
            <i className='icon-support'></i>
          </div>
          <span>{Support}</span>
        </a>
        <a className='nav-link' href='https://docs.pixelstrap.com/cuba/all_in_one/document/index.html' target='_blank' rel='noopener noreferrer'>
          <div>
            <i className='icon-settings'></i>
          </div>
          <span>{Document}</span>
        </a>
        <a className='nav-link' href='http://admin.pixelstrap.com/cuba/theme/landing-page.html#frameworks' target='_blank' rel='noopener noreferrer'>
          <div>
            <i className='icon-panel'></i>
          </div>
          <span>{CheckFeatures}</span>
        </a>
        <a className='nav-link' href='https://1.envato.market/3GVzd' target='_blank' rel='noopener noreferrer'>
          <div>
            <i className='icon-shopping-cart-full'></i>
          </div>
          <span>{BuyNow}</span>
        </a>
      </Nav>
    </Fragment>
  );
};

export default NavCustomizer;
