import React, { Fragment } from "react";
import { H5, Image, P } from '../../../../AbstractElements';

const Address = () => {
    return (
        <Fragment>
            <table className="address" cellpadding="0" cellspacing="0" border="0" align="left">
                <tbody>
                    <tr>
                        <td className="dilivery-add" >
                            <H5>DILIVERY ADDRESS</H5>
                            <P>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</P>
                        </td>
                        <td className="user-info" width="57" height="25">
                            <Image attrImage={{ src: `${require("../../../../assets/images/email-template/space.jpg")}`, alt: " ", height: "25", width: "20" }} />
                        </td>
                        <td className="shipping-add" >
                            <H5>SHIPPING ADDRESS</H5>
                            <P>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</P>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Address;