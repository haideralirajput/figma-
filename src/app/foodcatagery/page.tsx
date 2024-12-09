import React from 'react';
import Image from 'next/image';

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: '/food1.png', label: 'Save 30%', description: 'Fast Food Dish' },
    { id: 2, img: '/food4.png', label: 'Delicious Burgers' },
    { id: 3, img: '/food3.png', label: 'Healthy Salads' },
    { id: 4, img: '/food2.png', label: 'Desserts' },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="text-center md:px-[100px]">
        <h1
          className="text-[#FF9F0D] text-[24px] md:text-[32px] font-greatVibes font-normal whitespace-nowrap"
          style={{ fontFamily: 'Great Vibes' }}
        >
          Food Category
        </h1>
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, index) => (
            <div key={item.id} className="relative">
              {/* Image of the food item */}
              <Image
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg"
              />
              {index === 0 && (
                <div className="absolute inset-0 flex flex-col justify-center items-start text-center w-[210px]">
                  {/* Save 30% Text */}
                  <span className="bg-white text-[#FF9F0D] px-2 py-2 text-sm font-bold rounded shadow self-center">
                    {item.label}
                  </span>
                  {/* Fast Food Dish Text */}
                  <span className="bg-[#FF9F0D] text-white px-6 py-2 text-sm font-bold rounded mt-2">
                    {item.description}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;
