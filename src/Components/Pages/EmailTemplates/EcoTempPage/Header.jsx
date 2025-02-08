import React, { Fragment } from "react";
import { P } from "../../../../AbstractElements";
import { EcomTempSVG } from "../../../Common/Data/SvgIcons";

const HeaderTable = () => {
    return (
        <Fragment>
            <table align="left" border="0" cellpadding="0" cellspacing="0" className='header-table'>
                <tbody>
                    <tr>
                        <td>
                            {/* className="sub-content" */}
                            <EcomTempSVG />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <P attrPara={{ className: 'p-title' }}><b>Hi John Doe,</b></P>
                            <P attrPara={{ className: 'p-inner' }} >Order Is Successfully Processsed And Your Order Is On The Way,</P>
                            <P attrPara={{ className: 'p-inner' }}>Transaction ID : 267676GHERT105467,</P>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default HeaderTable;