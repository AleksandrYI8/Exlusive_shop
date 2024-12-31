"use client";

import { useAppContext } from "@/context"; // Подключаем контекст
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CartHeaderButton: React.FC = () => {
  const { cartCount } = useAppContext();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const cookieStore = document.cookie;
    const userIdCookie = cookieStore
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];

    setUserId(userIdCookie || null);
  }, []); // Извлекаем wishlistCount из контекста

  console.log(cartCount);

  
  
  return (
    <Link className="relative" href={`${userId ? "/cart" : "/sign_in"}`}>
      {cartCount > 0 && (
        <div className="xs:px-[3px] sm:text-[8px] sm:px-[3px]  xs:mt-[5px] xs:text-[7px] text-white font-semibold lg:text-[10px] lg:px-[4px] rounded-[50%] bg-red-500 absolute top-0 right-0">
          {cartCount}
        </div>
      )}
      <Image className="xs:w-[25px] xl:w-[35px] lg:w-[35px] sm:w-[30px] xs:object-cover xs:pt-[8px] " src="/images/cart.svg" alt="favourite" width={45} height={30} />
    </Link>
  );
};

export default CartHeaderButton;