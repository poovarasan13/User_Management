import React, { Fragment } from "react";
import { Btn, H6, Image, P } from '../../../AbstractElements';
import BasicFooter from "./EmailLayouts/BasicFooter";

const BasicHeader = () => {
    return (
        <Fragment>
            <table className="basic-email">
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
                                                        <td><a href="/"><Image attrImage={{ className: "img-fluid", src: `${require("../../../assets/images/logo/logo.png")}`, alt: "" }} /></a></td>
                                                        <td className="desc"><span>Some Description</span></td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <table className="inner-page">
                                <tbody>
                                    <tr>
                                        <td>
                                            <H6  >Password Reset</H6>
                                            <P>you forgot your password for Cuba Admin. If this is true, click below to reset your password.</P>
                                            <P attrPara={{ className: 'btn-para' }}>
                                                <Btn attrBtn={{ className: 'action-class', color: 'primery' }}>Reset Password</Btn>
                                            </P>
                                            <P>If you have remember your password you can safely ignore his email.</P>
                                            <P>Good luck! Hope it works.</P>
                                            <P attrPara={{ className: 'para' }}>
                                                Regards,<br />Webiots Software</P>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <BasicFooter />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default BasicHeader;