import Image from "next/image";

import Customer1 from "../../../public/assets/customer1.svg";
import Customer2 from "../../../public/assets/customer2.svg";

export default function CustomerStory() {
  return (
    <section className="flex flex-col items-center justify-center px-4 mt-[128px] mb-[168px] xl:w-[966px] md:mx-auto">
      <h2 className="font-pt text-2xl mb-6 font-bold text-[#E9EAEC] md:text-[32px] md:mb-8">
        Quem utiliza, aprova!
      </h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6">
        <div className="bg-[#14161A] p-6 rounded-[8px]">
          <p className="italic text-[#D3D5D9]">
            Criar minha loja com o site.set foi a melhor decisão para o meu
            negócio. A plataforma é super intuitiva, e consegui colocar meus
            produtos à venda em poucos minutos.
          </p>
          <div className="flex items-center gap-3 mt-8 md:mt-10">
            <Image src={Customer1} alt="CEO na Anne Corp" />
            <div className="flex flex-col gap-1">
              <strong className="text-sm font-medium text-[#D3D5D9]">
                Annette Bones
              </strong>
              <span className="text-[12px] text-[#93979E]">
                CEO na Anne Corp
              </span>
            </div>
          </div>
        </div>
        <div className="bg-[#14161A] p-6 rounded-[8px]">
          <p className="italic text-[#D3D5D9]">
            Transformar minha ideia em uma loja online foi fácil e rápido.
            Adorei as opções de personalização e a simplicidade para gerenciar
            os pedidos. Já vejo meus produtos alcançando mais pessoas!
          </p>
          <div className="flex items-center gap-3 mt-8 md:mt-10">
            <Image src={Customer2} alt="CEO na JJ Org" />
            <div className="flex flex-col gap-1">
              <strong className="text-sm font-medium text-[#D3D5D9]">
                Jacob Jones
              </strong>
              <span className="text-[12px] text-[#93979E]">CEO na JJ Org</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
