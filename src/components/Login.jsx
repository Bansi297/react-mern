import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { maincontext } from "../App";
import axios from "axios";
import Swal from 'sweetalert2';

const Login =() => {
    let Navigate = useNavigate()
    const {cart,setSearchVar,searchHandler} =useContext(maincontext);
    let [users, setusers] = useState({email: '', password: ''})
    function userValue(e){
        setusers({...users, [e.target.name]: e.target.value})
    }
    async function formhandle(e){
        e.preventDefault()
        // let result = await axios.post('/api/user/login',users)
        // let title,icon
        // console.log(result.data)
        // if(result.data.success){
        //     title = "Success"
        //     icon = "success"
        // }else{
        //    title = "Fail"
        //     icon = "error"
        // }
        // console.log(icon)
        // Swal.fire({
        //     title: title,
        //     text: result.data.message,
        //     icon: icon,
        //     confirmButtonColor: "#ffe4e6"
        //   });
            Swal.fire({
                    title: "Success",
                    text: "Login Successful!!",
                    icon: "success",
                    confirmButtonColor: "#ffe4e6"
                  });
          Navigate('/home')
        setusers({email:'',password:''})
    }
    function forgotPassword(){
        Navigate('/forgotPassword')
    }
    return(
        <>
            <div className="bg-rose-50 min-h-screen p-5">
                <div className="bg-white w-1/2 p-9 m-auto border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Log In</h1>
                    <form className="space-y-5" onSubmit={formhandle}>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Email
                        </label>
                        <input type="email" value={users.email} onChange={userValue} name="email" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Password
                        </label>
                        <input type="text" value={users.password} onChange={userValue} name="password" className="border-gray-200 border-2 p-2 rounded-md w-full"/>
                    </div>
                    
                    <div className="text-sm flex items-center">
                        <input className="w-4 h-4 mr-4 text-pink-200 border border-pink-500" type="checkbox" name="keepSignIn" />Keep me signed in
                    </div>
                    <div className="">
                         <span onClick={forgotPassword} className="hover:text-pink-500 text-sm" to={'login'}>Forgot password?</span>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Sign In</button>
                    </div>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login;