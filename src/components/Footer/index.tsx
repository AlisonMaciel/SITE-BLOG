import Image from "next/image";
import Link from "next/link";

import BrandLogoSvg from "../../../public/assets/Brand-Logo.svg";

export default function Footer() {
  return (
    <footer className="h-[88px] border-t-2 border-[#16181D]">
      <div className="flex gap-12 items-start justify-between py-8 px-4 md:flex md:items-center lg:w-[965px] md:mx-auto md:py-6 md:px-5">
        <Link href="/">
          <Image
            src={BrandLogoSvg}
            height={32}
            width={115}
            alt="Site.set"
            className="text-[#7EA4D7]"
          />
        </Link>

        <nav className="flex flex-col text-sm gap-3 md:flex md:flex-row md:gap-8 md:text-base">
          <Link className="text-[#7EA4D7] hover:text-[#2C85FC]" href="#">
            Termos de Uso
          </Link>
          <Link className="text-[#7EA4D7] hover:text-[#2C85FC]" href="#">
            Poítica de privacidade
          </Link>
          <Link className="text-[#7EA4D7] hover:text-[#2C85FC]" href="#">
            Enviar feedback
          </Link>
        </nav>
      </div>
    </footer>
  );
}
