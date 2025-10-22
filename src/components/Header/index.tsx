"use client";

import Image from "next/image";

import BrandLogoSvg from "../../../public/assets/Brand-Logo.svg";

import NavLink from "../Nav-link";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Header() {
  const indexPage = usePathname();

  return (
    <header className="h-[96px] py-6 text-sm border-b-2 border-b-[#16181D] md:text-base">
      <div className="flex items-center justify-between px-4 lg:w-[965px] mx-auto md:px-2">
        <Link href="/" className="w-auto h-auto" >
        <Image
          className="w-auto h-auto" 
          src={BrandLogoSvg} 
          alt="brand logo" 
        />
        </Link>
        <NavLink indexPage={indexPage ?? ''} href={""} />
      </div>
    </header>
  );
}
