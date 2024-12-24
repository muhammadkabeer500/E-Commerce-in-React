import React from 'react'
import NewArrivalGrid from "../components/NewArrivalGrid";
import Slider from "../components/Slider";
import SectionTitle from '../components/SectionTittle';
import Button from '../components/Button';
import Card from'../components/card'
import { FaArrowUp } from "react-icons/fa";
import {  Link} from "react-router-dom";
// import Products from "./pages/Products";





export default function Home() {
  return (
<div className='container-x '> 
    <SectionTitle text="Today's" />
    <h3 className="heading">Flash Sales</h3>
    <Slider />
    <div className="flex justify-center my-16">
        {/* Button or Link to View All Products */}
        <Link to="/products">
        <button className="h-14 w-56 mx-auto my-16 font-medium rounded-xl bg-red-500 center text-white ">
          View All Products
        </button>
      </Link>
    </div>
    <SectionTitle text="Categories" />
    <h3 className="heading">Browse By Category</h3>
    <SectionTitle text="This Month" />

    <div className="flex justify-between my-16">
    <h3 className="heading">Best Selling Products</h3>
    <Button className="h-14 w-40 ">View All</Button>
    </div>

    <div className='flex gap-7 flex-wrap justify-center'>
    <Card/>
    <Card/>
    <Card/>
    <Card/>
  

    </div>

    <SectionTitle text="Our Products" />
    <SectionTitle text="Featured" />
    <h3 className="heading">New Arrival</h3>
    <NewArrivalGrid/>

    <a
  href="#top"
  className="my-5 w-12 h-12 bg-gray-200 rounded-full flex justify-center items-center text-2xl ml-auto"
>
  <FaArrowUp />
</a>

</div>




  )
}

