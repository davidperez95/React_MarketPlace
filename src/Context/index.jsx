import { createContext, useState, useEffect } from "react";

const ShoppingCarContext = createContext()

function ShoppingCarProvider ({ children }) {

    const [count, setCount] = useState(0);
    const [productToShow, setProductToShow] = useState({
        title: "",
        price: "",
        description: "",
        images: [],
    })
    const [cartProducts, setCartProducts] = useState([]);
    
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);
    
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    // Shopping cart - Order
    const [order, setOrder] = useState([]);

    //Get products from API - They are call items
    const [items, setItems] = useState(null);
    
    
    useEffect(() => {
        fetch("https://api.escuelajs.co/api/v1/products")
        .then(response => response.json())
        .then(data => setItems(data))
    }, [])
    
    //Search by value input
    const [searchByTitle, setSearchByTitle] = useState("");
    
    //Filtered items to render by the search input
    const [filteredItems, setFilteredItems] = useState(null);

    function filteredByTitle (items, searchByTitle) {
        return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()));
    };

    
    // Filtered items to render by category
    const [filterCategory, setFilterCategory] = useState("");
    const [filteredItemsByCategory, setFilteredItemsByCategory] = useState(null);
    
    function filteredByCategory (items, filterCategory) {
        return items?.filter((item) => item.category.name.toLowerCase().includes(filterCategory.toLocaleLowerCase()));
    }
    
    useEffect(() => {
        if (searchByTitle) setFilteredItems(filteredByTitle(items, searchByTitle));
        if (filterCategory) setFilteredItemsByCategory(filteredByCategory(items, filterCategory));
    }, [items, searchByTitle, filterCategory]);
/*     useEffect(() => {
        if (filterCategory) {
            setFilteredItemsByCategory(filteredByCategory(items, filterCategory));
        }
    }, [items, filterCategory]) */

    return (
        <ShoppingCarContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu,
            order, 
            setOrder,
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            filterCategory,
            setFilterCategory,
            filteredItemsByCategory,
            setFilteredItemsByCategory,
        }}>
            {children}
        </ShoppingCarContext.Provider>
    )
}

export { ShoppingCarContext, ShoppingCarProvider }