import Link from "next/link";

import Image from "next/image";

import { useRouter } from "next/router";
import { Inbox } from "lucide-react";

import { PostProps } from "@/pages/blog"; 

export function PostCard({ post }: PostProps) {
  const router = useRouter();
  const query = (router.query.q as string) ?? "";
  const posts = post.filter((post) =>
    post.title.toLocaleLowerCase().includes(query)
  );
  const DateFormat = new Intl.DateTimeFormat("pt-BR");

  return (
    <>
      {posts &&
        posts.map((p) => (
          <Link href={`/blog/${p.slug}`} key={p.id}>
            <div className="bg-[#14161A] border border-[#20242C] rounded-xl max-w-[305px] min-h-[310px] p-2 relative transition-all duration-300 hover:border-[#2266C1]">
              <Image
                className="w-full"
                src={p.image}
                alt={p.title}
                height={290}
              />
              <span className="absolute top-0 right-0 pr-3 pl-2 pb-[6px] pt-[10px] text-[12px] bg-[#14161A] text-[#93979E] rounded-tr-xl rounded-bl-[10px]">
                {DateFormat.format(new Date(p.date))}
              </span>

              <h2 className="text-[#E9EAEC] text-[16px] font-bold font-pt mt-4">
                {p.title}
              </h2>
              <p className="text-[12px] text-[#93979E] mt-2 max-h-[53px] overflow-hidden">
                {p.description}
              </p>
              <div className="border-t border-[#20242C] mt-3">
                <div>
                  <div className="flex items-center gap-2 text-[12px] text-[#93979E] mt-3 mb-2">
                    <Image
                      className="h-5 w-5 rounded-full"
                      src={p.author.avatar}
                      alt={p.author.name}
                      height={20}
                      width={20}
                    />
                    <span>{p.author.name}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      {posts.length === 0 && (
        <div className="flex flex-col items-center justify-center mx-auto col-span-3 border border-dashed p-5">
          <Inbox className="text-cyan-400" size={44} />
          <p className="mt-3 text-[#E9EAEC] text-center">
            Não possível completar sua busca, por favor verifique o título e
            tente novamente!
          </p>
        </div>
      )}
    </>
  );
}
