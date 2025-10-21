import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import Image from "next/image";
import Link from "next/link";

import { creatededPosts } from "./components/Createded-Posts";

import { Github, Instagram, Linkedin, LinkIcon } from "lucide-react";

import { GetStaticPaths, GetStaticPropsContext } from "next";

export type SlugProps = {
  post: {
    date: string;
    description: string;
    id: number;
    image: string;
    slug: string;
    title: string;
    author: {
      name: string;
      avatar: string;
    };
  };
};

type Params = { slug: string };

export default function Slug({ post }: SlugProps) {
  const DateFormat = new Intl.DateTimeFormat("pt-BR");
  return (
    <div className="mx-auto max-w-[966px] px-2.5 mt-12 mb-[108px]">
      <div className="mx-auto px-2.5 my-12">
        <div className="hidden w-fit md:block">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link href="/blog">Blog</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink className="text-[#2C85FC]">Post</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div className="flex flex-col-reverse md:flex-row items-start gap-6">
          {post && (
            <div className=" mt-8 bg-[#14161A] rounded-t-[12px]" key={post.id}>
              <figure className="mb-12 lg:w-[719px]">
                <Image
                  className="rounded-t-[8px]"
                  alt={post.title}
                  src={post.image}
                  width={719}
                  height={264}
                />
              </figure>
              <div className="px-6 mt-8 mb-7 md:px-7 lg:px-16 lg:pb-12">
                <h1 className="max-sm:text-base text-[20px] lg:text-[32px] font-bold font-pt text-[#E9EAEC]">
                  {post.title}
                </h1>
                <div className="flex items-center gap-3 mt-8 mb-12">
                  <figure className="h-9 w-9 rounded-full">
                    <Image
                      src={post.author.avatar}
                      alt={post.author.name}
                      height={36}
                      width={36}
                    />
                  </figure>
                  <div className="flex flex-col gap-1">
                    <strong className="max-sm:text-[12px] text-sm text-[#D3D5D9]">
                      {post.author.name}
                    </strong>
                    <span className="text-[12px] text-[#93979E]">
                      publicado em {DateFormat.format(new Date(post.date))}
                    </span>
                  </div>
                </div>
                <p className="text-sm text-[#D3D5D9]">{post.description}</p>
              </div>
            </div>
          )}
          <div className="flex items-center justify-between w-full mt-7">
            <div className="mt-5 md:hidden">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/blog">Blog</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink className="text-[#2C85FC]">
                      Post
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div>
              <strong className="hidden md:block text-base font-pt font-bold text-[#FAFAFA] mb-[20px]">
                Compartilhar
              </strong>
              <div className="flex items-center md:flex-col gap-1 md:gap-2 mt-5 w-full">
                <Link
                  className="flex items-center w-fit md:min-w-[223px] gap-2 text-[#D3D5D9] text-sm font-medium transition-all duration-400 hover:border-[#2C85FC] outline-none focus-within:border-[#2C85FC] border border-[#20242C] rounded-[8px] p-3 md:px-4 md:py-1"
                  href="https://www.instagram.com/alisonbetini/"
                  target="_blank"
                >
                  <Instagram size={16} />
                  <span className="hidden  md:block">Instagram</span>
                </Link>
                <Link
                  className="flex items-center w-fit md:min-w-[223px] gap-2 text-[#D3D5D9] text-sm font-medium transition-all duration-400 hover:border-[#2C85FC] outline-none focus-within:border-[#2C85FC] border border-[#20242C] rounded-[8px] p-3 md:px-4 md:py-1"
                  href="https://www.linkedin.com/in/alison-betini-334807199/"
                  target="_blank"
                >
                  <Linkedin size={16} />
                  <span className="hidden  md:block">Linkedin</span>
                </Link>
                <Link
                  className="flex items-center w-fit md:min-w-[223px] gap-2 text-[#D3D5D9] text-sm font-medium transition-all duration-400 hover:border-[#2C85FC] outline-none focus-within:border-[#2C85FC] border border-[#20242C] rounded-[8px] p-3 md:px-4 md:py-1"
                  href="https://github.com/AlisonMaciel"
                  target="_blank"
                >
                  <Github size={16} />
                  <span className="hidden  md:block">Github</span>
                </Link>
                <Link
                  className="flex items-center w-fit md:min-w-[223px] gap-2 text-[#D3D5D9] text-sm font-medium transition-all duration-400 hover:border-[#2C85FC] outline-none focus-within:border-[#2C85FC] border border-[#20242C] rounded-[8px] p-3 md:px-4 md:py-1"
                  href=""
                  target="_blank"
                >
                  <LinkIcon size={16} />
                  <span className="hidden  md:block">Copy</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const paths = creatededPosts.map((post) => ({ params: { slug: post.slug } }));
  return { paths, fallback: false };
};

export const getStaticProps = async (
  context: GetStaticPropsContext<Params>
) => {
  const slug = context.params?.slug;
  const post = creatededPosts.find((p) => p.slug === slug);

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};
