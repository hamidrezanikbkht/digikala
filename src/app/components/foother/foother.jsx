import React from "react";

export default function Foother() {
  return (
    <div
      className="w-full flex flex-wrap py-10 bg-[#333333] max-w-screen-2xl mx-auto text-white *:text-white  "
      
    >
      <div className="w-full flex justify-center px-5">
        <figure className=" lg:w-[20%] w-[50%]  py-4">
          <img
            src="/logo digikala.svg"
            alt="Logo Digikala"
            className="godModeEffect"
          />
        </figure>
      </div>
      <div className="w-full py-2 px-5  lg:justify-around   lg:flex  ">
        <div className="  text-center lg:justify-center  lg:flex ">
          <div className=" ">تلفن پشتیبانی ۶۱۹۳۰۰۰۰ - ۰۲۱</div>
          <div className=" px-5 hidden lg:flex">|</div>
          <div className="">۰۲۱-۹۱۰۰۰۱۰۰</div>
          <div className="hidden px-5  lg:flex ">|</div>
          <div className=" ">۷ روز هفته، ۲۴ ساعته پاسخگوی شما هستیم</div>
        </div>
      </div>
      <div className="w-full flex flex-wrap justify-around gap-x-32">
        <figure>
          <img src="/days-return.svg" alt="" />
        </figure>
        <figure>
          <img src="/support.svg" alt="" />
        </figure>
        <figure>
          <img src="/original-products.svg" alt="" />
        </figure>
        <figure>
          <img src="/express-delivery.svg" alt="" />
        </figure>
        <figure>
          <img src="/cash-on-delivery.svg" alt="" />
        </figure>
      </div>
      <div className="w-full flex flex-wrap">
        <div className="w-full py-4 px-8 lg:w-1/4 *:py-1">
          <p className="font-bold"> دیجی کالا </p>
          <p>اتاق خبر دیجی کالا</p>
          <p>فروش در دیجی‌کالا</p>
          <p>فرصت‌های شغلی</p>
          <p>گزارش تخلف در دیجی‌کالا</p>
          <p>تماس با دیجی‌کالا</p>
          <p>درباره دیجی‌کالا</p>
        </div>
        <div className="w-full py-4 px-8 lg:w-1/4 *:py-1">
          <p className="font-bold">خدمات مشتریان</p>
          <p>پاسخ به پرسش‌های متداول</p>
          <p>رویه بازگرداندن کالا</p>
          <p>شرایط استفاده</p>
          <p>حریم خصوصی</p>
          <p>گزارش باگ</p>
        </div>
        <div className="w-full py-4 px-8 lg:w-1/4 *:py-1">
          <p className="font-bold">راهنمای خرید از دیجی کالا</p>
          <p>نحوه ثبت سفارش</p>
          <p>رویه ارسال سفارش</p>
          <p>شیوه های پرداخت </p>
        </div>
        <div className="w-full led-glow-gold text-xl flex justify-center">توسعه دهنده حمیدرضا نیکبخت </div>
      </div>
    </div>
  );
}
