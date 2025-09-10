'use client';
import Link from "next/link";
import { useState } from "react";
import { useAppContext } from "../context/context"; 

export default function ProductClient({ product }) {
  const { cartItems, addToCart ,setAdd } = useAppContext();

  const addToCartHandler = () => {
    
    const isProductInCart = cartItems.some(item => item.id === product.id);

    if (isProductInCart) {
      
      alert("شما این محصول را قبلاً انتخاب کرده‌اید");
    } else {
      addToCart(product);
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-24 mb-10 p-8   bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl text-white transition-all duration-300 hover:scale-105">
  
  <h1 className="text-3xl  mb-6 text-center text-teal-400 font-iran">{product.title_fa}</h1>

  <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
    <img
      src={product.images.main}
      alt={product.title_fa}
      className="w-full md:w-1/2 rounded-3xl shadow-lg transition-transform duration-300 hover:scale-105"
    />

    <div className="flex-1 flex flex-col gap-4 font-iran">
      <span className="text-lg hover:text-teal-300 transition-colors ">برند: {product.brand.title_fa}</span>
      <span className="text-lg hover:text-teal-300 transition-colors">
        وضعیت محصول: <strong>{product.properties?.warehouse_label || "ندارد"}</strong>
      </span>

      {product?.product_badges?.map((val) => (
        <div key={val.id} className="flex items-center gap-2 hover:scale-105 transition-transform duration-300">
          <img src={val.payload.svg_icon} alt="" className="w-6 h-6"/>
          <span className="text-sm font-iran">{val.payload.text}</span>
        </div>
      ))}

      {product.digiplus?.services?.length > 0 && (
        <div className="mt-2 flex flex-col gap-2">
          {product.digiplus.services.map((val, i) => (
            <span key={i} className="text-sm hover:text-teal-200 transition-colors">{val}</span>
          ))}
        </div>
      )}
    </div>
  </div>

  <div className="mt-8 flex flex-col md:flex-row items-center justify-center gap-4 font-iran ">
    <p className="text-2xl text-teal-300">{product.price?.rrp_price?.toLocaleString("fa-IR")} ریال</p>
    <button
      onClick={addToCartHandler}
      className="px-8 py-3 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full text-white  shadow-lg hover:scale-110 hover:from-teal-600 hover:to-blue-600 transition-transform duration-300"
    >
      افزودن به سبد خرید
    </button>
  </div>

  <p className="text-center mt-6">
    <Link href="/" className="text-neutral-300 hover:text-teal-300 hover:underline transition-colors">
      بازگشت
    </Link>
  </p>
</div>

  );
}
