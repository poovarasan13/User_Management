import React, { Fragment } from "react";
import { Btn, Image, P } from '../../../AbstractElements';
import BasicFooter from "./EmailLayouts/BasicFooter";

const BasicEmail = () => {
    return (
        <Fragment>
            <table className="basic-email" >
                <tbody>
                    <tr>
                        <td>
                            <table className="table-class">
                                <tbody>
                                    <tr>
                                        <td>
                                            <table className="inner-table">
                                                <tbody>
                                                    <tr>
                                                        <td>
                                                            <Image attrImage={{ src: `${require("../../../assets/images/logo/logo.png")}`, alt: "" }} />
                                                        </td>
                                                        <td className="desc"><span>Some Description</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <table className="inner-page">
                                                <tbody>
                                                    <tr>
                                                        <td >
                                                            <P>Hi There,</P>
                                                            <P>Sometimes you just want to send a simple HTML email with a simple design and clear call to action.</P>
                                                            <Btn attrBtn={{ className: 'action-class', color: 'primery' }}>Call To Action </Btn>
                                                            <P>This is a really simple email template. It's sole purpose is to get the recipient to click the button with no distractions.</P>
                                                            <P attrPara={{ className: 'para' }} >Good luck! Hope it works.</P>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <BasicFooter />
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment >
    )
}

export default BasicEmail;