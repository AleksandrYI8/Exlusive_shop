import Link from 'next/link';
import React, { ReactNode } from 'react';
import Slider from './Corusel';
import CategoryMainbannerReload from './CategoryMainbannerReload';

interface BannerProps {
    lang:any
}

const MainBanner: React.FC<BannerProps> = ({ lang}) => {

    return (
        <>
            <div className="w-full flex mb-[100px] gap-[1%]">
                <div  className="flex overflow-hidden scrollbar-hidden h-[50vh] overflow-y-auto flex-col w-[19%] mt-[2%] gap-[5px] text-[17px] text-black">                    
                <CategoryMainbannerReload lang={lang}/>
                </div>
                <div className=" border-l-[2px] h-fit w-[80%] pl-[2%] pt-[2%]">
                    <Slider></Slider>
                </div>
            </div>
        </>
    );
};

export default MainBanner;