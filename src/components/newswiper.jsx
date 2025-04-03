import React, { useContext , useRef, useState} from "react";
import { maincontext } from "../App";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles.css';
import { Navigation } from 'swiper/modules';
import SwiperCore from 'swiper/core';

const ProductDetails = () => {
SwiperCore.use([Navigation]);

    const swiperRef = useRef(null);
    const setimgshow = (index) => {
        if (swiperRef.current) {
          swiperRef.current.slideTo(index);
        }
      };
    let {singleproduct} = useContext(maincontext)
    // let [imgshow , setimgshow] = useState(singleproduct.img)



    return(
        <div>
            <div className="grid grid-cols-12 gap-5 px-40">
                <div className="col-span-6">
                    <div className="py-3">
                    <Swiper  onSwiper={(swiper) => (swiperRef.current = swiper)}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        className="swiper-container">
                        <SwiperSlide><img className="w-full h-80" src={singleproduct.img} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="w-full h-80" src={singleproduct.img2} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="w-full h-80" src={singleproduct.img3} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="w-full h-80" src={singleproduct.img4} alt="" /></SwiperSlide>
                        <SwiperSlide><img className="w-full h-80" src={singleproduct.img5} alt="" /></SwiperSlide>
                    </Swiper>
                         
                    </div>
                    <div className="grid grid-cols-5 gap-2">
                        <div className="items-center">
                            <img className="w-max" onClick={() =>setimgshow(0) } src={singleproduct.img} alt="" />
                        </div>
                        <div className="items-center">
                            <img className="w-max" onClick={() =>setimgshow(1) } src={singleproduct.img2} alt="" />
                        </div>
                        <div className="items-center">
                            <img className="w-max" onClick={() =>setimgshow(2) } src={singleproduct.img3} alt="" />
                        </div>
                        <div className="items-center">
                            <img className="w-max" onClick={() =>setimgshow(3) } src={singleproduct.img4} alt="" />
                        </div>
                        <div className="items-center">
                            <img className="w-max" onClick={() =>setimgshow(4) } src={singleproduct.img5} alt="" />
                        </div>
                    </div>
                
                </div>
                <div className="col-span-6">
                    <h1>Product Details</h1>
                </div>
            </div>
        </div>
    )
}
 export default ProductDetails;


//  code that chatgpt showed me

//  import React, { useRef } from 'react';
//  import { Swiper, SwiperSlide } from 'swiper/react';
//  import 'swiper/swiper-bundle.css';
//  import SwiperCore, { Navigation } from 'swiper';
 
//  // Install Swiper modules
//  SwiperCore.use([Navigation]);
 
//  const ImageSwiper = () => {
//    const swiperRef = useRef(null);
 
//    const images = [
//      { id: 1, src: 'image1.jpg', alt: 'Image 1' },
//      { id: 2, src: 'image2.jpg', alt: 'Image 2' },
//      { id: 3, src: 'image3.jpg', alt: 'Image 3' },
//    ];
 
//    const handleImageClick = (index) => {
//      if (swiperRef.current) {
//        swiperRef.current.slideTo(index);
//      }
//    };
 
//    return (
//      <div>
//        <Swiper
//          onSwiper={(swiper) => (swiperRef.current = swiper)}
//          navigation
//          spaceBetween={50}
//          slidesPerView={1}
//        >
//          {images.map((image, index) => (
//            <SwiperSlide key={image.id}>
//              <img src={image.src} alt={image.alt} />
//            </SwiperSlide>
//          ))}
//        </Swiper>
 
//        <div className="thumbnail-container">
//          {images.map((image, index) => (
//            <img
//              key={image.id}
//              src={image.src}
//              alt={image.alt}
//              onClick={() => handleImageClick(index)}
//              style={{ width: '100px', cursor: 'pointer', margin: '5px' }}
//            />
//          ))}
//        </div>
//      </div>
//    );
//  };
 
//  export default ImageSwiper;
 