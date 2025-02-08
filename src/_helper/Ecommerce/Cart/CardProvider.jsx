import React, { useEffect, useState } from 'react';
import Context from './index';

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);
    useEffect(() => {
    }, [setCart]);

    const addToCart = (product, qty) => {
        const productId = product.id;
        if (cart.findIndex((product) => product.id === productId) !== -1) {
            const carts = cart.reduce((cartAcc, product) => {
                if (product.id === productId) {
                    cartAcc.push({
                        ...product,
                        qty: product.qty + 1,
                        sum: product.price * (product.qty + 1),
                    });
                } else {
                    cartAcc.push(product);
                }
                return cartAcc;
            }, []);

            return setCart(carts);
        }
        setCart((prev) => [
            ...prev,
            { ...product, qty: qty, sum: product.price * product.qty },
        ]);
    };

    const decrementQty = (productId) => {
        if (cart.findIndex((product) => product.id === productId) !== -1) {
            const carts = cart.reduce((cartAcc, product) => {
                if (product.id === productId) {
                    cartAcc.push({
                        ...product,
                        qty: product.qty - 1,
                        sum: product.price * (product.qty - 1),
                    });
                } else {
                    cartAcc.push(product);
                }
                return cartAcc;
            }, []);
            return setCart(carts);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter((item) => item.id !== productId));
    };

    return (
        <Context.Provider
            value={{
                ...props,
                cart,
                addToCart: addToCart,
                decrementQty: decrementQty,
                removeFromCart: removeFromCart,
            }}
        >
            {props.children}
        </Context.Provider>
    );
};

export default CartProvider;
