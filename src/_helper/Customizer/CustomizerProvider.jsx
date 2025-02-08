import React, { useEffect, useState } from 'react';
import ConfigDB from '../../Config/ThemeConfig';
import { classes } from '../../Data/Layouts';
import Context from './index';

const CustomizerProvider = (props) => {
  const customizer = ConfigDB.data;
  const [layout, setLayout] = useState('');
  const [sidebarIconType, setSidebarIconType] = useState('');
  const [mix_background_layout, setMixBackgroundLayout] = useState('');
  const [toggleIcon, setToggleIcon] = useState(false);
  const [mixLayout, setMixLayout] = useState(false);
  const [sidebarResponsive, setSidebarResponsive] = useState(false);
  const [IsOpen, setIsClose] = useState(false);
  const defaultLayoutObj = classes.find((item) => Object.values(item).pop(1) === 'compact-wrapper');
  const layoutURL = localStorage.getItem('layout') || Object.keys(defaultLayoutObj).pop();
  const layoutValue = Object.values(defaultLayoutObj).pop();
  const location = window.location.pathname.split('/').pop();

  useEffect(() => {
    setLayout(layoutValue);
    setSidebarIconType(localStorage.getItem('sidebar_icon_type') || ConfigDB.data.settings.sidebar.iconType);
    classes.map((item) => {
      const item1 = Object.keys(item).pop();
      if (location === item1) {
        const val = Object.values(item).pop();
        localStorage.setItem('sidebar_layout', val);
        ConfigDB.data.settings.sidebar.type = val;
        setLayout(val);
      }

      return null;
    });
    ConfigDB.data.settings.sidebar_setting = 'default-sidebar';
  }, []);

  //Set LTR,RTL,BOX Tyoe
  const addLayout = (layout) => {
    ConfigDB.data.settings.layout_type = layout;
    localStorage.setItem('layout_type', layout);
    setLayout(layout);
  };

  //Toggle sidebar
  const toggleSidebar = (toggle) => {
    setToggleIcon(toggle);
  };

  //Multiple Sidebar Layouts
  const addSidebarLayouts = (sidebar_layout) => {
    localStorage.setItem('sidebar_layout', sidebar_layout);
    ConfigDB.data.settings.sidebar.type = sidebar_layout;
    setLayout(sidebar_layout);
  };
  //SideBar Icon Sidebar
  const addSidebarIconType = (sidebar_Icon_Type) => {
    localStorage.setItem('sidebar_icon_type', sidebar_Icon_Type);
    ConfigDB.data.settings.sidebar.iconType = sidebar_Icon_Type;
    setSidebarIconType(sidebar_Icon_Type);
  };

  //Add Sidebar Settings like(border ,default ,...);
  const addSidebarSettings = (settings) => {
    ConfigDB.data.settings.sidebar_setting = settings;
  };

  //Add Mix layouts like (dark , light ,...)
  const addMixBackgroundLayout = (mix_background_layout) => {
    ConfigDB.data.color.mix_background_layout = mix_background_layout;
    localStorage.setItem('mix_background_layout', mix_background_layout);
    if (mix_background_layout !== 'light-only') {
      setMixLayout(false);
    } else {
      setMixLayout(true);
    }
    setMixBackgroundLayout(mix_background_layout);
  };

  // Add Colors
  const addColor = (default_color, secondary_color) => {
    ConfigDB.data.color.primary_color = default_color;
    ConfigDB.data.color.secondary_color = secondary_color;
    localStorage.setItem('default_color', default_color);
    localStorage.setItem('secondary_color', secondary_color);
  };

  const toggleSidebarResponsive = (toggle) => {
    setSidebarResponsive(toggle);
  };

  return (
    <Context.Provider
      value={{
        ...props,
        layout,
        sidebarIconType,
        mix_background_layout,
        toggleIcon,
        mixLayout,
        sidebarResponsive,
        IsOpen,
        layoutURL,
        customizer,
        setIsClose,
        setToggleIcon,
        toggleSidebarResponsive,
        setMixLayout,
        addSidebarLayouts: addSidebarLayouts,
        addSidebarIconType: addSidebarIconType,
        addSidebarSettings: addSidebarSettings,
        addLayout: addLayout,
        addMixBackgroundLayout: addMixBackgroundLayout,
        addColor: addColor,
        toggleSidebar: toggleSidebar,
      }}>
      {props.children}
    </Context.Provider>
  );
};

export default CustomizerProvider;
