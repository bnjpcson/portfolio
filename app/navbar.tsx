import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";
import NavLinks, { NavSheet } from "./navlinks";

export default function NavBarPage() {
  return (
    <nav className="fixed z-50 inset-x-0 top-0 h-16 p-3 w-full shadow-sm flex flex-col items-center justify-center backdrop-blur-md bg-white/10 border-b border-b-white/20 max-w-[2560px] mx-auto">
      <div className="flex flex-row w-full justify-between items-center">
        <div className="flex flex-row gap-3">
          <NavSheet />
          <Link href={"/"} className="cursor-pointer">
            <div className="text-2xl font-bold tracking-widest">
              <span className="text-custom-blue gradient-text"  data-color="foreground">Bnj</span>
              <span className="text-primary gradient-text"  data-color="primary">pcson</span>
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
