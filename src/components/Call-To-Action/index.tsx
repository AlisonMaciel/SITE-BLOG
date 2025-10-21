import { ArrowRight, Store } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

import BackgroundSvg2 from "../../../public/assets/background (2).svg";

export default function CallToAction() {
  return (
    <section
      className="bg-gradient-to-b from-[#12191f] to-[#121519] min-h-[247px] pb-14 md:pb-0 md:min-h-[320px] bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundSvg2.src}')` }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center justify-center bg-[#0E474C] h-14 w-14 md:h-16 md:w-16 rounded-full -mt-8 mb-8">
          <Store className="h-7 w-7 md:h-8 md:w-8 text-[#2DEBFC]" />
        </div>
        <h2 className="text-2xl font-bold font-pt text-center md:w-[386px] text-[#E9EAEC] mt-7 mb-8">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>
        <Button variant="primary" className="flex items-center w-fit" asChild>
          <Link href="/blog">
            Criar loja grátics
            <ArrowRight className="h-6 w-6 text-[#E9EAEC]" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
