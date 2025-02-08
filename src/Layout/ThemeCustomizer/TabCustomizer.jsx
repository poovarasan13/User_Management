import React, { Fragment, useState, useCallback } from 'react';
import { TabContent, TabPane } from 'reactstrap';
import { Btn, H5, P } from '../../AbstractElements';
import { Configuration } from '../../Constant';
import ConfigurationClass from './ConfigurationClass';
import CheckLayout from './Tabs/CheckLayout';
import SidebarCusmizer from './Tabs/Sidebar';

const TabCustomizer = ({ selected, callbackNavTab }) => {
    const [modal, setModal] = useState(false);
    const toggle = useCallback(() => {
        setModal(!modal);
    }, [modal]);

    return (
        <Fragment>
            <TabContent activeTab={selected} >
                <div className="customizer-header">
                    <i className="icon-close" onClick={() => callbackNavTab('', false)}></i>
                    <H5>{'PREVIEW SETTINGS'}</H5>
                    <P attrPara={{ className: "mb-0" }} >
                        {'Try It Real Time'}{' '}
                        <i className="fa fa-thumbs-o-up txt-primary"></i>
                    </P>
                    <Btn attrBtn={{ color: 'primary', className: 'plus-popup mt-2', onClick: () => toggle(!modal) }} >{Configuration}</Btn>
                    <ConfigurationClass modal={modal} toggle={toggle} />
                </div>
                <div className="customizer-body custom-scrollbar tab-content">
                    <TabPane tabId="check-layout">
                        <CheckLayout />
                    </TabPane>
                    <TabPane tabId="sidebar-type">
                        <SidebarCusmizer />
                    </TabPane>
                </div>
            </TabContent>
        </Fragment>
    );
};

export default TabCustomizer;