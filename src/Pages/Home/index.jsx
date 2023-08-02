import { useContext, useEffect } from "react";
import { ShoppingCarContext } from "../../Context";
import { Card } from "../../Components/Card";
import { Layout } from "../../Components/Layout";
import { ProductDetail } from "../../Components/ProductDetail";

function Home() {

    const context = useContext(ShoppingCarContext);

    const currentPath = window.location.pathname;
    let categoryTokens = currentPath.split("/");
    let lastCategory = categoryTokens.length - 1;
    let category = categoryTokens[lastCategory];

    useEffect(() => {
        if (category !== null) {
            context.setFilterCategory(category);
        }
        // return that cleans the states when one component is mounted
        // and the other is desmounted
        return () => {
            context.setFilterCategory(null)
        };
    }, [category])

    /* function renderView() {
        if (context.searchByTitle?.length > 0) {
            if (context.filteredItems?.length > 0) {
                return (
                    context.filteredItems?.map(item =>
                        <Card key={item.id} data={item}/>
                    )
                )
            } else {
                return (
                    <div>No results Found</div>
                )
            }
        } else {
            return (
                context.items?.map(item =>
                    <Card key={item.id} data={item}/>
                )
            )
        }
    } */

    function renderView() {
        let itemsToRender = []

        if (context.searchByTitle?.length > 0) {
            itemsToRender = context.filteredItems;
        } else if (context.filterCategory?.length > 0) {
            itemsToRender = context.filteredItemsByCategory;
        } else {
            itemsToRender = context.items;
        }

        if (itemsToRender?.length > 0) {
            return itemsToRender.map((item) => (
                <Card key={item.id} data={item}/>
            ));
        } else {
            return (
                <p>No Results Found</p>
            );
        };
    };

    /* function renderViewByCategory() {
        const itemsToRender = context.filterCategory?.length > 0 ? context.filteredItemsByCategory : context.items;


        if (itemsToRender?.length > 0) {
            return itemsToRender.map((item) => (
                <Card key={item.id} data={item}/>
            ));
        } else {
            return (
                <p>No results Found</p>
            )
        }
    } */

    return (
        <Layout>
            <div className="mb-4">
              <h1 className="font-medium text-lg">Home</h1>
            </div>
            <input
                type="text"
                placeholder="Search for a product"
                className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none"
                onChange={(event) => context.setSearchByTitle(event.target.value)}
            />
            <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
                {renderView()}
                {/* {renderViewByCategory()} */}
            </div>
            <ProductDetail />
        </Layout>
    )
};

export { Home };