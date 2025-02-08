import React, { Fragment } from 'react';
import { Image, H4, H6 } from '../../../../AbstractElements';

const Products = () => {
    return (
        <Fragment>
            <table className="product" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div className="product-box hover">
                                <div className="product border-theme br-0">
                                    <Image attrImage={{ src: `${require('../../../../assets/images/email-template/7.jpg')}`, alt: 'product', className: 'img-product' }} /></div>
                                <div className="product-info"><a href="#javascript" tabIndex="0">
                                    <H6>When an unknown.</H6></a>
                                    <H4>$45.00</H4>
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="product-box hover">
                                <div className="product border-theme br-0">
                                    <Image attrImage={{ src: `${require('../../../../assets/images/email-template/8.jpg')}`, alt: 'product', className: 'img-product' }} /></div>
                                <div className="product-info">
                                    <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div><a href="#javascript" tabIndex="0">
                                        <H6>When an unknown.</H6></a>
                                    <H4>$45.00</H4>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default Products;