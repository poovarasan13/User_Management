import React, { Fragment } from "react";
import { P, Image } from "../../../../AbstractElements";

const SliderClass = () => {
    return (
        <Fragment>
            <table className="slider" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <th align="center" width="40%">
                            <Image attrImage={{ src: `${require("../../../../assets/images/email-template/slider.jpg")}`, alt: "", className: "img-slide" }} />
                        </th>
                        <th className="title">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tbody>
                                    <tr>
                                        <td className="td-title">New Color</td>
                                    </tr>
                                    <tr>
                                        <td className="h2-white left pb20 td-desc">new <br />season</td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <P attrPara={{ className: 'para' }} >We are committed to your satisfaction with every order.</P>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="text-button white-button shopBtn" >
                                            <a href="#javascript" target="_blan" >
                                                <span>shop now</span></a></td>
                                    </tr>
                                </tbody>
                            </table>
                    </th>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default SliderClass;