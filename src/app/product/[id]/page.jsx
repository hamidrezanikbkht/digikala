import ProductClient from "@/app/components/ProductClient/ProductClient";

export default async function ProductPage({ params }) {
  const res = await fetch("https://api.one-api.ir/digikala/v1/home/", {
    headers: {
      accept: "application/json",
      "one-api-token": "908907:680a3be23f7a8",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("مشکل در دریافت داده");
  }

  const data = await res.json();
  const allSections = Object.values(data.result || {});
  const allProducts = allSections.flatMap((section) => section.products || []);
  const product = allProducts.find((p) => p.id == params.id);

  if (!product) {
    return (
      <div className=" max-w-screen-2xl mx-auto flex justify-center items-center bg-gradient-to-r from-red-500 to-orange-500 p-8">
        <div className="text-center text-white bg-opacity-90 p-8 rounded-xl shadow-2xl backdrop-blur-xl">
          <h2 className="text-4xl font-bold mb-4">محصول پیدا نشد</h2>
          <p className="text-lg">لطفاً دوباره تلاش کنید!</p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-r w-full  p-8 flex justify-center items-center" style={{backgroundImage:`url(/low-poly-grid-haikei.svg)`}}>

        
        

        <div className="flex justify-center items-center mb-8 ">
          <img
            src={product.image}
            alt={product.title}
            className="w-full max-w-[400px] rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105"
          />
        </div>

        <div className="text-center mb-6 ">
          
          
        </div>

        <div className="mt-6">
          <ProductClient product={product} />
        </div>

   

     
     
    </main>
  );
}
