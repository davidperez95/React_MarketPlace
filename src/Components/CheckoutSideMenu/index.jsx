import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCarContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { OrderCard } from "../OrderCard";
import { totalPrice } from "../../Utils";
import "./styles.css"


function CheckoutSideMenu () {
    const context = useContext(ShoppingCarContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter(product => product.id !== id);
        context.setCartProducts(filteredProducts);
    }

    const handleCheckout = () => {
        const orderToAdd = {
            date: "01.01.01",
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        };

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
    }

    return (
        <aside 
        className={`${context.isCheckoutSideMenuOpen ? "flex" : "hidden"} checkout-side-menu flex-col fixed bg-white right-0 border border-black rounded-lg`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">My Order</h2>
                <button onClick={() => context.closeCheckoutSideMenu()}>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </button>
            </div>
            <div className="px-6 overflow-y-scroll flex-1">
                {
                    context.cartProducts.map(product => (
                        <OrderCard 
                            key={product.id}
                            id={product.id}
                            title={product.title}
                            imageUrl={product.images}
                            price={product.price}
                            handleDelete={handleDelete}
                        />
                    ))
                }
            </div>
            <div className="px-6 mb-6">
                <p className="flex justify-between items-center mb-2">
                    <span className="font-ligth">Total:</span>
                    <span className="font-medium text-2xl">${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to="/my-orders/last">
                    <button 
                        onClick={() => handleCheckout()}
                        className="bg-black w-full py-3 text-white rounded-lg"
                    >Checkout</button>
                </Link>
            </div>
        </aside>
    )
};

export { CheckoutSideMenu };