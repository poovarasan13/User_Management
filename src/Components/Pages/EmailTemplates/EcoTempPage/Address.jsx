import React from 'react';
import { H5, P } from '../../../../AbstractElements';

const AddressClass = () => {
    return (
        <table cellpadding="0" cellspacing="0" border="0" align="left" className="add-class">
            <tbody>
                <tr>
                    <td>
                        <H5>Your Shipping Address</H5>
                        <P>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</P>
                    </td>
                    {/* <td><Image attrImage={{ src: `${require("../../../../assets/images/email-template/space.jpg")}`, alt: " ", height: "25", width: "30" }} /></td> */}
                    <td>
                        <H5>Your Billing Address:</H5>
                        <P>268 Cambridge Lane New Albany,<br /> IN 47150268 Cambridge Lane <br />New Albany, IN 47150</P>
                    </td>
                </tr>
            </tbody>
        </table>
    );
};

export default AddressClass;