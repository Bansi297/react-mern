import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";

const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
            <div className="bg-black p-5 text-white flex flex-wrap md:flex-nowrap items-center justify-between gap-4">
        {/* Logo */}
        <h1 className="text-2xl md:text-4xl flex-1 md:flex-none">My Store</h1>

        {/* Search Form */}
        <form onSubmit={searchHandler} className="flex-1 flex justify-center">
            <input
            onChange={(e) => setSearchVar(e.target.value)}
            className="w-full max-w-xs h-10 rounded-sm text-black px-3"
            type="search"
            name="search"
            placeholder="Search..."
            />
            <button className="ml-2 px-4 py-2 bg-white text-black rounded-sm">Search</button>
        </form>

        {/* Nav Links */}
        <div className="flex gap-6 flex-1 md:flex-none justify-end md:justify-between">
            <p>
            <NavLink to="/" className="hover:underline">Products</NavLink>
            </p>
            <p>
            <NavLink to="/cart" className="hover:underline">
                Cart <span className="text-sm bg-red-500 rounded-full px-2">{cart.length}</span>
            </NavLink>
            </p>
        </div>
        </div>

        </>
    )
}

export default Header;