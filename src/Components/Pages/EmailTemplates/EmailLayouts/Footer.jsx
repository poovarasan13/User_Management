import React, { Fragment } from "react";
import { H4, P } from "../../../../AbstractElements";

const Footer = () => {
    return (
        <Fragment>
            <table className="main-bg-light text-center top-0 footer" align="center" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tbody>
                    <tr>
                        <td className="td-class">
                            <div>
                                <H4 attrH4={{ className: "title" }} >Follow us</H4>
                            </div>
                            <table border="0" cellpadding="0" cellspacing="0" align="center" className="icons">
                                <tbody>
                                    <tr className="temp-social">
                                        <td><a href="https://www.facebook.com/"><i className="fa fa-facebook"></i></a></td>
                                        <td><a href="https://www.youtube.com"><i className="fa fa-youtube-play"></i></a></td>
                                        <td><a href="https://twitter.com/"><i className="fa fa-twitter"></i></a></td>
                                        <td><a href="https://accounts.google.com/"><i className="fa fa-google-plus"></i></a></td>
                                        <td><a href="https://www.linkedin.com"><i className="fa fa-linkedin"></i></a></td>
                                    </tr>
                                </tbody>
                            </table>
                            <div className="footer-div"></div>
                            <table border="0" cellpadding="0" cellspacing="0" width="100%" className="footer-desc">
                                <tbody>
                                    <tr>
                                        <td><a href="#javascript" className="emails">Want to change how you receive these emails?</a></td>
                                    </tr>
                                    <tr>
                                        <td>
                                            <P attrPara={{ className: "para" }} >2021 - 22 Copy Right by Themeforest powerd by Pixel Strap</P>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="#javascript" className="unsub">Unsubscribe</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default Footer;