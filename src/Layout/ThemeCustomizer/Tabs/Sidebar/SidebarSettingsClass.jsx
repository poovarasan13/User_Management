import React, { Fragment, useContext } from 'react';
import { H6, LI, UL } from '../../../../AbstractElements';
import { Border, Default, IconColor, SidebarSettings } from '../../../../Constant';
import CustomizerContext from '../../../../_helper/Customizer';

const SidebarSettingsClass = () => {
    const { addSidebarSettings } = useContext(CustomizerContext)

    const handleSidebarSetting = (e, type) => {
        e.preventDefault();
        document.querySelectorAll(".sidebar-setting li").forEach((item) => {
            item.classList.remove('active');
        });
        document.querySelector(".sidebar-wrapper").setAttribute('sidebar-layout', type);
        e.currentTarget.classList.add('active');
        addSidebarSettings(type);
    }

    return (
        <Fragment>
            <H6>{SidebarSettings}</H6>
            <UL attrUL={{ className: "sidebar-setting layout-grid flex-row" }}>
                <LI attrLI={{ className: "border-0 active", dataattr: "default-sidebar", onClick: (e) => handleSidebarSetting(e, "default-sidebar") }} >
                    <div className="header bg-light">
                        <ul>
                            <li></li><li></li><li></li>
                        </ul>
                    </div>
                    <div className="body bg-light">
                        <span className="badge bg-primary">{Default}</span>
                    </div>
                </LI>
                <LI attrLI={{ className: 'border-0', dataattr: "border-sidebar", onClick: (e) => handleSidebarSetting(e, "border-sidebar") }} >
                    <div className="header bg-light">
                        <ul>
                            <li></li><li></li><li></li>
                        </ul>
                    </div>
                    <div className="body bg-light">
                        <span className="badge bg-primary">{Border}</span>
                    </div>
                </LI>
                <LI attrLI={{ className: 'border-0', dataaattr: "iconcolor-sidebar", onClick: (e) => handleSidebarSetting(e, "iconcolor-sidebar") }} >
                    <div className="header bg-light">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div className="body bg-light">
                        <span className="badge bg-primary">{IconColor}</span>
                    </div>
                </LI>
            </UL>
        </Fragment >
    )
}

export default SidebarSettingsClass;