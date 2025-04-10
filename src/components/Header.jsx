import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";

const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
            <div className="bg-black p-4 sm:p-5 text-white">
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
    {/* Logo */}
    <h1 className="text-3xl sm:text-4xl text-center sm:text-left">My Store</h1>

    {/* Search Bar */}
    <form
      onSubmit={searchHandler}
      className="flex flex-col sm:flex-row items-center gap-2"
    >
      <input
        onChange={(e) => setSearchVar(e.target.value)}
        className="w-full sm:w-64 h-10 px-2 rounded-sm text-black"
        type="search"
        name="search"
        placeholder="Search products..."
      />
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-sm hover:bg-gray-300 transition"
      >
        Search
      </button>
    </form>

    {/* Nav Links */}
    <div className="flex justify-center sm:justify-end gap-6">
      <p>
        <NavLink to="/">Products</NavLink>
      </p>
      <p>
        <NavLink to="/cart">
          Cart <span className="text-yellow-400">({cart.length})</span>
        </NavLink>
      </p>
    </div>
  </div>
</div>


        </>
    )
}

export default Header;