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
    <div className="max-w-2xl  mx-auto  bg-opacity-80 p-10 rounded-xl shadow-2xl backdrop-blur-lg  mt-60 mb-10   *:text-white"
     
    >
      <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">
        {product.title_fa}
      </h1>

      <figure className="w-full flex flex-wrap justify-center items-center gap-2 text-xl:">
        <img
          src={product.images.main}
          alt={product.title_fa}
          className="w-[40%] rounded-2xl mb-4"
        />
        <span className="w-full  hover:scale-110">برند : {product.brand.title_fa}</span>
        <div className="w-full  hover:scale-110">
          وضعیت محصول :{" "}
          <strong>{product.properties?.warehouse_label || "ندارد"}</strong>
        </div>

        {product?.product_badges?.map((val) => (
          <figure className="flex w-full gap-2" key={val.id}>
            <div className=" hover:scale-110">{val.payload.text}</div>
            <img className="w-[5%]" src={val.payload.svg_icon} alt="" />
          </figure>
        ))}

        <div className="w-full">
          {product.digiplus?.services?.map((val, i) => (
          <div className="py-2  hover:scale-110" key={i}>
              {val}
            </div>
          ))}
        </div>
      </figure>

     
      <div className="mt-8 text-center flex flex-wrap gap-y-4 justify-center  font-semibold text-white">
          <p className="text-2xl w-full">{product.price?.rrp_price?.toLocaleString("fa-IR")}{' '}ریال  </p>
         <button onClick={addToCartHandler} className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-500 text-white font-semibold rounded-full shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-gradient-to-r hover:from-teal-600 hover:to-blue-600">
          افزودن به سبد خرید 
          </button> </div>
      
      
     

      <p className="text-center mt-4">
        <Link href="/" className="text-neutral-200 hover:underline">
          بازگشت
        </Link>
      </p>
    </div>
  );
}
