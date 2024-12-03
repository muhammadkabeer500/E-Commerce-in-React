
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactStars from 'react-stars'

function Products() {
  const API_KEY = "https://dummyjson.com/products?limit=300&skip=0";

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [originalProducts, setOriginalProducts] = useState([]); 

  const getApiData = async () => {
    try {
      const API_data = await axios(API_KEY);
      const Data = API_data?.data?.products;
      setProducts(Data);
      setOriginalProducts(Data); 
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getApiData();
  }, []);

  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    return result || [];
  };

  const priceHighToLow = () => {
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setProducts(sortedProducts);
  };

  const priceLowToHigh = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedProducts);
  };

  const resetSorting = () => {
    setProducts(originalProducts); 
  };

  return (
    <div className="p-4">
     
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search Products..."
          onChange={(e) => setSearch(e.target.value)}
          className="bg-white w-3/4 sm:w-1/2 h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 text-gray-800"
        />
      </div>

     
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={priceHighToLow}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          High to Low
        </button>

     
        <button
          onClick={resetSorting}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Reset
        </button>

        <button
          onClick={priceLowToHigh}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition"
        >
          Low to High
        </button>
      </div>


      <div className="flex flex-wrap justify-center gap-6">
        {loading ? (
          <div className="text-gray-600">Loading...</div>
        ) : (
          searchProducts().map((item) => (
            <div
              key={item.id}
              className="bg-white p-4 rounded-lg shadow-lg w-60 text-center"
            >
              <img
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <div className="text-lg font-semibold text-gray-800">
                {item.title}
              </div>
              <div className="text-gray-600 mt-2">
                <span
                  className={
                    item.availabilityStatus === "Low Stock"
                      ? "text-red-500"
                      : "text-blue-500"
                  }
                >
                  {item.availabilityStatus}
                </span>
              </div>
              <div className="mt-2">
                <span className="text-gray-500 line-through mr-2">
                  ${item.price}
                </span>
                <span className="text-orange-500 font-bold">
                  $
                  {(
                    item.price -
                    (item.discountPercentage * item.price) / 100
                  ).toFixed(2)}
                </span>
              </div>
              <div className="text-sm text-gray-500">Category: {item.category}</div>
              <ReactStars count={5} value={item.rating} size={24} color2="#ffd700" />
            </div>
          ))
        )}
      </div>
    </div>
  );
}



export default Products
