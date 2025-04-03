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
            <div className="grid grid-cols-4 border-blue ">
                {products.map((x) => {

                        // overflow: hidden;   for show products in same line
                        // display: -webkit-box;
                        // -webkit-line-clamp: 2;
                        // -webkit-box-orient: vertical;
                    return <div className="p-5 border shadow-inner m-1 border-2 rounded-lg border-black-900">
                        <div onClick={() => productDetails(x.id)}>
                            <img className="h-[150px]" src={x.img} alt="" />
                            <h1 className="line-clamp-2">{x.title}</h1>  
                            <h1>{x.price}</h1>
                        </div>
                        <button className="p-2 bg-black text-white rounded-lg w-full" onClick={() => addtocart(x.id)} >Add to cart</button>
                    </div>
                }) }
            </div>
        </>
    )
}

export default Home;