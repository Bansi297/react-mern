import React, { useContext, useState } from "react";
import { maincontext } from "../App";
import { useNavigate } from "react-router-dom";

 

const Home =() => {
    let {products, addtocart,setsingleproduct} = useContext(maincontext);
    
    let Navigate = useNavigate();
    function productDetails(id){
        let product = products.find((x) =>x.id == id )
        setsingleproduct(product)
        console.log(product)
        Navigate('/product')
    }
    return(
        <>
          

                        // overflow: hidden;   for show products in same line
                        // display: -webkit-box;
                        // -webkit-line-clamp: 2;
                        // -webkit-box-orient: vertical;
               

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
            {products.map((x) => (
                <div
                key={x.id}
                className="p-4 border shadow-inner border-gray-300 rounded-lg flex flex-col justify-between"
                >
                <div onClick={() => productDetails(x.id)} className="cursor-pointer">
                    <img
                    className="h-40 w-full object-contain mb-2"
                    src={x.img}
                    alt={x.title}
                    />
                    <h1 className="line-clamp-2 font-medium text-lg">{x.title}</h1>
                    <h1 className="text-sm text-gray-700">₹{x.price}</h1>
                </div>
                <button
                    className="mt-3 p-2 bg-black text-white rounded-lg w-full hover:bg-gray-800"
                    onClick={() => addtocart(x.id)}
                >
                    Add to cart
                </button>
                </div>
            ))}
            </div>
        </>
    )
}

export default Home;