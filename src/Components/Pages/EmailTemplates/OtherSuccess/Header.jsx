import React, { Fragment } from 'react';
import { SuccessSVG } from '../../../Common/Data/SvgIcons';
import { H2, H6, Image, LI, P, UL } from '../../../../AbstractElements';

const Header = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" className="header-success">
                <tbody>
                    <tr>
                        <td><Image attrImage={{ src: `${require('../../../../assets/images/email-template/delivery.png')}`, alt: '', className: 'delivery-img' }} /></td>
                    </tr>
                    <tr>
                        <td>
                            <SuccessSVG />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <H2 attrPara={{ className: 'title' }} >thank you</H2>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <P attrPara={{ className: 'para' }} >Payment Is Successfully Processsed And Your Order Is On The Way</P>
                            <P attrPara={{ className: 'para' }}>Transaction ID:267676GHERT105467</P>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="div-class"></div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <H2 attrH2={{ className: 'order-deliver' }} >order delivered</H2>
                            <UL attrUL={{ className: 'deliver-status' }} >
                                <LI attrLI={{ className: 'order-li' }}>
                                    <div className="order-icon active"><i className="fa fa-check"></i></div>
                                    <H6>order confirmed</H6>
                                </LI>
                                <LI attrLI={{ className: 'order-li' }}>
                                    <div className="order-icon active"><i className="fa fa-check"></i></div>
                                    <H6>order shipped</H6>
                                </LI>
                                <LI attrLI={{ className: 'order-li' }}>
                                    <div className="order-icon"><i className="fa fa-check"></i></div>
                                    <H6>out for delivery</H6>
                                </LI>
                                <LI attrLI={{ className: 'order-li' }}>
                                    <div className="order-icon"><i className="fa fa-check"></i></div>
                                    <H6>out delivered</H6>
                                </LI>
                            </UL>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default Header;