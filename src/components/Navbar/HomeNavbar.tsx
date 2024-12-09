"use client";

import { useState } from "react";
import { IoSearch } from "react-icons/io5"; // Search Icon
import { PiHandbagBold } from "react-icons/pi"; // Shopping Bag Icon
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white shadow-md">
      {/* Logo */}
      <div className="text-center pt-6">
        <a href="/" className="text-2xl font-bold text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </a>
      </div>

      {/* Main Navbar */}
      <div className="container mx-auto px-6 lg:px-12 py-4 flex justify-between items-center">
        {/* Navigation Links */}
        <div className="flex items-center justify-between flex-1">
          <div className="flex space-x-6 hidden lg:flex">
            <a
              href="#home"
              className="relative group transition"
            >
              Home
              {/* Active Dot */}
              <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 h-1 w-1 bg-[#FF9F0D] rounded-full"></span>
            </a>
            <a
              href="#menu"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              Menu
              {/* Hover Dot */}
              <span className="absolute left-1/2 -bottom-1.5 transform -translate-x-1/2 h-1 w-1 bg-[#FF9F0D] rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a
              href="#blog"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              Blog
            </a>
            <a
              href="#pages"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              Pages
            </a>
            <a
              href="#about"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              About
            </a>
            <a
              href="#shop"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              Shop
            </a>
            <a
              href="#contact"
              className="relative group transition hover:text-[#FF9F0D]"
            >
              Contact
            </a>
          </div>

          {/* Search Bar */}
          <div className="flex items-center ml-6">
            <div className="flex items-center px-3 py-2 rounded-full w-[200px] lg:w-[250px] outline outline-2 outline-[#FF9F0D]">
              <input
                type="text"
                placeholder="Search..."
                className="bg-transparent text-white placeholder-gray-400 focus:outline-none w-full text-sm"
              />
              <IoSearch className="text-white ml-3 text-3xl" />
            </div>

            {/* Shopping Bag Icon */}
            <div className="ml-4">
              <PiHandbagBold className="text-white text-2xl hover:text-[#FF9F0D] transition" />
            </div>
          </div>

          {/* Mobile Menu Trigger (Sheet) */}
          <div className="lg:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger>
                <button onClick={() => setIsOpen(!isOpen)} className="text-white text-2xl">
                  &#9776;
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="w-3/4 sm:w-1/2 bg-black text-white p-6 transition-all transform duration-300 ease-in-out"
              >
                <SheetHeader>
                  <SheetTitle className="text-2xl font-bold mb-6"><a href="/" className="text-2xl font-bold text-[#FF9F0D]">
          Food<span className="text-white">tuck</span>
        </a></SheetTitle>
                  <SheetDescription>
                    <div className="flex flex-col space-y-4">
                      <a href="#home" className="hover:text-[#FF9F0D] text-2xl">Home</a>
                      <a href="#menu" className="hover:text-[#FF9F0D] text-2xl">Menu</a>
                      <a href="#blog" className="hover:text-[#FF9F0D] text-2xl">Blog</a>
                      <a href="#pages" className="hover:text-[#FF9F0D] text-2xl">Pages</a>
                      <a href="#about" className="hover:text-[#FF9F0D] text-2xl">About</a>
                      <a href="#shop" className="hover:text-[#FF9F0D] text-2xl">Shop</a>
                      <a href="#contact" className="hover:text-[#FF9F0D] text-2xl">Contact</a>
                    </div>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
