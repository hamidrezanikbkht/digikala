"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./section1.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function Section1() {
  const images = [
    "5d1dd95b9a98ab343a85b09c4dd0aff553cef013_1744552163.jpg",
    "14b6d5f993f25ead61bd24aa2937c5c6ccd0b86c_1745739951.jpg",
    "424bf590432067a1370441bcc6ee2b76a05c096d_1744010916.jpg",
    "5448b1157d3d8edea13e66fedf46024828408c04_1741705464.jpg",
    "4f5345308930f088b50a143b095258b2b68a4abe_1745675600.jpg",
    "50e6f10162fbacfd174b69bc92070852cf5c7bf9_1745837272.jpg",
  ];

  return (
    <div className="w-full mt-36 flex justify-center lg:mt-40 bg-[#333333]  ">
      <div className="swiper-container-wrapper">
       
        <Swiper
          slidesPerView={1}
          centeredSlides={false} 
          
          autoplay={{
            delay: 2500,
          }}
          pagination={{
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper1 h-[400px]  lg:rounded-bl-full lg:rounded-tr-full"
        >
          {images.map((src, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={src}
                alt={`Slide ${idx}`}
                className="w-full h-full bg-center object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
    </div>
  );
}
