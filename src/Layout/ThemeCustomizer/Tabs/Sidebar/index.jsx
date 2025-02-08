import React, { Fragment } from 'react';
import SidebarType from './SidebarType';
import LayoutType from './LayoutType';
import ColorsComponent from './Color';
import MixLayoutComponent from './MixLayout';
import SideBarIconType from './SideBarIconType';

const SidebarCusmizer = () => {
  return (
    <Fragment>
      <LayoutType />
      <SidebarType />
      <SideBarIconType />
      <ColorsComponent />
      <MixLayoutComponent />
    </Fragment>
  );
};

export default SidebarCusmizer;
