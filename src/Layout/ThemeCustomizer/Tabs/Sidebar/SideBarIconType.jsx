import React, { Fragment, useContext, useEffect } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import CustomizerContext from '../../../../_helper/Customizer';
import CommenUL from './CommenUL';

const SideBarIconType = () => {
  const { addSidebarIconType } = useContext(CustomizerContext);
  const SideBarIconType = localStorage.getItem('sidebar_icon_type') || ConfigDB.data.settings.sidebar.iconType;

  useEffect(() => {
    ConfigDB.data.settings.sidebar.iconType = SideBarIconType;
  }, []);

  const handleSideBarIconType = (e, type) => {
    e.preventDefault();
    addSidebarIconType(type);
  };

  return (
    <Fragment>
      <H6>Sidebar Icon Type</H6>
      <UL attrUL={{ className: 'sidebar-type layout-grid flex-row' }}>
        <LI
          attrLI={{
            'data-attr': 'stroke-svg',
            className: `normal-sidebar border-0 ${SideBarIconType === 'stroke-svg' ? 'active' : ''}`,
            onClick: (e) => handleSideBarIconType(e, 'stroke-svg'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <div className='body bg-light'>
              <span className='badge badge-primary'>Stroke</span>
            </div>
          </div>
        </LI>
        <LI
          attrLI={{
            'data-attr': 'fill-svg',
            className: `border-0 ${SideBarIconType === 'fill-svg' ? 'active' : ''}`,
            onClick: (e) => handleSideBarIconType(e, 'fill-svg'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <div className='body bg-light'>
              <span className='badge badge-primary'>Fill</span>
            </div>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};

export default SideBarIconType;
