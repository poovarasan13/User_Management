import React, { Fragment } from "react";
import { P } from "../../../../AbstractElements";

const BasicFooter = () => {
    return (
        <Fragment>
            <table className="footer">
                <tbody>
                    <tr>
                        <td>
                            <P attrPara={{ className: 'para' }} >333 Woodland Rd. Baldwinsville, NY 13027</P>
                            <P attrPara={{ className: 'para' }}>Don't Like These Emails?<a href="#javascript" style={{ color: "#24695c" }}>Unsubscribe</a></P>
                            <P attrPara={{ className: 'para' }}>Powered By Cuba Admin</P>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default BasicFooter;