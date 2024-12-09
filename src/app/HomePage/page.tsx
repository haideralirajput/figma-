import React from 'react'
import Image from 'next/image'
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from '../foodcatagery/page'
import foodpic1 from "../../../public/foodpic1.jpeg"
import foodpic2 from "../../../public/foodpic2.jpeg"
import foodpic3 from "../../../public/foodpic3.jpeg"
import bannerbg from "../../../public/bannerbg.jpg"
import { FaFacebook, FaTwitter, FaPinterest } from 'react-icons/fa';
import WhyChooseUs from '@/components/whychooseus'



function HomePage() {
  return (
    <>

       
       

<section
  className="relative bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row md:items-center py-[130px]"
>
  {/* Background Layer */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-10"
    style={{
      backgroundImage: `url(${bannerbg.src})`,
    }}
  ></div>

  {/* Vertical Social Media Icons */}
  <div
  className="relative left-0 pr-14 flex flex-col gap-6"
  style={{ position: "relative", height: "100%" }}
>
  <span
    className="w-px bg-gray-500"
    style={{
      position: "absolute",
      height: "100%",
      top: "-130%",
      left: "14%",
      display: "block",
    }}
  ></span>
  <a
    href="#"
    className="text-white hover:text-[#FF9F0D] text-lg"
    style={{
      display: "block",
      height: "100%",
    }}
  >
    <FaFacebook />
  </a>
  <a href="#" className="text-white hover:text-[#FF9F0D] text-lg">
    <FaTwitter />
  </a>
  <a href="#" className="text-white hover:text-[#FF9F0D] text-lg">
    <FaPinterest />
  </a>
  <span
    className="w-px bg-gray-500"
    style={{
      position: "absolute",
      left: "14%",
      bottom: "-130%",
      display: "block",
      height: "100%",
    }}
  ></span>
</div>


  {/* Content */}
  <div className="relative z-10 text-white w-full md:w-[43%]">
    <h1 className="md:text-[32px] text-[24px] font-normal text-[#FF9F0D] whitespace-nowrap  " style={{fontFamily:"Great Vibes"}}>
      Its Quick & Amusing!
    </h1>

    <h1 className="text-[25px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal pb-[30px] leading-tight">
      <span className="text-[#FF9F0D]">Th</span>e Art of speed food Quality
    </h1>

    <p className="text-[10px] md:text-[16px] font-normal">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
    </p>

    <div className="flex flex-col md:flex-row items-center md:items-start">
      <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
        See More
      </button>
    </div>
  </div>

  {/* Image */}
  <div className="mt-[50px] md:mt-0 relative z-10 md:w-[43%]">
    <Image
      src="/food.png"
      alt="Hero Image"
      width={700}
      height={500}
      className=""
    />
  </div>
</section>



       
       
       
       
       
       
       
<section className="bg-black px-3 md:px-[135px] grid grid-cols-1 md:grid-cols-2 gap-10 py-[50px] items-center h-[600px]">
  {/* Text Content */}
  <div className="text-white">
    <h1 className="text-[#FF9F0D] text-[24px] md:text-[32px] font-greatVibes font-normal whitespace-nowrap" style={{fontFamily:"Great Vibes"}}>
      About us
    </h1>
    <h2 className="text-[20px] md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal leading-tight">
      <span className="text-[#FF9F0D]">We</span> Create the best foody product
    </h2>
    <p className="text-[10px] md:text-[16px] font-normal mt-4">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
      pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
      augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
      vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
    </p>
    <ul className="mt-8 space-y-4">
      <li className="flex items-start text-[10px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Lacus nisi, et ac dapibus sit eu velit in consequat.
      </li>
      <li className="flex items-start text-[10px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Quisque diam pellentesque bibendum non dui volutpat fringilla
      </li>
      <li className="flex items-start text-[10px] md:text-[16px] font-normal">
        <span className="mr-[10px] text-[#FF9F0D]">
          <FaCheck />
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </li>
    </ul>
    <button className="bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800">
      Read More
    </button>
  </div>

  {/* Images Grid */}
  <div className="grid grid-cols-1 gap-4 w-full h-full">
    <div className="relative w-full h-full">
      <Image
        src={foodpic1}
        alt="Main Dish"
        className="object-cover w-full h-full rounded-lg"
        layout="fill"
      />
    </div>
    <div className="grid grid-cols-2 gap-4">
      <div className="relative w-full h-full">
        <Image
          src={foodpic2}
          alt="Dish 2"
          className="object-cover w-full h-full rounded-lg"
          layout="fill"
        />
      </div>
      <div className="relative w-full h-full">
        <Image
          src={foodpic3}
          alt="Dish 3"
          className="object-cover w-full h-full rounded-lg"
          layout="fill"
        />
      </div>
    </div>
  </div>
</section>





    <FoodCategory/>
    <WhyChooseUs/>
    </>
  )
}

export default HomePage