import { CircleX, SearchIcon } from "lucide-react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export function Search() {
  const router = useRouter();
  const query = router.query.q as string ?? '';
  const q = query.length > 0

  function handleSearch(e: React.FormEvent) {
    e.preventDefault()
    if(query.trim()) {
      router.push(`/blog?q=${encodeURIComponent(query)}`, undefined, {
        shallow: true,
        scroll: false
      })
    }
  }

  function handleQueryChange(e: React.ChangeEvent<HTMLInputElement>) {
    const query = e.target.value
    router.push(`/blog?q=${encodeURIComponent(query)}`, undefined, {
      shallow: true,
      scroll: false
    })
  }

  function resetForm() {
    router.push(`/blog`, undefined, {
      shallow: true,
      scroll: false
    })
  }

  return (
    <form onSubmit={handleSearch} className={`flex items-center gap-[2px] px-4 py-2 border border-[#20242C] rounded-[8px] hover:border-[#2266C1] transition-all duration-300 focus-within:border-[#2266C1] focus-within:text-[#2C85FC] text-[#93979E]`}>
      <SearchIcon 
      className={`mr-2 ${q ? 'text-[#2C85FC]' : ''}`} 
      size={16} />
      <input
        className="w-full placeholder:#93979E text-[#E9EAEC] bg-transparent border-0 outline-none"
        placeholder="Buscar"
        value={query}
        onChange={handleQueryChange}
        type="text"
      />
      {query && (
        <CircleX 
        onClick={resetForm}
        className="cursor-pointer text-[#93979E]"
        size={16} />
      )}
    </form>
  );
}
