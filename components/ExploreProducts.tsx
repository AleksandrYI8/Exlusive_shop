"use client";

import { useAppContext } from "@/context";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";

interface TodaysSalesProductsProps {
  translation: any;
}


const ExploreProduct: React.FC<TodaysSalesProductsProps> = ({ translation }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { dataProd } = useAppContext()

  // Функция для прокрутки на 2 блока
  const scroll = (direction: "left" | "right") => {
    if (containerRef.current) {
      const blockWidth = containerRef.current.scrollWidth / dataProd.length; // Ширина одного блока
      const scrollAmount = blockWidth * 2; // Прокрутка на 2 блока

      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-[50px] pb-[40px] z-0">
      {/* Кнопки прокрутки */}
      <div className="mb-[30px]">
        <div className="flex mb-[20px] gap-[10px] items-center">
          <div className="w-[20px] h-[40px] rounded-lg bg-red-500"></div>
          <h1 className="text-[17px] font-semibold text-red-500">{translation.main.our_products}</h1>
        </div>
        <div className="flex justify-between items-center gap-[5%] mb-[20px]">
          <span className="text-[36px] font-semibold text-black">{translation.main.explore_our_products}</span>
        </div>
      </div>
      <div className="absolute top-[5%] right-0 z-10 flex gap-[15px]">
        <button
          onClick={() => scroll("left")}
          className="p-[10px] bg-gray-100 text-white w-[45px] h-[45px] rounded-full flex items-center justify-center hover:bg-gray-200"
        >
          <Image src="/images/arrow.svg" alt="arrow" width={35} height={25} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="rotate-180 p-[10px] bg-gray-100 text-white w-[45px] h-[45px] rounded-full flex items-center justify-center hover:bg-gray-200"
        >
          <Image src="/images/arrow.svg" alt="arrow" width={35} height={25} />
        </button>
      </div>

      {/* Список товаров */}
      <div
        ref={containerRef}
        className="grid grid-rows-2 mb-[50px] grid-flow-col  gap-[2%] overflow-x-auto scrollbar-hidden"
        style={{ gridAutoColumns: "calc((100% - (2% * 4)) / 5)" }} // 6 элементов + 5 gap
      >
        {dataProd.map((item: any) => (
          <div
            key={item._id}
            className="hover:bg-gray-100 group rounded-lg w-fit pb-[10px] transition-[.1s]"
          >
            <div className="hover:bg-gray-100 group rounded-lg w-fit pb-[10px] transition-[.1s]">
              <div className="mb-[10px] relative rounded-xl">
                <div className="absolute cursor-pointer top-[5%] p-[7px] pt-[8px] flex items-center justify-center rounded-full right-[3%] bg-white">
                  <Image
                    src="/images/heart.svg"
                    alt="heart"
                    width={20}
                    height={20}
                  />
                </div>


                <Link href={`/${item._id}`}>
                  <div className="absolute cursor-pointer top-[19%] p-[7px] pt-[8px] flex items-center justify-center rounded-full right-[3%] bg-white">
                    <Image
                      src="/images/eye.svg"
                      alt="eye"
                      width={20}
                      height={20}
                    />
                  </div>
                </Link>


                <Link href={`/${item._id}`}>
                  <Image
                    className="w-conent h-[30vh] rounded-lg object-cover"
                    src={item.image[0]}
                    alt="product"
                    width={500}
                    height={300}
                  />
                </Link>
                <div className="w-full cursor-pointer flex justify-center items-center py-[10px] rounded-b-lg bg-black text-white absolute bottom-0 opacity-0 group-hover:opacity-100 transition">
                  <span>{translation.main.add_to_cart}</span>
                </div>
              </div>
              <Link href={`/${item._id}`}>

                <div className="">
                  <h1 className="text-black font-medium mb-[10px] px-[10px]">
                    {item.title}
                  </h1>
                  <div className="flex font-medium gap-[10px] px-[10px] mb-[10px]">
                    <span className="text-red-500">{item.discound > 0 ? (item.price - (item.price * item.discound) / 100).toFixed(2) : item.price}</span>
                    <div className="flex items-center px-[10px] gap-[7px]">
                      <div className="flex items-center gap-[7px]">
                        <Image
                          src="/images/YellowStar.svg"
                          alt="rating"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/images/YellowStar.svg"
                          alt="rating"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/images/YellowStar.svg"
                          alt="rating"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/images/YellowStar.svg"
                          alt="rating"
                          width={20}
                          height={20}
                        />
                        <Image
                          src="/images/YellowStar.svg"
                          alt="rating"
                          width={20}
                          height={20}
                        />
                      </div>
                      <span className="flex justify-center items-center text-gray-400">
                        (99)
                      </span>
                    </div>

                  </div>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="flex border-b border-gray-300 pb-[70px] justify-center">
        <Link href="/">
          <span className='p-[20px] rounded-lg text-[17px] font-medium px-[50px] bg-red-500'>{translation.main.view}</span>
        </Link>
      </div>
    </div>
  );
};

export default ExploreProduct;
