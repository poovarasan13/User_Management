import React, { Fragment, useContext, useEffect } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import CustomizerContext from '../../../../_helper/Customizer';
import CommenUL from './CommenUL';

const SidebarType = () => {
  const { addSidebarLayouts } = useContext(CustomizerContext);
  const sidebarType = localStorage.getItem('sidebar_types') || ConfigDB.data.settings.sidebar.type;

  useEffect(() => {
    ConfigDB.data.settings.sidebar.type = sidebarType;
  }, []);

  const handleSidebarType = (e, type) => {
    e.preventDefault();
    addSidebarLayouts(type);
  };

  return (
    <Fragment>
      <H6>Sidebar Type</H6>
      <UL attrUL={{ className: 'sidebar-type layout-grid' }}>
        <LI
          attrLI={{
            'data-attr': 'normal-sidebar',
            className: `border-0 ${sidebarType === 'horizontal-wrapper' ? 'active' : ''}`,
            onClick: (e) => handleSidebarType(e, 'horizontal-wrapper'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <UL attrUL={{ className: 'flex-row' }}>
              <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}></LI>
            </UL>
          </div>
        </LI>
        <LI
          attrLI={{
            'data-attr': 'compact-sidebar',
            className: `border-0 ${sidebarType === 'compact-wrapper' ? 'active' : ''}`,
            onClick: (e) => handleSidebarType(e, 'compact-wrapper'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <UL attrUL={{ className: 'flex-row' }}>
              <LI attrLI={{ className: 'bg-dark sidebar compact' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}></LI>
            </UL>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};

export default SidebarType;
