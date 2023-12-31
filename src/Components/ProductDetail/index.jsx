import React, { useContext } from "react";
import { ShoppingCarContext } from "../../Context";
import { XMarkIcon } from "@heroicons/react/24/outline";
import "./productDetail.css"


function ProductDetail () {
    const context = useContext(ShoppingCarContext);

    return (
        <aside 
        className={`${context.isProductDetailOpen ? "flex" : "hidden"} product-detail flex-col fixed bg-white right-0 border border-black rounded-lg`}
        >
            <div className="flex justify-between items-center p-6">
                <h2 className="font-medium text-xl">Detail</h2>
                <button onClick={() => context.closeProductDetail()}>
                    <XMarkIcon className="w-6 h-6 text-black"/>
                </button>
            </div>
            <figure className="px-6">
                <img 
                    className="w-full h-full rounded-lg"
                    src={context.productToShow.images[0]} alt={context.productToShow.title} />
            </figure>
            <p className="flex flex-col p-6">
                <span className="font-medium text-2xl mb-2">${context.productToShow.price}</span>
                <span className="font-medium text-md">{context.productToShow.title}</span>
                <span className="font-light text-sm">{context.productToShow.description}</span>
            </p>
        </aside>
    )
};

export { ProductDetail };