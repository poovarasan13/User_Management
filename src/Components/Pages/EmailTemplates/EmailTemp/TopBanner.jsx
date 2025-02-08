import React, { Fragment } from "react";
import { Image } from '../../../../AbstractElements'

const TopBanner = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td><Image attrImage={{ src: `${require("../../../../assets/images/email-template/1.jpg")}`, alt: "" }} /></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default TopBanner;