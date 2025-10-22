"use client";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { AlignJustify } from "lucide-react"

import { Button } from "../ui/button";

import Link, { LinkProps } from "next/link";

import { useState } from "react";

type SheetMenuProps = {
  indexPage: string
  href: string
} & LinkProps

export default function SheetMenu({indexPage}:SheetMenuProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger className="rounded-full bg-[#20242C] p-3" asChild>
          <Button>
            <AlignJustify />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className="text-[#E9EAEC] font-medium">Site.Set</SheetTitle>
          </SheetHeader>
          <SheetFooter>
            <div className="flex flex-col gap-3 mt-3">
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${indexPage === "/"
                  ? "text-blue-500"
                  : "text-gray-100 hover:text-[#7EA4D7]"}
                
                `
              }
              href="/"
            >
              Home
            </Link>
            <Link
              onClick={() => setIsOpen(!isOpen)}
              className={`
                ${indexPage === "/blog"
                  ? "text-blue-500"
                  : "text-gray-100 hover:text-[#7EA4D7]"}
                
                `
              }
              href="/blog"
            >
              Blog
            </Link>
            </div>

          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
