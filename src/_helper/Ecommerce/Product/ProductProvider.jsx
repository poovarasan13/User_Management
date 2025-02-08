import React, { useEffect, useState } from 'react';
import { ProductsApi } from '../../../api';
import Context from './index';
import axios from 'axios';


const ProductProvider = (props) => {
    const [productItem, setProductItem] = useState([]);
    const symbol = '$';
    // const [singleItem, setSingleItems] = useState([]);

    const fetchProducts = async () => {
        try {
            await axios.get(ProductsApi).then((resp) => {
                setProductItem(resp.data);
            });
        } catch (error) {
        }
    };
    // const getSingleItem = () => {
    //     // setSingleItems(productItem[0]);
    // };

    useEffect(() => {
        fetchProducts();
        // getSingleItem();
    }, [setProductItem]);

    return (
        <Context.Provider value={{ ...props, productItem, symbol }}>
            {props.children}
        </Context.Provider>
    );
};

export default ProductProvider;
