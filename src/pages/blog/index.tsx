import { Search } from "@/components/Search";
import { PostCard } from "./components/Post-Card";
import { useRouter } from "next/router";

import { creatededPosts } from "./components/Createded-Posts";

export type PostProps = {
  post: {
    id: number;
    author: {
      name: string;
      avatar: string;
    };
    image: string;
    title: string;
    description: string;
    date: string;
    slug: string;
}[]
}

export default function Blog({post}:PostProps) {
  const router = useRouter()
  const query = router.query.q as string

  return (
    <section className="flex flex-col gap-14 max-w-[965px] mx-auto mt-20 px-2">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-end">
        <div>
          <span className="text-cyan-300 bg-cyan-800 uppercase font-medium text-[12px] py-[6px] px-3 rounded-[4px]">
            BLOG
          </span>
          <h2 className="text-[28px] font-bold text-[#E9EAEC] max-w-[358px] font-pt mt-3 md:max-w-[440px]">
            {query ? `Resultado para : ${query}`: 'Dicas e estratégias para impulsionar seu negócio'}
          </h2>
        </div>
        <Search />
      </div>
      <div className="grid grid-cols-1 gap-4 mx-auto md:grid-cols-2 md:gap-8 lg:grid-cols-3 mb-[104px]">
        <PostCard 
          post={post}
        />
      </div>
    </section>
  );
}

export const getStaticProps = (async () => {
  const post = creatededPosts.map((post) => {return post})
  
  return {props: {post}}
})

