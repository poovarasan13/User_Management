import React, { Fragment } from "react";
import Banners from "./EmailTemp/Banners";
import Products from "./EmailTemp/Product";
import TopBanner from "./EmailTemp/TopBanner";
import Header from "./EmailLayouts/Header";
import { H4, H5 } from "../../../AbstractElements";
import Footer from "./EmailLayouts/Footer";

const EcommerceEmail = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" className='email-temp2'>
                <tbody>
                    <tr>
                        <td>
                            <Header />
                            <TopBanner />
                            <H4 attrH4={{ className: "title" }} >Additional 50% Off</H4>
                            <H5 attrH5={{ className: 'desc' }}>On clothes for kids,women & Mens Wear</H5>
                            <Products />
                            <Banners />
                            <Footer />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default EcommerceEmail;