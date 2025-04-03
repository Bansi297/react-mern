import React, { useContext, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';
import { maincontext } from '../App';

// Install Swiper modules
SwiperCore.use([Navigation]);

const ImageSwiper = () => {
    let {singleproduct} = useContext(maincontext)
  const swiperRef = useRef(null);

  const images = [
    { id: 1, src: 'image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    { id: 3, src: 'image3.jpg', alt: 'Image 3' },
  ];

  const handleImageClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index);
    }
  };
  return(
    <>
        <div className="flex flex-col justify-center items-center gap-3">
            <div>Flex Item 1</div>
            <div>Flex Item 2</div>
            <div>Flex Item 3</div>
        </div>

        <div className="inline-block w-full">Box 1</div>
        <div className="inline" >Box 2</div>

        <div className='text-center'>   {/* For inline or inline-block elements */}
            <span>Centered Text</span>
        </div>

        <div className="w-1/2 m-auto">  {/* For block-level elements  */}
            Centered Block
        </div>

        <div className="grid place-items-center h-96"> {/* works for horizontally and vertically */}
            Centered Element
        </div>

    </>
  )
  

//   return (
//     <div>
//           <div className="grid grid-cols-12 gap-10 px-40">
//                 <div className="col-span-6">
//                     <div className="py-4">
//                         <Swiper
//                             onSwiper={(swiper) => (swiperRef.current = swiper)}
//                             navigation
//                             spaceBetween={50}
//                             slidesPerView={1}
//                         >
//                                 <SwiperSlide key={1} ><img className="w-full h-80" src={singleproduct.img} alt="" /></SwiperSlide>
//                                 <SwiperSlide key={2} ><img className="w-full h-80" src={singleproduct.img2} alt="" /></SwiperSlide>
//                                 <SwiperSlide key={3} ><img className="w-full h-80" src={singleproduct.img3} alt="" /></SwiperSlide>
//                                 <SwiperSlide key={4} ><img className="w-full h-80" src={singleproduct.img4} alt="" /></SwiperSlide>
//                                 <SwiperSlide key={5} ><img className="w-full h-80" src={singleproduct.img5} alt="" /></SwiperSlide>
//                         </Swiper>
//                     </div>
//                     <div className="grid grid-cols-5 gap-2">
//                         <div className="items-center">
//                             <img className="w-max" key={1} onClick={() =>handleImageClick(0) } src={singleproduct.img} alt="" />
//                         </div>
//                         <div className="items-center">
//                             <img className="w-max" key={2} onClick={() =>handleImageClick(1) } src={singleproduct.img2} alt="" />
//                         </div>
//                         <div className="items-center">
//                             <img className="w-max" key={3} onClick={() =>handleImageClick(2) } src={singleproduct.img3} alt="" />
//                         </div>
//                         <div className="items-center">
//                             <img className="w-max" key={4} onClick={() =>handleImageClick(3) } src={singleproduct.img4} alt="" />
//                         </div>
//                         <div className="items-center">
//                             <img className="w-max" key={5} onClick={() =>handleImageClick(4) } src={singleproduct.img5} alt="" />
//                         </div>
//                     </div>
//                 </div>
//                 <div className="col-span-6">
//                     <h1>Details</h1>
//                 </div>
//             </div>
//     </div>
//   );
}

export default ImageSwiper;

