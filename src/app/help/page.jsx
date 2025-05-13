"use client";
import React, { useState } from "react";

export default function Page() {
  const [activeIndex, setActiveIndex] = useState(null);

const c = [
  {
    title: "چگونه می‌توانم سفارشم را پیگیری کنم؟",
    titlef:
      "پس از ثبت سفارش، می‌توانید از طریق بخش «پیگیری سفارش» در پنل کاربری یا با وارد کردن کد رهگیری در صفحه اصلی سایت، وضعیت سفارش خود را مشاهده کنید.",
  },
  {
    title: "سیاست بازگشت کالا چگونه است؟",
    titlef:
      "شما ۷ روز فرصت دارید تا در صورت عدم رضایت از کالا، آن را مرجوع کنید. کالا باید در شرایط اولیه و بدون استفاده باشد.",
  },
  {
    title: "روش‌های پرداخت چه هستند؟",
    titlef:
      "می‌توانید از طریق درگاه بانکی، کیف پول دیجی‌کالا، پرداخت در محل و یا اقساط خرید خود را انجام دهید.",
  },
  {
    title: "زمان ارسال سفارشات چقدر است؟",
    titlef:
      "در تهران ۲۴ ساعت و در سایر شهرها بین ۲ تا ۳ روز کاری زمان می‌برد. امکان ارسال فوری برای برخی محصولات وجود دارد.",
  },
  {
    title: "چگونه حساب کاربری ایجاد کنم؟",
    titlef:
      "با وارد کردن شماره موبایل و دریافت کد تأیید می‌توانید در کمتر از ۱ دقیقه حساب کاربری ایجاد کنید.",
  },
];


  return (
    <div
      className="mt-36 py-8  flex flex-wrap"
      style={{ backgroundImage: "url(/low-poly-grid-haikei.svg)" }}
    >
      <div className="w-full flex justify-center text-5xl text-white flex-wrap  font-bold">
        سوالات متداول
      </div>
      <div className="w-full flex justify-center text-2xl flex-wrap mb-4 text-white py-4">
        پاسخ به پرسش‌های پرتکرار شما
      </div>

      <section className="w-full flex flex-wrap justify-center">
        <div className="w-full flex justify-center ">
          <div className="lg:w-[50%] w-[90%]  flex flex-col gap-y-10  backdrop-blur-2xl overflow-hidden">
            {c.map((val, index) => (
              <div
                key={index}
                onClick={() =>
                  setActiveIndex(activeIndex === index ? null : index)
                }
                className={`transition-all duration-300 flex text-xl  text-center justify-between flex-wrap cursor-pointer  p-3 my-7 shadow-2xl ${
                  activeIndex === index ? "lg:h-28 h-40" : "h-10"
                } overflow-hidden`}
              >
                <div className="lg:text-black text-white">{val.title}</div>
                <span className={`transform rotate-90 text-2xl text-white ${activeIndex===index?"rotate-[270deg]":"rotate-90"}`}>{">"}</span>
                {activeIndex === index && (
                  <div className=" py-2 w-full text-xl text-white">
                 {val.titlef}
                  </div>
                )}
                
              </div>
              
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
