import Link, { LinkProps } from "next/link";
import { Button } from "../ui/button";
import { NextRouter } from "next/router";
import SheetMenu from "../Sheet";

type NavLinkProps = {
  indexPage: NextRouter;
} & LinkProps;

export default function NavLink({ indexPage }: NavLinkProps) {
  return (
    <>
      <nav className="flex items-center gap-6 text-gray-100 font-medium">
        <Link
          className={`
            hidden md:block 
            ${indexPage.asPath == "/"
              ? "text-blue-500"
              : "text-gray-100 hover:text-[#7EA4D7]"}
            
            `
          }
          href="/"
        >
          Home
        </Link>
        <Link
          className={`
            hidden md:block 
            ${indexPage.asPath == "/blog"
              ? "text-blue-500"
              : "text-gray-100 hover:text-[#7EA4D7]"}
            
            `
          }
          href="/blog"
        >
          Blog
        </Link>
        <Button
          className="rounded-full text-sm md:text-base"
          variant="secondary"
          asChild
        >
          <Link href="/">Começar</Link>
        </Button>
        <SheetMenu
          indexPage={indexPage}
          href={""}
        />
      </nav>
    </>
  );
}
