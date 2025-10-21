import { HeartHandshake, PaintbrushVertical, StoreIcon } from "lucide-react";

import BackgroundSvg1 from "../../../public/assets/background (1).svg";

export default function Support() {
  return (
    <section
      className="flex flex-col justify-center md:min-h-[559px] my-12 py-12 bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url('${BackgroundSvg1.src}')` }}
    >
      <h2 className="text-2xl font-pt font-bold text-[#E9EAEC] text-center mb-8">
        Sua loja de afiliados, simples, do jeito que deveria ser
      </h2>
      <div className="grid grid-cols-1 gap-4 px-4 text-sm md:text-base xl:w-[966px] md:mx-auto md:flex md:items-center ">
        <div className="bg-[#0D284C] p-4 rounded-xl min-h-[195px]">
          <PaintbrushVertical className="h-9 w-9 p-2 mb-4 text-white bg-[#2266C1] rounded-[8px]" />
          <span className="text-[#E9EAEC] font-pt max-md:text-xl lg:text-xl">
            Personalize seu site
          </span>
          <p className="text-[#D3D5D9] mt-2 text-sm">
            Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a
            sua cara.
          </p>
        </div>
        <div className="bg-[#0E474C] p-4 rounded-xl min-h-[195px]">
          <StoreIcon className="h-9 w-9 p-2 mb-4 text-white bg-[#187D86] rounded-[8px]" />
          <span className="text-[#E9EAEC] font-pt max-md:text-xl lg:text-xl">
            Venda de qualquer loja
          </span>
          <p className=" text-[#D3D5D9] mt-2 text-sm">
            Não importa a loja, o Site.Set permite que você insera qualquer link
            de afiliado.
          </p>
        </div>
        <div className="bg-[#0D284C] p-4 rounded-xl min-h-[195px]">
          <HeartHandshake className="h-9 w-9 p-2 mb-4 text-white bg-[#2266C1] rounded-[8px]" />
          <span className="text-[#E9EAEC] font-pt max-md:text-xl lg:text-xl">
            Receba suporte amigável
          </span>
          <p className="text-[#D3D5D9] mt-2 text-sm">
            Nossa equipe estará sempre pronta para te atender para ajudar no que
            for preciso.
          </p>
        </div>
      </div>
    </section>
  );
}
