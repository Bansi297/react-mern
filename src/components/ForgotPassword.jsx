
import axios from "axios"
import React, { useState } from "react"
import Swal from "sweetalert2"


export const ForgotPassword = () => {
    let [user,setuser] = useState({email:''})
    let[newpass,setnewpass] = useState({})
    let [otpform, setotpform] = useState(false)
    let [email,setemail] = useState('')
    let [pwd,setpwd] = useState('')
    let [conpwd,setconfpwd] = useState('')
    let userValue = (e) => {
        setuser({...user, email: e.target.value })
        setemail(e.target.value)
    }
    let formhandle = async(e) => {
        e.preventDefault()
        console.log(user)
        let result = await axios.post('/api/user/forgotpwd', user)
        alert(result.data.message)
        if(result.data.success){
            Swal.fire({
                title: "Success",
                text: result.data.message,
                icon: "success",
                confirmButtonColor: "#ffe4e6"
              });
              setotpform(true)
        }
        
    }

    let passchange = async(e) => {
        setnewpass({ ...newpass, [e.target.name]:e.target.value})
        if(e.target.name == 'newPass'){
            setpwd(e.target.value)
        }
        if(e.target.name == 'conPass'){
            setconfpwd(e.target.value)
        }
    }

    let setPassword = async(e) => {
        e.preventDefault()
        if (pwd !== conpwd) {
            setError('Passwords do not match!');
          } else {
            let result = await axios.post('/api/user/confirmpwd',newpass)
            alert(result.data.message)
            if(result.data.success){
                Swal.fire({
                    title: "Success",
                    text: result.data.message,
                    icon: "success",
                    confirmButtonColor: "#ffe4e6"
                });
            alert('Password changed successfully!');
            // You can proceed to submit the form or do something else
          }
        
            //   setotpform(true)
        }
    }
    return (
        <>
             <div className="bg-rose-50 min-h-screen p-5">
                <div className="bg-white w-1/2 p-9 m-auto border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Forgot Password</h1>
                    <form className="space-y-5" onSubmit={formhandle}>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Email
                        </label>
                        <input type="email" onChange={userValue} name="email" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Get OTP</button>
                    </div>
                    </form>
                </div>
            </div>

            {otpform && <div className="bg-rose-50 min-h-screen p-5">
                <div className="bg-white w-1/2 p-9 m-auto border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Forgot Password</h1>
                    <form className="space-y-5" onSubmit={setPassword}>
                        <input name="email" value={email} type="hidden"/>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Enter OTP
                        </label>
                        <input type="text" onChange={passchange} name="otp" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">New Password
                        </label>
                        <input type="text" onChange={passchange} name="newPass" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div><div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Confirm Password
                        </label>
                        <input type="text" onChange={passchange} name="conPass" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Change Password</button>
                    </div>
                    </form>
                </div>
            </div>}
            


        </>
    )
}

