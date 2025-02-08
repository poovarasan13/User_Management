import React, { Fragment } from 'react';
import { H3, Image } from '../../../../AbstractElements';
import Footer from '../EmailLayouts/Footer';

const BannerTwo = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" className="product">
                <tbody>
                    <tr>
                        <td align="center">
                            <table className="display-width-inner" align="center banner" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                <tbody>
                                    <tr>
                                        <td align="center" >
                                            <Image attrImage={{ src: `${require('../../../../assets/images/email-template/10.jpg')}`, alt: '', className: 'banner-img' }} /></td>
                                        <td align="center" className="banner-title" >
                                            <H3 >Product One</H3>
                                            <div className='banner-price' >
                                                <span className="txt-price1" data-color="Price1" data-size="Price1" data-min="10" data-max="35">
                                                    <strike>$25.00</strike></span><span className="txt-price2">   </span>$20.90</div>
                                            <div className='banner-dic'>
                                                <a href="#javascript" >SHOP NOW</a></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="display-width-inner banner" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                <tbody>
                                    <tr>
                                        <td align="center" className="banner-title">
                                            <H3>Product One</H3>
                                            <div className="bnner-price">
                                                <span className="txt-price1" data-color="Price1" data-size="Price1" data-min="10" data-max="35">
                                                    <strike>$25.00</strike></span><span className="txt-price2">   </span>$20.90</div>
                                            <div className="banner-dic" >
                                                <a href="#javascript">SHOP NOW</a></div>
                                        </td>
                                        <td align="center">
                                            <Image attrImage={{ src: `${require('../../../../assets/images/email-template/11.jpg')}`, alt: '', className: 'banner-img' }} /></td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="display-width-inner banner" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" >
                                <tbody>
                                    <tr>
                                        <td align="center">
                                            <Image attrImage={{ src: `${require('../../../../assets/images/email-template/12.jpg')}`, alt: '', className: 'banner-img' }} /></td>
                                        <td align="center" className="banner-title">
                                            <H3>Product One</H3>
                                            <div className="bnner-price">
                                                <span className="txt-price1" data-color="Price1" data-size="Price1" data-min="10" data-max="35">
                                                    <strike>$25.00</strike></span><span className="txt-price2">   </span>$20.90</div>
                                            <div className="bnner-dic">
                                                <a href="#javascript" >SHOP NOW</a></div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="main-bg-light text-center top-0" align="center" border="0" cellpadding="0" cellspacing="0" width="100%"></table>
                        </td>
                    </tr>
                </tbody>
                <Footer />
            </table>
        </Fragment>
    );
};

export default BannerTwo;