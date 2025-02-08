import React, { Fragment } from "react";
import Products from "./OtherSuccess/Product";
import Header from './OtherSuccess/Header';
import Address from "./OtherSuccess/Address";
import Footer from './EmailLayouts/Footer';

const OtherSuccess = () => {
    return (
        <Fragment>
            <table align="center" border="0" cellpadding="0" cellspacing="0" className="other-success" >
                <tbody>
                    <tr>
                        <td>
                            <Header />
                            <Products />
                            <Address />
                            <Footer />
                        </td>
                    </tr>
                </tbody>
            </table>
        </Fragment>
    )
}

export default OtherSuccess;