import React, { useContext, Fragment, useState, useEffect } from 'react';
import { Input } from 'reactstrap';
import { Btn, H6, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import { Apply, UnlimitedColor } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';

const ColorsComponent = () => {
  const { addColor } = useContext(CustomizerContext);
  const default_color = localStorage.getItem('default_color') || ConfigDB.data.color.primary_color;
  const secondary_color = localStorage.getItem('secondary_color') || ConfigDB.data.color.secondary_color;
  // const config_primary = configDB.color.primary_color;
  // const config_primary = configDB.color.primary_color;
  const [colorBackground1, setColorBackground1] = useState(default_color);
  const [colorBackground2, setColorBackground2] = useState(secondary_color);

  useEffect(() => {
    document.documentElement.style.setProperty('--theme-deafult', colorBackground1);
    document.documentElement.style.setProperty('--theme-secondary', colorBackground2);

    ConfigDB.data.color.primary_color = colorBackground1;
    ConfigDB.data.color.secondary_color = colorBackground2;
  }, [setColorBackground1, setColorBackground2, colorBackground1, colorBackground2]);

  const handleUnlimatedColor1Change = (e) => {
    const { value } = e.target;
    setColorBackground1(value);
    ConfigDB.data.color.primary_color = value;
  };
  const handleUnlimatedColor2Change = (e) => {
    const { value } = e.target;
    setColorBackground2(value);
    ConfigDB.data.color.secondary_color = value;
  };
  const OnUnlimatedColorClick = () => {
    window.location.reload();
    addColor(colorBackground1, colorBackground2);
    document.documentElement.style.setProperty('--theme-deafult', colorBackground1);
    document.documentElement.style.setProperty('--theme-secondary', colorBackground2);
  };

  return (
    <Fragment>
      <H6>{UnlimitedColor}</H6>
      <UL attrUL={{ className: 'simple-list flex-row layout-grid unlimited-color-layout' }}>
        <Input className='p-0' type='color' name='Color-Background1' value={colorBackground1} onChange={(e) => handleUnlimatedColor1Change(e)} />
        <Input className='p-0' type='color' name='Color-Background2' value={colorBackground2} onChange={(e) => handleUnlimatedColor2Change(e)} />
        <Btn
          attrBtn={{
            color: 'primary',
            className: 'color-apply-btn color-apply-btn',
            onClick: OnUnlimatedColorClick,
          }}>
          {' '}
          {Apply}
        </Btn>
      </UL>
    </Fragment>
  );
};

export default ColorsComponent;
