import React, { Fragment, useEffect, useContext } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import ConfigDB from '../../../../Config/ThemeConfig';
import { MixLayout } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';
import CommenUL from '../Sidebar/CommenUL';

const MixLayoutComponent = () => {
  const { addMixBackgroundLayout, setMixLayout } = useContext(CustomizerContext);
  const mixLayout = localStorage.getItem('mix_background_layout') || ConfigDB.data.color.mix_background_layout;

  useEffect(() => {
    if (mixLayout !== 'light-only') {
      setMixLayout(false);
    } else {
      setMixLayout(true);
    }
    ConfigDB.data.color.mix_background_layout = mixLayout;
    document.body.classList.add(mixLayout);
  }, [mixLayout, setMixLayout]);

  const handleCustomizerMix_Background = (value) => {
    addMixBackgroundLayout(value);
    if (value === 'light-only') {
      document.body.classList.add('light-only');
      document.body.classList.remove('dark-sidebar');
      document.body.classList.remove('dark-only');
    } else if (value === 'dark-sidebar') {
      document.body.classList.remove('light-only');
      document.body.classList.add('dark-sidebar');
      document.body.classList.remove('dark-only');
    } else if (value === 'dark-only') {
      document.body.classList.remove('light-only');
      document.body.classList.remove('dark-sidebar');
      document.body.classList.add('dark-only');
    }
  };
  return (
    <Fragment>
      <H6 className=''>{MixLayout}</H6>
      <UL attrUL={{ className: 'layout-grid customizer-mix flex-row' }}>
        <LI
          attrLI={{
            className: `color-layout border-0 ${mixLayout === 'light-only' ? 'active' : ''}`,
            dataattr: 'light-only',
            onClick: () => handleCustomizerMix_Background('light-only'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <UL>
              <LI attrLI={{ className: 'bg-light sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}> </LI>
            </UL>
          </div>
        </LI>
        <LI
          attrLI={{
            className: `color-layout border-0 ${mixLayout === 'dark-sidebar' ? 'active' : ''}`,
            dataattr: 'dark-sidebar',
            onClick: () => handleCustomizerMix_Background('dark-sidebar'),
          }}>
          <div className='header bg-light'>
            <CommenUL />
          </div>
          <div className='body'>
            <UL>
              <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-light body' }}> </LI>
            </UL>
          </div>
        </LI>
        <LI
          attrLI={{
            className: `color-layout border-0 ${mixLayout === 'dark-only' ? 'active' : ''}`,
            dataattr: 'dark-only',
            onClick: () => handleCustomizerMix_Background('dark-only'),
          }}>
          <div className='header bg-dark'>
            <CommenUL />
          </div>
          <div className='body'>
            <UL>
              <LI attrLI={{ className: 'bg-dark sidebar' }}></LI>
              <LI attrLI={{ className: 'bg-dark body' }}> </LI>
            </UL>
          </div>
        </LI>
      </UL>
    </Fragment>
  );
};

export default MixLayoutComponent;
