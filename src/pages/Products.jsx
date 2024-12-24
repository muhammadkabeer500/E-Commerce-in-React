import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/card";

export default function Products() {
  const API_KEY = "https://dummyjson.com/products?limit=30&skip=0";

  const [products, setProducts] = useState(null);

  // Get data from API
  const getProductData = async () => {
    try {
      const response = await axios(API_KEY);
      console.log("API Response:", response.data); // Debugging API response
      setProducts(response?.data?.products);
    } catch (error) {
      console.error("Error fetching products:", error); // Catch and log any errors
    }
  };

  // Call getProductData once the component is mounted
  useEffect(() => {
    getProductData();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  // Search function to filter products based on title
  const searchProducts = () => {
    const result = products?.filter((item) => {
      return item.title.toLowerCase().includes(searchTerm.toLowerCase());
    });

    return result || [];
  };

  const searchKaResult = searchProducts();

  return (
    <div className="container-x">
      <input
        type="search"
        name="price"
        id="price"
        onChange={(event) => {
          setSearchTerm(event.target.value?.toLowerCase());
        }}
        className="block w-full outline-none rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary my-8 sm:text-sm/6"
        placeholder="Search your product"
      />

      {/* Loading state */}
      {products === null ? "Loading...." : null}

      <div className="flex flex-wrap justify-center gap-4">
        {/* No products found message */}
        {searchKaResult.length === 0 ? "Product not found" : ""}

        {/* Map over search results and display Product Cards */}
        {searchKaResult?.map((item) => (
          <ProductCard
            key={item.id}
            image={item.thumbnail}
            name={item.title}
            price={item.price}
            discountPercentage={item.discountPercentage}
            rating={item.rating}
          />
        ))}
      </div>
    </div>
  );
}
