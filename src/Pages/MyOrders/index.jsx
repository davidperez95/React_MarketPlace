import { useContext } from "react";
import { Link } from "react-router-dom";
import { OrdersCard } from "../../Components/OrdersCard";
import { ShoppingCarContext } from "../../Context";
import { Layout } from "../../Components/Layout";

function MyOrders () {

    const context = useContext(ShoppingCarContext);

    return (
        <Layout>
            <div className="flex w-80 items-center relative justify-center mb-4">
                <h1 className="font-medium text-lg">My Orders</h1>
            </div>
                {
                    context.order.map((order, index) => (
                        <Link key={index} to={`/my-orders/${index}`}>
                            <OrdersCard 
                                totalPrice={order.totalPrice}
                                totalProducts={order.totalProducts}
                            />
                        </Link>
                    ))
                }
        </Layout>
    )
};

export { MyOrders };