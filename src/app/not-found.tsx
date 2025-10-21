import { Button } from "@/components/ui/button";
import { FileQuestion, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound () {
  return (
    <div className="min-h-[400px] flex justify-center items-center">
      <div>
        <div className="flex flex-col items-center justify-center">
          <FileQuestion className="text-gray-200" size={64} />
          <div className="flex place-items-center">
            <h2 className="text-gray-300 font-bold text-[84px] -rotate-12">4</h2>
            <h2 className="text-gray-300 font-bold text-[84px] -rotate-12">04</h2>
          </div>
          <p className="text-gray-300 font-medium text-xl mb-8">Página não encontrada</p>
          <div className="flex items-center gap-3">
            <Button variant="primary" asChild>
              <Link className="text-gray-300 font-bold" href="/">
                Home
              </Link>
            </Button>
            <Button className="rounded-full" variant="secondary" asChild>
              <Link className="text-gray-950 font-medium" href="/blog">
                <Search size={16} />
                Pesquisar posts
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}