'use client'
import React, { useState,useEffect } from 'react'

export default function Section4() {
    const [servercat,setservercat]=useState({})
      useEffect(() => {
    fetch("https://api.one-api.ir/digikala/v1/categories/", {
      headers: {
        accept: "application/json",
        "one-api-token": "908907:680a3be23f7a8"
      }
    })
    
      .then((res) => res.json())
      .then((data) => {
        setservercat(data);
        console.log(data);
        
      })
      .catch((err) => {
        console.error("خطا در دریافت داده‌ها:", err);
    
      });
  }, []);
  return (
    <div className='w-full flex flex-wrap justify-center items-center py-4 bg-[#333333] '>
        <div className='  lg:flex flex-wrap w-[75%]  lg:justify-between rounded-2xl   '>
            <figure className=' py-1 px-2  w-full lg:w-1/4  '><img className=' rounded-xl ' src="e02d45093f1821d5be48699f5de8da7b22de4b37_1745839856.jpg" alt="one.jpg" /></figure>
            <figure className=' py-1 px-2 w-full lg:w-1/4  '><img className=' rounded-xl ' src="a8abfc823711bcaf728a27a33d5ea991b815354d_1745840996.jpg" alt="gif" /></figure>
            <figure className=' py-1 px-2 w-full  lg:w-1/4 '><img className=' rounded-xl' src="21028e67b42b317c24adea34ab388ddcc1e45707_1745839819.jpg" alt="thre.jpg" /></figure>
            <figure className=' py-1 px-2  w-full  lg:w-1/4 '><img className=' rounded-xl' src="1a5b3d33bf7b5b65d8229d1e40b7d1255c018269_1745839698.jpg" alt="foor.jpg" /></figure>
        </div>

    </div>
  )
}
