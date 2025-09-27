import { Card, CardContent } from "@/components/ui/card";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import Link from "next/link";
import React from "react";
import { ContactForm } from "./contact-form";
import AosInitializer from "@/components/aos-initializer";

function ContactSection() {
  return (
    <div className="flex flex-col w-full bg-background py-16 items-center">
      <div
        className="flex flex-col w-full gap-3 text-center max-w-2xl px-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-center w-full">
          <span className="gradient-text" data-color="primary">
            Let&apos;s
          </span>{" "}
          <span className="gradient-text" data-color="foreground">
            Get in Touch
          </span>
        </h1>
        <p className="font-normal text-sm text-center">
          Fill out the form, and I&apos;ll get back to you as soon as possible.
        </p>
      </div>

      <div
        className="px-5 sm:px-10 py-10 h-full lg:px-24 w-full  max-w-4xl"
        data-aos="fade-up"
      >
        <Card className="w-full px-1 py-8 shadow-lg border">
          <CardContent>
            <ContactForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default function FooterPage() {
  return (
    <>
      <AosInitializer isOnce={false}/>
      <div className="relative h-full w-full overflow-hidden bg-red-500">
        <FlickeringGrid
          className="absolute inset-0 z-0 size-full w-full h-full p-0 m-0"
          squareSize={2}
          gridGap={4}
          color="#6B7280"
          maxOpacity={0.5}
          flickerChance={0.1}
        />
        <ContactSection />
      </div>

      <div className="w-full px-5 sm:px-14 md:px-20 lg:px-32 bg-secondary">
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
      </div>
    </>
  );
}
