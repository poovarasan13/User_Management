import React, { Fragment } from 'react';
import { H5, P, Image } from '../../../../AbstractElements';
import { ecommerceData } from '../../../Common/Data/Pages';

const ProductList = () => {
    return (
        <Fragment>
            <table className="order-detail" border="0" cellpadding="0" cellspacing="0" align="left" >
                <tbody>
                    <tr align="left">
                        <th>PRODUCT</th>
                        <th>DESCRIPTION</th>
                        <th>QUANTITY</th>
                        <th>PRICE </th>
                    </tr>
                    {ecommerceData.map((item) =>
                        <tr key={item.id}>
                            <td><Image attrImage={{ src: `${require(`../../../../assets/images/${item.product}`)}`, alt: '', width: '80' }} /></td>
                            <td valign="top" >
                                <H5>{item.desc}</H5>
                            </td>
                            <td valign="top" >
                                <H5 attrH5={{ className: 'size-class' }}>Size : <span> {item.size}</span></H5>
                                <H5 attrH5={{ className: 'qty-class' }}>QTY : <span>{item.qty}</span></H5>
                            </td>
                            <td valign="top" >
                                <H5 attrH5={{ className: 'qty-class' }} ><b>${item.price}</b></H5>
                            </td>
                        </tr>
                    )}
                    <tr className="pad-left-right-space">
                        <td className="m-t-5" colspan="2" align="left">
                            <P>Subtotal : </P>
                        </td>
                        <td className="m-t-5" colspan="2" align="right"><b>$2000</b></td>
                    </tr>
                    <tr className="pad-left-right-space">
                        <td colspan="2" align="left">
                            <P>TAX :</P>
                        </td>
                        <td colspan="2" align="right"><b>$5</b></td>
                    </tr>
                    <tr className="pad-left-right-space">
                        <td colspan="2" align="left">
                            <P>VAT :</P>
                        </td>
                        <td colspan="2" align="right"><b>$5</b></td>
                    </tr>
                    <tr className="pad-left-right-space">
                        <td colspan="2" align="left">
                            <P>SHIPPING Charge :</P>
                        </td>
                        <td colspan="2" align="right"><b>$2</b></td>
                    </tr>
                    <tr className="pad-left-right-space">
                        <td colspan="2" align="left">
                            <P>Discount :</P>
                        </td>
                        <td colspan="2" align="right"><b> $1000</b></td>
                    </tr>
                    <tr className="pad-left-right-space">
                        <td className="m-b-5" colspan="2" align="left">
                            <P>Total :</P>
                        </td>
                        <td className="m-b-5" colspan="2" align="right"><b>$2600</b></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    );
};

export default ProductList;