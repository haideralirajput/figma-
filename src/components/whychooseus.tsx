"use client";
import Image from "next/image";

export default function WhyChooseUs() {
  return (
    <section className="bg-black text-white py-12 px-6 lg:px-20">
      <div className="grid lg:grid-cols-2 gap-[90px]">
        <div className="grid grid-cols-1 gap-4">
          <div className="grid grid-cols-5 gap-[10px]">
            <div className="col-span-3">
              <Image
                src="/wimage1.png"
                alt="Tacos"
                className="rounded-lg h-auto w-full object-cover "
                width={100}
                height={300}
              />
            </div>

            <div className="col-span-2 self-end">
              <Image
                src="/wimage2.png"
                alt="Chicken Finger"
                className="rounded-lg w-full object-cover"
                width={100}
                height={200}
              />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-[15px]">
            <div className="col-span-4 grid grid-cols-2 gap-[15px]">
              <Image
                src="/wimage3.png"
                alt="Burger"
                className="rounded-lg h-auto w-full object-cover"
                width={200}
                height={200}
              />
              <Image
                src="/wimage4.png"
                alt="Burger and Fries"
                className="rounded-lg h-auto w-full object-cover"
                width={200}
                height={200}
              />
            </div>
            <div className="grid gap-[15px] ">
              <Image
                src="/wimage5.png"
                alt="Salad"
                className="rounded-lg h-full w-full object-cover"
                width={200}
                height={200}
              />
              <Image
                src="/wimage6.png"
                alt="Salad"
                className="rounded-lg h-full w-full object-cover"
                width={200}
                height={200}
              />
            </div>
          </div>
        </div>

        {/* Right Section - Content */}
        <div>
          <h1
            className="text-[#FF9F0D] text-[24px]"
            style={{ fontFamily: "Great Vibes" }}
          >
            Why Choose us
          </h1>
          <h2 className="text-4xl font-bold leading-tight">
            <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste <br />
            And Experienced
          </h2>
          <p className="text-gray-400 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            diam pellentesque bibendum non dui volutpat fringilla bibendum.
            Urna, elit augue urna, vitae feugiat pretium donec id elementum.
            Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit
            eu velit in consequat.
          </p>

          {/* Categories */}
          <div className="flex space-x-6 mt-6 justify-between w-[320px]">
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-[#FF9F0D] mb-2">
                <Image
                  src="/hamburger.png"
                  alt="Fast Food"
                  width={35}
                  height={35}
                />
              </div>
              <p>Fast Food</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-[#FF9F0D] mb-2">
                <Image src="/cookie.png" alt="Lunch" width={35} height={35} />
              </div>
              <p>Lunch</p>
            </div>
            <div className="text-center">
              <div className="flex justify-center items-center w-16 h-16 bg-[#FF9F0D] mb-2">
                <Image src="/wine.png" alt="Dinner" width={35} height={35} />
              </div>
              <p>Dinner</p>
            </div>
          </div>

          {/* Experience */}
          <div className="mt-6 bg-white text-black px-6 py-4 rounded-lg border-l-8 border-[#FF9F0D] w-[320px]">
            <div className="flex items-center justify-evenly">
            <p className="text-4xl font-bold text-[#FF9F0D] grid">30+</p>
            <p className="text-2xl">
              Years of <span className="font-bold">Experienced</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
