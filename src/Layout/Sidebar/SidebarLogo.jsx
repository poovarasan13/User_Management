import React, { useContext, useState } from 'react';
import { Grid } from 'react-feather';
import { Link } from 'react-router-dom';
import { Image } from '../../AbstractElements';
import CubaIcon from '../../assets/images/logo/logo.png';
import CustomizerContext from '../../_helper/Customizer';

const SidebarLogo = () => {
  const { mixLayout, toggleSidebar, layout, layoutURL } = useContext(CustomizerContext);
  const [toggle, setToggle] = useState(false);

  const openCloseSidebar = () => {
    setToggle(!toggle);
    toggleSidebar(toggle);
  };

  const layout1 = localStorage.getItem('sidebar_layout') || layout;

  return (
    <div className='logo-wrapper'>
      {layout1 !== 'compact-wrapper dark-sidebar' && layout1 !== 'compact-wrapper color-sidebar' && mixLayout ? (
        <Link to={`${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`}>
          <Image attrImage={{ className: 'img-fluid d-inline', src: `${CubaIcon}`, alt: '' }} />
        </Link>
      ) : (
        <Link to={`${process.env.PUBLIC_URL}/pages/sample-page/${layoutURL}`}>
          <Image attrImage={{ className: 'img-fluid d-inline', src: `${require('../../assets/images/logo/logo_dark.png')}`, alt: '' }} />
        </Link>
      )}
      <div className='back-btn' onClick={() => openCloseSidebar()}>
        <i className='fa fa-angle-left'></i>
      </div>
      <div className='toggle-sidebar' onClick={openCloseSidebar}>
        <Grid className='status_toggle middle sidebar-toggle' />
      </div>
    </div>
  );
};

export default SidebarLogo;
