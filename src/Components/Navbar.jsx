import React from 'react'
import { CiSearch,CiHeart, } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import logo from "../assets/logo-k.png"
import { CiUser } from "react-icons/ci";
import { Link } from 'react-router-dom';



function Navbar() {
const isLoggedIn = false;
  return (
    
<div className='flex justify-between shadow-md border-black px-[3%] max-w-[1100px] bg-[#fbfaf4] h-16 '>
  {/* Mobile */}
  <div className='flex items-center sm'>
    {/* Logo with rounded corners and overflow hidden */}
    <img 
      src={logo} 
      className='h-16 w-16 rounded-full overflow-hidden' 
      alt="Kabeer Website Logo" 
    />
    <h1 className='text-2xl lg:block box-content cursor-pointer flex font-semibold'>Kabeer</h1>
  </div>     
  <ul className='hidden lg:flex items-center gap-8'>
    <li className='cursor-pointer'><Link to={"/"}>Home</Link></li>
    <li className='cursor-pointer'><Link to={"about"}>About</Link></li>
    <li className='cursor-pointer'><Link to={"product"}>Products</Link></li>
    <li className='cursor-pointer'><Link to={"contact"}>Contact Us</Link></li>
    <li className='cursor-pointer'><Link to={"signup"}>Sign up</Link></li>
  </ul>
  <div className="items-center flex gap-12">
    <div className='flex h-9'>
      <input 
        type="text" 
        placeholder='Search' 
        className='p-1 pl-6 bg-[#F2EED7] border-solid rounded-s-xl focus:outline-none focus:ring-2 focus:ring-black' 
      />
      <CiSearch 
        style={{ borderLeft: "1px solid black" }} 
        className='cursor-pointer bg-[#F2EED7] h-9 w-10 p-2 rounded-e-xl text-2xl' 
      />
    </div>
    <div className='flex text-2xl gap-5'>
      <Link to={"favorite"}>
        <CiHeart className='cursor-pointer' title="Favorites" />
      </Link>
      <Link to={"cart"}>
        <IoCartOutline title="Cart" />
      </Link>
      {isLoggedIn ? (
        <Link to={"/"}><CiUser className='cursor-pointer' title="Profile" /></Link>
      ) : (
        <Link to={"signup"}><CiUser className='cursor-pointer' title="Sign up" /></Link>
      )}
    </div>
  </div>
</div>

  
  )
}
export default Navbar
