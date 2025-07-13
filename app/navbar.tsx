import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import NavLinks, { NavSheet } from "./navlinks";

export default function NavBarPage() {
  return (
    <nav className="fixed z-50 inset-x-0 top-0 h-16 p-3 w-full shadow-sm flex flex-col items-center justify-center bg-background max-w-[2560px] mx-auto">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row gap-3">
          <NavSheet />

          <Link href={"/"} className="cursor-pointer">
            <div className="text-2xl font-bold tracking-widest">
              <span className="text-custom-blue">Bnj</span>
              <span className="text-primary">pcson</span>
            </div>
          </Link>
        </div>

        <NavLinks />

        <div className="">
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
}
