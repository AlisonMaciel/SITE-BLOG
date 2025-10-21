import { ArrowRight, Link } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";

import Group from "../../../public/assets/image.svg";

export default function Feature() {
  return (
    <section className="grid grid-cols-1 gap-3 mt-10 mb-[72px] mx-4 md:grid-cols-2 md:gap-4 xl:w-[966px] md:mx-auto md:px-4">
      <div className="flex flex-col  gap-3 p-5 bg-[#16181D] rounded-[8px]">
        <span className="text-[#2C85FC] bg-[#0D284C] rounded-[4px] text-[12px] py-[6px] px-3 uppercase w-fit">
          Simples
        </span>
        <p className="text-xl font-bold font-pt text-[#E9EAEC]">
          Crie um catálogo de produtos online em poucos minutos
        </p>
      </div>
      <div className="flex flex-col  gap-3 p-5 bg-[#16181D] rounded-[8px]">
        <span className="text-[#2C85FC] bg-[#0D284C] rounded-[4px] text-[12px] py-[6px] px-3 uppercase w-fit">
          Prático
        </span>
        <p className="text-xl font-bold font-pt text-[#E9EAEC]">
          Venda para seu público através de uma plataforma única
        </p>
      </div>
      <div className="flex flex-col p-5 bg-[#16181D] rounded-[8px] md:flex-row md:gap-[88px] md:col-span-2">
        <div className="flex flex-col justify-between gap-4">
          <div>
            <span className="text-[#2C85FC] bg-[#0D284C] rounded-[4px] text-[12px] py-[6px] px-3 uppercase w-fit">
              personalizável
            </span>
            <p className="text-xl font-bold font-pt text-[#E9EAEC] mt-3">
              Tenha uma loja online personalizada com a cara da sua marca
            </p>
          </div>
          <Button
            variant="primary"
            className="flex items-center w-fit max-md:hidden"
            asChild
          >
            <Link href="/blog">
              Criar loja grátics
              <ArrowRight className="h-6 w-6 text-[#E9EAEC]" />
            </Link>
          </Button>
        </div>
        <div className="mt-8">
          <Image src={Group} alt="group" />
        </div>
        <Button
          variant="primary"
          className="flex items-center md:hidden"
          asChild
        >
          <Link href="/blog">
            Criar loja grátics
            <ArrowRight className="h-6 w-6 text-[#E9EAEC]" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
