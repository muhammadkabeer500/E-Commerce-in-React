import React, { useState } from "react";
import LogoMobile from "../assets/image/logo.svg";
import Profilelogo from "../assets/image/profile-logo.jpg";
import { CiSearch } from "react-icons/ci";
import { IoMdHeart } from "react-icons/io";
import { IoCart, IoMenu } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { IoIosCloseCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const navLinks = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Contact ", link: "/contact" },

];

export default function Navbar() {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const isLoggedIn = false;

  return (
    <div className="h-28 container-x  relative border-b border-gray-300 flex justify-between items-center px-8 bg-white">
      {/* Logo */}
      <img
        src={LogoMobile}
        className="cursor-pointer hover:scale-105 transition-transform duration-300"
        alt="Logo"
        width={60}
        height={60}
      />

      {/* Search Bar */}
      <div className="relative bg-[#F5F5F5] w-80 border border-gray-300 rounded flex items-center">
        <input
          type="search"
          placeholder="What are you looking for?"
          className="h-10 bg-transparent outline-none text-sm pl-4 pr-8 w-full placeholder-gray-500"
        />
        <CiSearch className="absolute right-2 text-xl text-gray-400 cursor-pointer" />
      </div>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-6">
        {navLinks.map((item, i) => (
          <li key={i} className="text-sm font-medium text-gray-600">
            <Link
              to={item.link}
              className="hover:underline decoration-2 underline-offset-4"
            >
              {item.title}
            </Link>
          </li>
        ))}
        {!isLoggedIn && (
          <li className="text-sm font-medium text-gray-600">
            <Link to="/login" className="hover:underline decoration-2 underline-offset-4">
              Login
            </Link>
          </li>
        )}
      </ul>

      {/* User Icons */}
      <div className="icons text-2xl gap-3 flex justify-center items-center">
        {isLoggedIn && (
          <>
            <IoMdHeart />
            <IoCart />
          </>
        )}
        <Link to={"Profile"} className="bg-[#DB4444] rounded-full h-8 w-8 flex justify-center items-center text-base">
          {isLoggedIn ? (
            <img
              src={Profilelogo}
              alt="Profile"
              className="h-full w-full rounded-full object-cover"
            />
          ) : (
            <FaRegUser />
          )}
        </Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <button
        onClick={() => setIsHamburgerOpen(!isHamburgerOpen)}
        className="text-2xl md:hidden"
      >
        {isHamburgerOpen ? <IoIosCloseCircle /> : <IoMenu />}
      </button>

      {/* Mobile Navigation */}
      {isHamburgerOpen && (
        <ul className="absolute top-28 left-0 bg-gray-100 w-full z-10 flex flex-col pl-6 py-4 shadow-lg md:hidden">
          {navLinks.map((item, i) => (
            <li key={i} className="text-sm font-medium text-gray-600">
              <Link
                to={item.link}
                className="hover:underline decoration-2 underline-offset-4"
              >
                {item.title}
              </Link>
            </li>
          ))}
          {!isLoggedIn && (
            <li className="text-sm font-medium text-gray-600">
              <Link to="/login" className="hover:underline decoration-2 underline-offset-4">
                Login
              </Link>
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
