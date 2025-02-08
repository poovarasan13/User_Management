import React, { Fragment, useEffect } from "react";
import AddressClass from "./EcoTempPage/Address";
import HeaderTable from "./EcoTempPage/Header";
import ProductList from "./EcoTempPage/ProductList";
import Footer from "./EmailLayouts/Footer";

const EcommerceTemplates = () => {
    useEffect(() => {
        document.body.classList.add('body');
    })
    return (
        <Fragment >
            <div className='ecommerce-temp'>
                < table align='center' cellpadding="0" cellspacing="0" className="table-class" >
                    <tbody>
                        <tr>
                            <td>
                                <HeaderTable />
                                <AddressClass />
                                <ProductList />
                                <Footer />
                            </td>
                        </tr>
                    </tbody>
                </table >
            </div>
        </Fragment>
    )
}

export default EcommerceTemplates;