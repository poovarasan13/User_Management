import React, { Fragment, useEffect } from "react";
import { H4, P } from "../../../AbstractElements";
import BannerOne from "./EmailTemp2/BannerOne";
import BannerTwo from "./EmailTemp2/BannerTwo";
import Header from "./EmailLayouts/Header";
import Products from "./EmailTemp2/Products";
import SliderClass from "./EmailTemp2/Slider";

const EmailTemp2 = () => {
    useEffect(() => {
        document.body.classList.add('body');
    })
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" className="email-temp2" >
                <tbody>
                    <tr>
                        <td>
                            <Header />
                            <SliderClass />
                            <H4 attrH4={{ className: "title treding-product" }} >trending product</H4>
                            <P attrPara={{ className: 'discount' }} >GET EVEN 25% OFF DISCOUNT</P>
                            <Products />
                            <BannerOne />
                            <BannerTwo />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default EmailTemp2;