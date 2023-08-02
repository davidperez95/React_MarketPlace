import { useContext } from "react";
import { NavLink } from "react-router-dom"
import { ShoppingCarContext } from "../../Context";

import { ShoppingCartIcon } from "@heroicons/react/24/outline";

function Navbar () {

    const context = useContext(ShoppingCarContext);

    const activeStyle = "underline underline-offset-4";

    return (
        <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-sm font-light top-0">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to={"/"}>
                        Shopi
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/shoes"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Shoes
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/electronics"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/furniture"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Furniture
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/toys"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/others"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>
            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    daperezcruz@gmail.com
                </li>
                <li>
                    <NavLink to={"/my-orders"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/my-account"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/sign-in"} className={({ isActive }) => isActive ? activeStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className="flex">
                    <ShoppingCartIcon className="w-4 h-4 m-1"/>{context.count}
                </li>
            </ul>
        </nav>
    )
};

export { Navbar };