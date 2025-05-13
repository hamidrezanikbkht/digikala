"use client";
import { useAppContext } from "../context/context";
import { ShoppingCart, Trash2, X, Minus, Plus } from "lucide-react";

export default function Sabad({ showSabad, setShowSabad }) {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } =
    useAppContext();

  const totalAmount = cartItems.reduce(
    (acc, item) => acc + (item.price?.selling_price || 0) * item.quantity,
    0
  );
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  return (
    <>
      {/* تارکننده پس‌زمینه */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          showSabad ? "block" : "hidden"
        }`}
        onClick={() => setShowSabad(false)}
      ></div>

      {/* پنل اصلی سبد */}
      <div
        className={`fixed top-1/2 left-1/2 w-[92%] sm:w-[420px] bg-white shadow-xl rounded-[1.8rem] p-6 z-50 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 border border-gray-200 ${
          showSabad
            ? "opacity-100 scale-100"
            : "opacity-0 scale-90 pointer-events-none"
        }`}
      >
        {/* دکمه بستن */}
        <button
          onClick={() => setShowSabad(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition-colors"
        >
          <X size={24} />
        </button>

        {/* عنوان */}
        <div className="flex items-center justify-center gap-2 text-teal-600 mb-6">
          <ShoppingCart size={26} />
          <h2 className="text-xl sm:text-2xl font-extrabold">
            سبد خرید ({totalQuantity})
          </h2>
        </div>

        {/* محتوای سبد */}
        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">سبد خرید شما خالی است 😔</p>
        ) : (
          <>
            <ul className="space-y-5 max-h-[300px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
              {cartItems.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 items-center border-b pb-3"
                >
                  <img
                    src={item.images.main}
                    alt={item.title_fa}
                    className="w-16 h-16 rounded-2xl object-cover border"
                  />

                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-800 line-clamp-2">
                      {item.title_fa}
                    </p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-xl shadow-inner">
                        <button
                          onClick={() => decreaseQuantity(item.id)}
                          className="text-gray-600 hover:text-red-500"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="text-sm">{item.quantity}</span>
                        <button
                          onClick={() => increaseQuantity(item.id)}
                          className="text-gray-600 hover:text-green-500"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      <span className="text-xs font-bold text-gray-700 whitespace-nowrap">
                        {(
                          item.price.selling_price * item.quantity
                        ).toLocaleString("fa-IR")}{" "}
                        تومان
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:scale-110 transition-transform"
                    title="حذف"
                  >
                    <Trash2 size={18} />
                  </button>
                </li>
              ))}
            </ul>

            {/* جمع کل و دکمه پرداخت */}
            <div className="mt-6">
              <div className="flex justify-between items-center mb-4 text-gray-800 font-bold text-lg">
                <span>جمع کل:</span>
                <span>{totalAmount.toLocaleString("fa-IR")} تومان</span>
              </div>
              <button
               
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 transition-all text-white py-3 rounded-2xl text-lg font-bold shadow-md"
              >
                ادامه فرایند پرداخت
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
