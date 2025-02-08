import React, { Fragment } from "react";
import { Image } from '../../../../AbstractElements';

const Banners = () => {
    return (
        <Fragment>
            <table className="main-bg-light banner-class" border="0" cellpadding="0" cellspacing="0" width="100%"  >
                <tbody>
                    <tr>
                        <td height="45" className="banner-td" ></td>
                    </tr>
                    <tr className="add-with-banner" align="center">
                        <td><Image attrImage={{ src: `${require("../../../../assets/images/email-template/3.png")}` }} /></td>
                        <td>
                            <div data-border-bottom-color="Week Border" className="week-border"></div>
                            <a href="#javascript">
                                <div className="week-Heading" align="center" data-color="Week Heading" data-size="Week Heading" data-min="15" data-max="43">This Week's Sale </div>
                                <div className="Heading" align="center" data-color="Week Heading" data-size="Week Heading" data-min="15" data-max="45">Save Up To 50%</div>
                            </a>
                            <div data-border-bottom-color="Week Border" className="week-border"></div>
                        </td>
                    </tr>
                    <tr>
                        <td height="45" className="banner-td"></td>
                    </tr>
                </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" className="cosmetic">
                <tbody>
                    <tr align="center">
                        <td><a href="#javascript"><Image attrImage={{ src: `${require("../../../../assets/images/email-template/cosmetic.jpg")}`, className: 'img-banner' }} /></a></td>
                    </tr>
                </tbody>
            </table>
            <table border="0" cellpadding="0" cellspacing="0" width="100%" className="banner-table">
                <tbody>
                    <tr className="add-with-banner" align="center">
                        <td><a href="#javascript"><Image attrImage={{ src: `${require("../../../../assets/images/email-template/6.png")}`, className: 'img-banner' }} /></a></td>
                        <td><a href="#javascript"><Image attrImage={{ src: `${require("../../../../assets/images/email-template/5.png")}`, className: 'img-banner' }} /></a></td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Banners;