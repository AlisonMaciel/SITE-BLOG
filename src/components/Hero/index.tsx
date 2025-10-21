import { ArrowRight, Clock, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

import BackgroundSvg from "../../../public/assets/background.svg";

export default function Hero() {
  return (
    <section className="flex justify-center items-center lg:gap-14 xl:w-[966px] xl:mx-auto">
      <div className="flex flex-col justify-center items-center mt-8 mx-4 mb-10 md:items-start md:w-[800px]">
        <h1 className="text-[#E9EAEC] text-center mb-6 font-bold text-[28px] font-pt md:mb-8 md:text-3xl md:text-left lg:text-5xl">
          Venda seus produtos como afiliado em um único lugar
        </h1>
        <div>
          <span className="flex items-center text-sm gap-3 mb-1 text-[#D3D5D9] md:text-base md:mb-2">
            <Store className="h-4 w-4 md:h-5 md:w-5 text-[#2DEBFC]" />
            Crie o seu site em menos de 5 minutos
          </span>
          <span className="flex items-center text-sm gap-3 mb-1 text-[#D3D5D9] md:text-base md:mb-2">
            <Clock className="h-4 w-4 md:h-5 md:w-5 text-[#2DEBFC]" />
            Acompanhe e otimize seu negócio online
          </span>
        </div>
        <div className="mt-10 md:mt-14">
          <Button variant="primary" className="flex items-center mb-4" asChild>
            <Link href="/blog">
              Criar loja grátics
              <ArrowRight className="h-6 w-6 text-[#E9EAEC]" />
            </Link>
          </Button>
          <span className="text-[12px] text-[#93979E]">
            Não precisa de cartão de crédito
          </span>
        </div>
      </div>
      <div>
        <div className="hidden md:block xl:-mr-[145px]">
          <Image src={BackgroundSvg} height={491} width={471} alt="logos" />
        </div>
      </div>
    </section>
  );
}
