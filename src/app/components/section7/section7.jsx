"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useAppContext } from "../context/context"; // استفاده از context برای دریافت جستجو

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./section7.css";

// لیست بخش‌ها
const sections = [
  "home_1",
  "home_2",
  "home_3",
  "home_4",
  "home_5",
  "home_6",
  "home_7",
  "home_8",
];

export default function Section7({ global }) {
  if (!global?.result) return null;

 
  const { searchText } = useAppContext();

  return (
    <div className="w-[95%] mx-auto bg-[#333333] flex flex-col gap-y-4 2xl:mx-auto">
      {sections.map((sectionKey) => {
        const section = global.result[sectionKey];
        const products = section?.products || [];
        const title = section?.title || "";
        
        const filteredProducts = products.filter((val) =>
          val?.title_fa?.toLowerCase().includes(searchText.toLowerCase()) 
        );

        if (filteredProducts.length === 0) return null; 

        return (
          <div key={sectionKey} className="w-full" id={sectionKey}>
            <h2 className="text-white text-3xl text-center py-4 font-extralight led-text-red mb-4 ">
              {title}
            </h2>
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              pagination={{ clickable: true }}
              navigation
              breakpoints={{
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 5 },
              }}
              className="custom-swiper neon-swiper rounded-2xl w-full transition-all duration-500 hover:scale-105"
              modules={[Pagination, Navigation]}
            >
              {filteredProducts.map((val) => {
                const image = val?.images?.main;
                const productTitle = val?.title_fa;
                const price = val?.price?.rrp_price;

                if (!image || !productTitle) return null; 

                return (
                  <SwiperSlide key={val.id}>
                    <Link href={`/product/${val.id}`}>
                      <div className="card-slide bg-white">
                        <img
                          src={image}
                          alt={productTitle}
                          className="w-full h-40 object-cover"
                        />
                        <div className="p-4 text-white text-sm">
                          <h3 className="font-bold mb-2">
                            {productTitle.length > 25
                              ? productTitle.slice(0, 25) + "..."
                              : productTitle}
                          </h3>
                          <p className="text-lg">
                            {price
                              ? (price / 10).toLocaleString("fa-IR") + " تومان"
                              : "اتمام موجودی"}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        );
      })}
    </div>
  );
}
