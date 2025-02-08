import React, { Fragment, useContext, useEffect } from 'react';
import { H6, LI } from '../../../AbstractElements';
import ConfigDB from '../../../Config/ThemeConfig';
import CustomizerContext from '../../../_helper/Customizer';
import { Media } from 'reactstrap';
import barc from '../../../assets/images/layouts/barc.jpg';
import dubai from '../../../assets/images/layouts/dubai.jpg';
import london from '../../../assets/images/layouts/london.jpg';
import los from '../../../assets/images/layouts/los.jpg';
import madrid from '../../../assets/images/layouts/madrid.jpg';
import moscow from '../../../assets/images/layouts/moscow.jpg';
import newyork from '../../../assets/images/layouts/newyork.jpg';
import paris from '../../../assets/images/layouts/paris.jpg';
import romo from '../../../assets/images/layouts/romo.jpg';
import seoul from '../../../assets/images/layouts/seoul.jpg';
import singapore from '../../../assets/images/layouts/singapore.jpg';
import tokyo from '../../../assets/images/layouts/tokyo.jpg';
import { classes } from '../../../Data/Layouts';
import { useNavigate } from 'react-router';

const CheckLayout = () => {
  const { addSidebarLayouts } = useContext(CustomizerContext);
  const history = useNavigate();
  const sidebarSettings = ConfigDB.data.sidebar_setting || localStorage.getItem('sidebar_Settings');

  useEffect(() => {
    ConfigDB.data.settings.sidebar_setting = sidebarSettings;
  }, []);

  const handlePageLayputs = (type) => {
    let key = Object.keys(type).pop();
    let val = Object.values(type).pop();
    const url = window.location.pathname.slice(0, window.location.pathname.lastIndexOf('/'));
    const modifyURL = url + '/' + Object.keys(type);
    addSidebarLayouts(val);
    localStorage.setItem('layout', key);
    history(modifyURL);
  };

  return (
    <Fragment>
      <ul className='sidebar-type layout-grid layout-types'>
        {/* attrUL={{ className: "sidebar-type layout-grid layout-types" }}  */}
        <LI attrLI={{ dataattr: 'compact-sidebar', onClick: (e) => handlePageLayputs(classes[0]) }}>
          {/* // onClick={(e) => handlePageLayputs(classes[0])} */}

          <div className='layout-img'>
            {' '}
            <Media src={dubai} className='img-fluid' alt='' />
            <H6>Dubai</H6>
          </div>
        </LI>
        <LI
          attrLI={{ dataattr: 'modern-layout', onClick: (e) => handlePageLayputs(classes[2]) }}
          // onClick={(e) => handlePageLayputs(classes[2])}
        >
          <div className='layout-img'>
            <Media src={seoul} className='img-fluid' alt='' />
            <H6>Seoul</H6>
          </div>
        </LI>
        <LI
          attrLI={{ dataattr: 'material-layout', onClick: (e) => handlePageLayputs(classes[3]) }}
          // onClick={(e) => handlePageLayputs(classes[3])}
        >
          <div className='layout-img'>
            <Media src={los} className='img-fluid' alt='' />
            <H6>Los Angeles</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'dark-sidebar', onClick: (e) => handlePageLayputs(classes[4]) }}>
          <div className='layout-img'>
            <Media src={paris} className='img-fluid' alt='' />
            <H6>Paris</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'compact-wrap', onClick: (e) => handlePageLayputs(classes[5]) }}>
          <div className='layout-img'>
            <Media src={tokyo} className='img-fluid' alt='' />
            <H6>Tokyo</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'color-sidebar', onClick: (e) => handlePageLayputs(classes[6]) }}>
          <div className='layout-img'>
            <Media src={madrid} className='img-fluid' alt='' />
            <H6>Madrid</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'compact-small', onClick: (e) => handlePageLayputs(classes[7]) }}>
          <div className='layout-img'>
            <Media src={moscow} className='img-fluid' alt='' />
            <H6>Moscow</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'compact-small', className: 'box-layout', onClick: (e) => handlePageLayputs(classes[8]) }}>
          <div className='layout-img'>
            <Media src={newyork} className='img-fluid' alt='' />
            <H6>New York</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'enterprice-type', onClick: (e) => handlePageLayputs(classes[9]) }}>
          <div className='layout-img'>
            <Media src={singapore} className='img-fluid' alt='' />
            <H6>Singapore</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'material-icon', onClick: (e) => handlePageLayputs(classes[10]) }}>
          <div className='layout-img'>
            <Media src={romo} className='img-fluid' alt='' />
            <H6>Rome</H6>
          </div>
        </LI>
        <LI attrLI={{ dataattr: 'advance-type', onClick: (e) => handlePageLayputs(classes[11]) }}>
          <div className='layout-img'>
            <Media src={barc} className='img-fluid' alt='' />
            <H6>Barcelona</H6>
          </div>
        </LI>{' '}
        <LI
          attrLI={{ dataattr: 'default-body', className: 'only-body', onClick: (e) => handlePageLayputs(classes[1]) }}
          //
        >
          <div className='layout-img'>
            <Media src={london} className='img-fluid' alt='' />
            <H6>London</H6>
          </div>
        </LI>
        s
      </ul>
    </Fragment>
  );
};

export default CheckLayout;
