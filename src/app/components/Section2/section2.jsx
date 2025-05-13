import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./section2.css";
import Link from "next/link";

export default function Section2() {
  const [data, setData] = useState(null);
  const [numberss, setnumberss] = useState(2);
  const [numbermini, setnumbermini] = useState(1);
  const [numberday, setnumberday] = useState(2);

  useEffect(() => {
    fetch("https://api.one-api.ir/digikala/v1/home/", {
      headers: {
        accept: "application/json",
        "one-api-token": "908907:680a3be23f7a8",
      },
    })
      .then((res) => res.json())
      .then((d) => {
        console.log("✅ سکشن 2 full result:", d);
        setData(d);
      })
      .catch((err) => {
        console.error("❌ خطا در دریافت داده‌ها:", err);
      });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setnumberss((prev) => {
        if (prev === 0) {
          setnumbermini((prevMini) => {
            if (prevMini === 0) {
              setnumberday((prevDay) => (prevDay === 0 ? 2 : prevDay - 1));
              return 59;
            }
            return prevMini - 1;
          });
          return 59;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!data) {
    return (
      <div className="w-full h-full bg-opacity-90 flex flex-col gap-3 justify-center items-center fixed top-0 left-0 z-50 backdrop-blur-md text-white">
        <figure className="lg:w-[20%] w-[50%] py-4">
          <img src="/logo digikala.svg" alt="Logo Digikala" className="godModeEffect" />
        </figure>
        <p className="text-lg animate-pulse">در حال دریافت اطلاعات...</p>
      </div>
    );
  }

  const products = data.result?.selling_and_sales?.products || [];

  if (products.length === 0) {
    return <div>داده‌های مورد نظر پیدا نشدند!</div>;
  }

  return (
    <div className="w-full flex justify-center bg-[#333333] py-4">
      <div className="w-[90%] lg:w-[75%] rounded-2xl flex flex-wrap lg:flex-nowrap bg-[#000001] py-4">
        <div className="lg:w-[20%] w-full px-5 py-2 text-white text-[30px] flex flex-wrap justify-center led-text-red">
          پیشنهاد شگفت انگیز
          <div className="text-[20px] w-full">
            {String(numberday).padStart(2, "0")}:
            {String(numbermini).padStart(2, "0")}:
            {String(numberss).padStart(2, "0")}
          </div>
        </div>

        <Swiper
          watchSlidesProgress
          slidesPerView={5}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper2"
        >
          {products.map((val) => (
            <SwiperSlide
              key={val.id}
              className="flex border w-full items-center flex-wrap p-2"
            >
              <Link href={`/product/${val.id}`}>
                <figure className="w-full flex flex-col items-center justify-between">
                  <img
                    className="h-[120px] py-2 object-contain"
                    src={val.images.main}
                    alt={val.title_fa || "Product Image"}
                  />
                  <figcaption className="w-full text-[#62666d] text-center text-sm bg-white px-2 py-1">
                    {val.title_fa.length > 40
                      ? val.title_fa.slice(0, 40) + "..."
                      : val.title_fa}
                  </figcaption>
                  <p
                    className={`w-full py-5 text-center ${
                      val.properties.min_price_in_last_month
                        ? "text-[#62666d]"
                        : "text-red-500"
                    }`}
                  >
                    {val.properties.min_price_in_last_month
                      ? val.properties.min_price_in_last_month.toLocaleString("fa-IR") +
                        " ریال"
                      : "اتمام موجودی"}
                  </p>
                </figure>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
