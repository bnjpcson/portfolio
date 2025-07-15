"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const currentPath = usePathname();

  return (
    <div className="hidden md:flex">
      <ul className="flex flex-row gap-10 font-normal text-md">
        <li
          className={`${currentPath == "/" && "border-primary border-b-2"} p-1`}
        >
          <Link href={"/"} aria-label="Home">Home</Link>
        </li>
        <li
          className={`${
            currentPath == "/about" && "border-primary border-b-2"
          } p-1`}
        >
          <Link href={"/about"} aria-label="About">About</Link>
        </li>
        <li
          className={`${
            currentPath == "/projects" && "border-primary border-b-2"
          } p-1`}
        >
          <Link href={"/projects"} aria-label="Projects">Projects</Link>
        </li>
        <li
          className={`${
            currentPath == "/certificates" && "border-primary border-b-2"
          } p-1`}
        >
          <Link href={"/certificates"} aria-label="Certificates">Certificates</Link>
        </li>
      </ul>
    </div>
  );
}

export function NavSheet() {
  const currentPath = usePathname();
  const customStyle = (nav: string) => {
    if (nav == currentPath)
      return "px-2 py-2 hover:bg-primary rounded hover:text-white bg-primary text-secondary dark:text-foreground  cursor-pointer";

    return "px-2 py-2 hover:bg-primary rounded hover:text-secondary dark:hover:text-foreground cursor-pointer";
  };
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="cursor-pointer" aria-label="Hamburger Menu">
            <AlignJustify className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader className=" h-16 shadow-sm">
            <SheetTitle>
              <SheetClose asChild>
                <Link href={"/"} className="cursor-pointer">
                  <div className="text-2xl font-bold tracking-widest">
                    <span className="text-custom-blue">Bnj</span>
                    <span className="text-primary">pcson</span>
                  </div>
                </Link>
              </SheetClose>
            </SheetTitle>
          </SheetHeader>
          <div className="grid grid-cols-1 gap-3 px-3">
            <SheetClose asChild>
              <Link href={"/"} className={customStyle("/")}>
                Home
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/about"} className={customStyle("/about")}>
                About
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link href={"/projects"} className={customStyle("/projects")}>
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                href={"/certificates"}
                className={customStyle("/certificates")}
              >
                Certificates
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
