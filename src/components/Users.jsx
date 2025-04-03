import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import UserEdit from "./userEdit";
import Swal from 'sweetalert2'

const Users = () => {
    let[user,setuser] = useState({name: '' , email : '', profile: ''})
    let [users,setUsers] = useState([])
    let[showform,setshowform] = useState(false)
    let getallUsers = async() => {
        let users =  await axios.get('http://localhost:9000/users')
        console.log(users)
        setUsers(users.data)
    }
    useEffect(() => {
        getallUsers()
    },[])

    let updateUser = (userdata) => {
        setuser(userdata)
        setshowform(true)
    }
    let deleteuser = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "you want to delete this user?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then(async(result) => {
            if (result.isConfirmed) {
                let response =  await axios.delete(`http://localhost:9000/user/delete/${id}`)
                Swal.fire({
                    title: "Success",
                    text: response.data.message,
                    icon: "success",
                    confirmButtonColor: "#ffe4e6"
                  });
            }
          });
          getallUsers()
    }

     return(
        <>
            <div >
                <table className="border border-2 w-full">
                    <thead>
                    <tr className="text-center">
                        <th className="border border-2 p-3">Name</th>
                        <th className="border border-2 p-3">Email</th>
                        <th className="border border-2 p-3">Profile</th>
                        <th className="border border-2 p-3">Edit</th>
                        <th className="border border-2 p-3">Delete</th>
                    </tr>
                    </thead>
                    <tbody className="text-center border border-2">
                        {
                            users.length ? users.map((x) => {
                                
                              return  <tr className="">
                                    <td className="border border-2 p-3 " >{x.name}</td>
                                    <td className="border border-2 p-3">{ x.email}</td>
                                    {/* <td className="border border-2 p-3 w-52 h-20"><img src={x.profile} alt="" /></td> */}
                                    <td className="border border-2 p-3 w-52 h-20"><img src={x.profile.img} alt="" /></td>
                                    <td className="border border-2 p-3 cursor-pointer" onClick={()=>updateUser(x)} >Edit</td>
                                    <td className="border border-2 p-3 cursor-pointer" onClick={()=>deleteuser(x._id)}>Delete</td>
                                </tr>

                            }): 'No data found!'
                        }
                        </tbody>
                </table>
            
            {
                showform && <UserEdit getallUsers={getallUsers} setshowform={setshowform} user={user} setuser={setuser}/>
            }
            </div>
        </>
     )
}

export default Users