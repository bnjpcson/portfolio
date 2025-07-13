import Link from "next/link";
import React from "react";

export default function FooterPage() {
  return (
    <footer className="w-full flex flex-col gap-5 text-sm">
      <div className="pt-12 w-full flex flex-col md:flex-row gap-7 justify-around">
        <div className="flex flex-col gap-2 w-full">
          <h1 className="font-bold text-xl">Let&lsquo;s Connect</h1>
          <p className="font-normal text-md">
            Always interested in new opportunities and collaborations.
            Let&lsquo;s build something amazing together.
          </p>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-4">
          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-semibold text-md">Quick Links</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/about"}>About</Link>
              </li>
              <li>
                <Link href={"/projects"}>Projects</Link>
              </li>
              <li>
                <Link href={"/certificates"}>Certificates</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 w-full">
            <h1 className="font-semibold text-md">Socials</h1>
            <ul className="flex flex-col gap-2">
              <li>
                <Link href={"mailto:pecsonbenjiea@gmail.com"}>
                  pecsonbenjiea@gmail.com
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.linkedin.com/in/bnjpcson"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link
                  href={"https://github.com/bnjpcson"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.facebook.com/bnjpcson"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Facebook
                </Link>
              </li>
              <li>
                <Link
                  href={"https://www.instagram.com/bnjpcson"}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Instagram
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex flex-col items-center justify-center pt-4 pb-8">
        <div>
          &copy; {new Date().getFullYear()}
          <span className="font-bold"> Benjie Pecson</span>. All Rights
          Reserved.
        </div>
      </div>
    </footer>
  );
}
