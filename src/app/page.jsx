'use client';
import React, { useState, useEffect } from 'react';
import { useAppContext } from "./components/context/context";
import Section1 from './components/section1/section1';
import Section2 from './components/Section2/section2';
import Section3 from './components/section3/section3';
import Section4 from './components/section4/section4';
import Section5 from './components/section5/section5';
import Section6 from './components/section6/section6';
import Section7 from './components/section7/section7';

export default function Page() {
  const [global, setGlobal] = useState(null);
  const [loading, setLoading] = useState(true);
const {setApi}=useAppContext()
  useEffect(() => {
    fetch("https://api.one-api.ir/digikala/v1/home/", {
      headers: {
        accept: "application/json",
        "one-api-token": "908907:680a3be23f7a8"
      }
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("مشکل در دریافت داده‌ها");
        }
        return res.json();
      })
      .then((data) => {
        setGlobal(data);
        setApi(data)
        setLoading(false);
      })
      .catch((err) => {
        console.error("خطا در دریافت داده‌ها:", err);
        setLoading(false);
      });
  }, []);



  return (
    <main className="max-w-screen-2xl mx-auto 2xl:mx-auto flex flex-wrap justify-center overflow-hidden p-0 m-0 bg-[#333333]">
   
      <Section1 />
      <Section2 />
      <Section4 />
      <Section5 />
      <Section3 global={global} />
      <Section6 />
      <Section7 global={global} />
    </main>
  );
}
