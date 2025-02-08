import React, { Fragment } from "react";
import { Image, LI, UL } from '../../../../AbstractElements';

const Header = () => {
    const menulist = ['Home', 'Whishlist', 'My Cart', 'Contact']
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr className="header">
                        <td align="left" valign="top">
                            <Image attrImage={{ className: "main-logo", src: `${require("../../../../assets/images/logo/logo.png")}` }} /></td>
                        <td className="menu" align="right">
                            <UL attrUL={{ className: 'flex-row' }}>
                                {menulist.map(element =>
                                    <LI attrLI={{ className: 'li-class' }}>
                                        <a href="#javascript">{element}</a></LI>
                                )}
                            </UL>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Header;