import React, { useEffect, useState } from 'react';
import Context from './index';

const WishListProvider = (props) => {
    const [wishlist, setWishList] = useState([]);

    useEffect(() => {
    }, [setWishList]);

    const addToWishList = (product) => {
        const productId = product.id;
        if (wishlist.findIndex((product) => product.id === productId) !== -1) {
            const wishlists = wishlist.reduce((wishAcc, product) => {
                if (product.id === productId) {
                    wishAcc.push({
                        ...product,
                    });
                } else {
                    wishAcc.push(product);
                }
                return wishAcc;
            }, []);
            return setWishList(wishlists);
        }

        setWishList((prev) => [...prev, { ...product }]);
    };

    const removeFromWhishList = (productId) => {
        setWishList(wishlist.filter((wish) => wish.id !== productId));
    };
    return (
        <Context.Provider
            value={{
                props,
                wishlist,
                addToWishList: addToWishList,
                removeFromWhishList: removeFromWhishList,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default WishListProvider;
