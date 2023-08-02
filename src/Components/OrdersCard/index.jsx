import { ChevronRightIcon } from "@heroicons/react/24/outline";

function OrdersCard (props) {
    const { totalPrice, totalProducts } = props;
    let pluralArticles = totalProducts === 1 ? "Article" : "Articles";

    // totalProducts > 1 ? pluralArticles = "Articulos" : pluralArticles = "Articulo";

    return (
        <div className="flex justify-between items-center border border-black w-80 p-4 rounded-lg mb-4 w-full">
                <div className="flex flex-col">
                    <span className="font-ligth">01.01.01</span>
                    <span className="font-light">{totalProducts} {pluralArticles}</span>
                </div>
                <div className="flex items-center gap-2">
                    <span className="font-medium text-2xl">${totalPrice}</span>
                    <ChevronRightIcon className="h-6 w-6 text-black cursor-pointer"/> 
                </div>
        </div>
    )
};

export { OrdersCard };