import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex bg-background min-h-screen flex-col items-center justify-center px-6 py-12 text-center gap-4">
      <h1 className="text-6xl font-bold text-secondary-800">404</h1>
      <h2 className=" text-2xl font-semibold text-secondary-700">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <Link href="/" className={buttonVariants()}>
        Go back home
      </Link>
    </main>
  );
}
