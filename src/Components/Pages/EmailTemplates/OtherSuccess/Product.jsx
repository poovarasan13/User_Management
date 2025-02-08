import React, { Fragment } from "react";
import { H5, Image, H2 } from '../../../../AbstractElements';

const Products = () => {
    return (
        <Fragment>
            <table border="0" cellpadding="0" cellspacing="0">
                <tbody>
                    <tr>
                        <td>
                            <H2 attrH2={{ className: "title" }}>YOUR ORDER DETAILS</H2>
                        </td>
                    </tr>
                </tbody>
            </table>
            <table className="order-detail" border="0" cellpadding="0" cellspacing="0" align="left">
                <tbody>
                    <tr align="left">
                        <th>PRODUCT</th>
                        <th className="top-class">DESCRIPTION</th>
                        <th>QUANTITY</th>
                        <th>PRICE </th>
                    </tr>
                    <tr>
                        <td><Image attrImage={{ src: `${require("../../../../assets/images/email-template/4.png")}`, alt: "", width: "130" }} /></td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'desc-class' }}>Three seater Wood Style sofa for Leavingroom </H5>
                        </td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'size-class' }}>Size : <span> L</span></H5>
                            <H5 attrH5={{ className: 'qty-class' }}>QTY : <span>1</span></H5>
                        </td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'price-class' }}><b>$500</b></H5>
                        </td>
                    </tr>
                    <tr>
                        <td><Image attrImage={{ src: `${require("../../../../assets/images/email-template/1.png")}`, alt: "", width: "130" }} /></td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'desc-class' }}>Three seater Wood Style sofa for Leavingroom </H5>
                        </td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'size-class' }}>Size : <span> L</span></H5>
                            <H5 attrH5={{ className: 'qty-class' }}>QTY : <span>1</span></H5>
                        </td>
                        <td valign="top" className="top-class">
                            <H5 attrH5={{ className: 'price-class' }}><b>$500</b></H5>
                        </td>
                    </tr>
                    <tr>
                        <td colspan="2" className='product-class'>Products:</td>
                        <td className="price" colspan="3" ><b>$2600.00</b></td>
                    </tr>
                    <tr>
                        <td colspan="2" className="product-class" >Discount :</td>
                        <td className="price" colspan="3"><b>$10</b></td>
                    </tr>
                    <tr>
                        <td colspan="2" className="product-class">Gift Wripping: </td>
                        <td className="price" colspan="3" ><b>$2600</b></td>
                    </tr>
                    <tr>
                        <td className="product-class" colspan="2" >Shipping :</td>
                        <td className="price" colspan="3" ><b>$30</b></td>
                    </tr>
                    <tr>
                        <td className="product-class" colspan="2" >TOTAL PAID :</td>
                        <td className="price" colspan="3" ><b>$2600</b></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Products;