import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";

const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
            <div className="bg-black text-white px-4 py-3">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
    
    {/* Logo */}
    <h1 className="text-3xl text-center lg:text-left">My Store</h1>

    {/* Search Bar */}
    <form
      onSubmit={searchHandler}
      className="flex flex-col sm:flex-row items-center gap-2 w-full lg:w-auto"
    >
      <input
        onChange={(e) => setSearchVar(e.target.value)}
        className="w-full sm:w-64 h-10 px-3 text-black rounded-md"
        type="search"
        name="search"
        placeholder="Search products..."
      />
      <button
        type="submit"
        className="bg-white text-black px-4 py-2 rounded-md hover:bg-gray-300 transition"
      >
        Search
      </button>
    </form>

    {/* Navigation Links */}
    <div className="flex justify-center lg:justify-end gap-6 text-lg">
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