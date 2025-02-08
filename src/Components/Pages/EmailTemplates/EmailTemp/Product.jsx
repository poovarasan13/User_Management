import React, { Fragment } from 'react';
import { H4, H6, Image } from '../../../../AbstractElements';
import { productData } from '../../../Common/Data/Pages';

const Products = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" className="sale-product">
                <thead>
                    <tr></tr>
                </thead>
                <tbody>
                    <tr>
                        {productData.map((item, i) =>
                            <td>
                                <div className="product-box hover">
                                    <div className="product border-theme br-0">
                                        <Image attrImage={{ src: `${require(`../../../../assets/images/${item.img}`)}`, alt: 'product', className: 'imgClass' }} /></div>
                                    <div className="product-info">
                                        {item.star ? <div className="rating"><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></div> : ''}
                                        <a href="#javascript" tabIndex="0" >

                                            <H6 >{item.title}</H6></a>
                                        <H4>{item.price}</H4>
                                    </div>
                                </div>
                            </td>
                        )}
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default Products;