import React, {  useState , useRef, useEffect} from "react";
import axios from 'axios'
import Swal from 'sweetalert2' // npm i sweetalert2
import { Navigate, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Swiper , SwiperSlide} from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Aos from "aos";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../styles.css';
import 'aos/dist/aos.css'


const Register = () => {
    useEffect(() => {
        Aos.init()
    },[])
    let Navigate = useNavigate();
    let [user, setUser] = useState({
        name: '',
        email: '',
        profile: null,
        password: '',
    })
    function userValue(e) {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    function redirectLogin(){
        Navigate('/login');
    }
    function ImageValue(e){
        setUser({...user,profile: e.target.files[0]})
    }

    //   --- WITHOUT FILE---
    // async function HandleRegister(e) {      
    //     e.preventDefault()
    //     console.log(user)
    //     let result = await axios.post('http://localhost:9000/user/register', user)
    //     console.log(result)
    //     alert(result.data.message)
    //     Swal.fire({
    //         title: "Success",
    //         text: result.data.message,
    //         icon: "success",
    //         confirmButtonColor: "#ffe4e6"
    //       });
    // }


    // WITH FILE
    async function HandleRegister(e) {
        e.preventDefault()
        let formdata =  new FormData
        formdata.append('name', user.name)
        formdata.append('email', user.email)
        formdata.append('password', user.password)
        formdata.append('profile', user.profile)


        var users = JSON.parse(localStorage.getItem('Users')) || [];
        var userData = [{Username:document.getElementById("UserName").value},
        {Email:document.getElementById("EmailAddress").value},
        {Password:document.getElementById("PassWord").value},
        {Address:document.getElementById("Address1").value},
        {Phone:document.getElementById("PhoneNumber").value}];

        users.push(userData);
        localStorage.setItem('Users', JSON.stringify(users));

        console.log(user)
        let result = await axios.post('http://localhost:9000/api/user/register', formdata)
        console.log(result)
        alert(result.data.message)
        Swal.fire({
            title: "Success",
            text: result.data.message,
            icon: "success",
            confirmButtonColor: "#ffe4e6"
          });
    }

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  }
    return (
        <div>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper w-1/2 h-1/2"
      >
        
                <SwiperSlide>
                    <img src="https://www.cloudways.com/blog/wp-content/uploads/ecommerce-website-checklist-b-.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://cdn2.slidemodel.com/wp-content/uploads/8106-01-connected-network-world-map-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.quickeselling.com/wp-content/uploads/2021/01/stockfresh_7725590_business-desktop-with-credit-card_sizeXL-1.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://www.shoponcloud.com/images/site-specific/blog/electronics-e-commerce-industry.jpg" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://bloomidea.com/sites/default/files/styles/og_image/public/blog/Tipos%20de%20come%CC%81rcio%20electro%CC%81nico_0.png?itok=jC9MlQZq" alt="" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*34GfkhLFydPjZWUde1EzRg.jpeg" alt="" />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                </svg>
                <span ref={progressContent}></span>
                </div>
            </Swiper>

            {/* <div className="w-60 h-40 border-4 m-auto border-pink-400" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000">
            </div> */}

        <div className="min-h-screen bg-rose-50 p-5">
            <div className="bg-white  p-8  m-auto w-1/2 border rounded-md">
                <h1 className="text-2xl text-2xl font-bold mb-2">Register</h1>
                <form className="space-y-5" onSubmit={HandleRegister} encType="multipart/form-data">
                    <div>
                        <label className="block mb-1 font-bold text-sm  text-gray-500" htmlFor="">Name
                        </label>
                        <input type="text" onChange={userValue} name="name" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-sm  text-gray-500" htmlFor="">Image
                        </label>
                        <input type="file" onChange={ImageValue} name="profile" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div >
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Email
                        </label>
                        <input type="email" onChange={userValue} name="email" className="border-gray-200 p-2 border-2 rounded-md w-full"/>
                    </div>
                    <div>
                        <label className="block mb-1 font-bold text-sm text-gray-500" htmlFor="">Password
                        </label>
                        <input type="text" onChange={userValue} name="password" className="border-gray-200 border-2 p-2 rounded-md w-full"/>
                    </div>
                    <div className="">
                        <button className="p-2 block m-auto font-bold  border-gray-200 bg-rose-100 rounded-md">Sign Up</button>
                    </div>
                    <div className="">
                        {/* <p className="text-sm text-center">already have an account? <NavLink className="hover:text-pink-500" to={'/login'}> Sign in</NavLink></p> */}
                        <p className="text-sm text-center">already have an account? <span onClick={redirectLogin} className="hover:text-pink-500" to={'login'}> Sign in</span></p>
                    </div>
                </form>
            </div>

        </div>
        </div>
    )
}

export default Register