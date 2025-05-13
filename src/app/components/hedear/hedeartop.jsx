"use client";

import React, { useEffect, useState } from "react";
import Sabad from "../sabad/sabad";
import { useAppContext } from "../context/context";
import Link from "next/link";

export default function Hedeartop() {
  const { setSearchText } = useAppContext();
  const [inputValue, setInputValue] = useState("");
  const [showSabad, setShowSabad] = useState(false);
  const [menu, setmenu] = useState(false);
  const [input, setinput]=useState(false)
  const { api } = useAppContext();
    const handleSearchChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setSearchText(value); 
  };
  const home = [
    "home_1",
    "home_2",
    "home_3",
    "home_4",
    "home_5",
    "home_6",
    "home_7",
    "home_8",
  ];

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    console.log("scrollY:", scrollTop);
     if (scrollTop > 1700) {
      setinput(true); 
    } else {
      setinput(false); 
    }
  
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className="w-full flex justify-between px-4 py-3  bg-white">
      <div className="flex gap-4 items-center transform transition-all duration-200">
        <figure className="w-[150px] flex justify-center items-center">
          <img src="/logo digikala.svg" alt="Logo Digikala" />
        </figure>

        <input
          type="text"
          className={`  bg-[#380b0b] text-white px-4 py-3 w-[200px] hidden lg:flex lg:w-[600px] rounded-md transform transition-all duration-300 ${input?" opacity-100":" opacity-0"}`}
          placeholder="🔍 جستجو ...."
            value={inputValue}
          onChange={handleSearchChange}
        />
      </div>

      <div className="flex items-center cursor-pointer gap-x-12  lg:gap-x-10 relative">
        <i
          onClick={() => {
            setShowSabad((prev) => !prev), setmenu();
          }} // تغییر وضعیت
          className="bi bi-cart scale-125 relative"
        ></i>
        <Sabad showSabad={showSabad} setShowSabad={setShowSabad} />
        <div>
          <i
            className="bi bi-list text-3xl text-[#a4a6aa] relative "
            onClick={() => {
              setmenu((p) => !p), setShowSabad(showSabad && !showSabad);
            }}
          ></i>
        </div>
      </div>
     <div
  className={`fixed  z-50 right-1 h-[400px] overflow-auto scrollbar-thin w-80 max-w-[90%] transition-all duration-300 ease-in-out transform backdrop-blur-md ${
    menu
      ? "top-36 lg:top-40 opacity-100 translate-y-0 scale-100"
      : "top-32 opacity-0 -translate-y-8 scale-95 pointer-events-none"
  }`} style={{ direction: "rtl", overflowY: "scroll" }}
>
 

        {home.map((key, index) => {
          const itm = api?.result?.[key];
          if (!itm) return null;

          return (
            <div
              key={index}
              className="flex flex-wrap w-full px-5 py-3 hover:bg-white bg-white/80 dark:bg-gray-800/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 mb-4 border border-gray-200 backdrop-blur-sm"
            >
              <a href={`#${key}`} onClick={() => setmenu(false)}>
                <div className="w-full text-gray-900 dark:text-white font-semibold text-base tracking-wide ">
                  {itm.title}
                </div>
              </a>
              
            </div>
          );
        })}
       <Link href="/about" onClick={() => setmenu(false)}> <div className="flex flex-wrap w-full px-5 py-3 hover:bg-white bg-red-300 dark:bg-gray-800/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 mb-4 border  backdrop-blur-sm">درباره ما </div></Link>
       <Link href="/help" onClick={() => setmenu(false)}> <div className="flex flex-wrap w-full px-5 py-3 hover:bg-white bg-red-300 dark:bg-gray-800/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 mb-4 border  backdrop-blur-sm">سوالی دارید ؟</div></Link>
      </div>
    </div>
  );
}
