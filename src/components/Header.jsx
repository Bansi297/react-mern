import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";

const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
<div className="bg-black p-4 text-white flex flex-col md:flex-row md:items-center md:justify-between space-y-6 md:space-y-0">
  {/* Title */}
  <h1 className="text-3xl sm:text-4xl text-center md:text-left">My Store</h1>

  {/* Search form */}
  <form
    onSubmit={searchHandler}
    className="flex flex-col sm:flex-row items-center w-full sm:w-auto space-y-3 sm:space-y-0 sm:space-x-3"
  >
    <input
      onChange={(e) => setSearchVar(e.target.value)}
      className="w-full sm:w-64 h-10 rounded-sm text-black px-3"
      type="search"
      name="search"
      placeholder="Search..."
    />
    <button className="w-full sm:w-auto bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">
      Search
    </button>
  </form>

  {/* Nav links */}
  <div className="flex flex-col sm:flex-row justify-center md:justify-end items-center space-y-2 sm:space-y-0 sm:space-x-6">
    <NavLink to="/" className="hover:underline">
      Products
    </NavLink>
    <NavLink to="/cart" className="hover:underline">
      Cart <span>({cart.length})</span>
    </NavLink>
  </div>
</div>


        </>
    )
}

export default Header;