import Link from 'next/link';
import React, { ReactNode } from 'react';
import Slider from './Corusel';

interface BannerProps {
}

const MainBanner: React.FC<BannerProps> = () => {

    return (
        <>
            <div className="w-full flex px-[7%] mb-[100px] gap-[1%]">
                <div className="flex overflow-hidden scrollbar-hidden h-[55vh] overflow-y-auto flex-col w-[19%] pt-[2%] gap-[15px] text-[17px] text-black">
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                    <Link className=' hover:bg-gray-100 py-[5px] px-[5px] rounded-b-none rounded-[5px] active:scale-[.9] transition-[.2s]' href={"/"}>Woman’s Fashion</Link>
                </div>
                <div className=" border-l-[2px] h-fit w-[80%] pl-[2%] pt-[2%]">
                    <Slider></Slider>
                </div>
            </div>
        </>
    );
};

export default MainBanner;