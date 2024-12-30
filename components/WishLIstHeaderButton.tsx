"use client";

import { useAppContext } from "@/context"; // Подключаем контекст
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const WishLIstHeaderButton: React.FC = () => {
  const { wishlistCount } = useAppContext();
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const cookieStore = document.cookie;
    const userIdCookie = cookieStore
      .split("; ")
      .find((row) => row.startsWith("userId="))
      ?.split("=")[1];

    setUserId(userIdCookie || null);
  }, []); // Извлекаем wishlistCount из контекста

  console.log(wishlistCount);

  
  
  return (
    <Link className="relative" href={`${userId ? "/wishlist" : "/sign_in"}`}>
      {wishlistCount > 0 && (
        <div className="text-white font-semibold text-[10px] px-[4px] rounded-[50%] bg-red-500 absolute top-0 right-0">
          {wishlistCount}
        </div>
      )}
      <Image src="/images/favourite.svg" alt="favourite" width={35} height={30} />
    </Link>
  );
};

export default WishLIstHeaderButton;
