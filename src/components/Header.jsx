import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { maincontext } from "../App";

const Header =() => {
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);

    return(
        <>
            <div className='bg-black p-5 pl-20 items-center flex justify-between text-white'>
                <h1 className="text-4xl">My Store</h1>
                {/* <div> */}
                    <form onSubmit={searchHandler}>
                        <input onChange={(e) => setSearchVar (e.target.value)} className="w-64 h-10 rounded-sm text-black" type="search" name="search"/> <button >Search</button>
                    </form>
                {/* </div> */}
                
                <div className="gap-10 flex">
                <p><NavLink to={'/'}>Products</NavLink></p>
                <p><NavLink to={'cart'}>Cart<span>{cart.length}</span></NavLink></p>
                </div>
            </div>

        </>
    )
}

export default Header;