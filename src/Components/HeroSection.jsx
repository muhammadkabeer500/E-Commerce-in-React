



export const ImageSlider = () => {


  return (

<div className="bg-gradient-to-r from-indigo-500 h-screen via-purple-500 to-pink-500 text-white py-20 px-4">
<div className="container mx-auto text-center">
  <h1 className="text-4xl md:text-6xl font-extrabold mb-6">
    Welcome to Our Store
  </h1>
  <p className="text-lg md:text-xl mb-8">
    Discover amazing deals and the latest products, all at your fingertips.
  </p>
  <div className="flex justify-center gap-4">
    <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
      Shop Now
    </button>
    <button className="bg-transparent border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
      Learn More
    </button>
  </div>
</div>
</div>
  );
};
