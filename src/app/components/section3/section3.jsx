"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Link from "next/link";

export default function Section3({ global }) {
  return (
    <div
      className="w-full h-full text-center flex flex-wrap justify-center text-black font-sans text-sm m-0 p-0"
      style={{
        background: "linear-gradient(to bottom, #333333 0%, #ffffff 50%, #333333 100%)",
      }}
    >
      <p className="text-3xl w-[90%] px-2 rounded-3xl py-4 text-black led-text">
        <i className="bi bi-fire text-red-700 led-text-red font-[iransans]">
          داغ ترین چند ساعت گذشته
        </i>
      </p>
      <div className="lg:w-[75%] rounded-2xl mt-6">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-full py-10 mt-5 px-6 border-white rounded-4xl"
        >
          {global?.result?.trending?.products.map((val) => {
            return (
              <SwiperSlide
                key={val.id}
                className="!w-[250px] !h-[320px] bg-center bg-cover flex flex-wrap"
              >
                <Link href={`/product/${val.id}`}>
                  <img
                    width={100}
                    height={100}
                    src={val.images.main}
                    alt=""
                    className="w-full object-cover hover:scale-105 transition-all duration-150  rounded-4xl"
                    style={{
                      objectFit: "contain",
                      backgroundImage: `url(${val.images.main})`,
                    }}
                  />
                </Link>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
