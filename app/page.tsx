import RotatingText from "@/components/rotating-text";
import Squares from "@/components/squares";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhatIDoSection from "./what-i-do";
import AosInitializer from "@/components/aos-initializer";
import WhatIUse from "./what-i-use";


function BannerSection() {

  const facebookIcon = (
    <svg
      viewBox="0 0 20 20"
      className="w-6 text-foreground"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6.39703 17.997V9.80099H9.16203L9.57303 6.59199H6.39703V4.54799C6.39703 3.62199 6.65503 2.98799 7.98403 2.98799H9.66803V0.126986C8.84867 0.0391771 8.02508 -0.00322112 7.20103 -1.39392e-05C4.75703 -1.39392e-05 3.07903 1.49199 3.07903 4.23099V6.58599H0.332031V9.79499H3.08503V17.997H6.39703Z" />
    </svg>
  );
  const githubIcon = (
    <svg
      className="w-6 text-foreground"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.026 0C4.517 0 0.052002 4.465 0.052002 9.974C0.052002 14.38 2.909 18.119 6.873 19.439C7.372 19.529 7.552 19.222 7.552 18.958C7.552 18.721 7.544 18.093 7.541 17.262C4.766 17.864 4.18 15.924 4.18 15.924C3.728 14.772 3.073 14.465 3.073 14.465C2.168 13.846 3.142 13.86 3.142 13.86C4.144 13.93 4.669 14.888 4.669 14.888C5.559 16.412 7.005 15.972 7.571 15.717C7.662 15.072 7.922 14.632 8.206 14.383C5.992 14.132 3.664 13.276 3.664 9.453C3.664 8.366 4.053 7.474 4.688 6.778C4.587 6.525 4.242 5.51 4.787 4.138C4.787 4.138 5.624 3.869 7.529 5.159C8.3426 4.93767 9.18184 4.8247 10.025 4.823C10.8682 4.82437 11.7075 4.93735 12.521 5.159C14.427 3.868 15.263 4.138 15.263 4.138C15.808 5.51 15.466 6.525 15.362 6.778C16.002 7.474 16.386 8.365 16.386 9.453C16.386 13.286 14.056 14.128 11.834 14.375C12.189 14.683 12.509 15.291 12.509 16.221C12.509 17.555 12.497 18.631 12.497 18.958C12.497 19.225 12.675 19.535 13.184 19.437C17.146 18.115 20 14.379 20 9.974C20 4.465 15.535 0 10.026 0Z"
      />
    </svg>
  );
  const instagramIcon = (
    <svg
      className="w-6 text-foreground"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8.999 4.37701C7.77264 4.37701 6.59651 4.86418 5.72934 5.73135C4.86217 6.59852 4.375 7.77465 4.375 9.00101C4.375 10.2274 4.86217 11.4035 5.72934 12.2707C6.59651 13.1378 7.77264 13.625 8.999 13.625C10.2254 13.625 11.4015 13.1378 12.2687 12.2707C13.1358 11.4035 13.623 10.2274 13.623 9.00101C13.623 7.77465 13.1358 6.59852 12.2687 5.73135C11.4015 4.86418 10.2254 4.37701 8.999 4.37701ZM8.999 12.004C8.20229 12.004 7.43821 11.6875 6.87485 11.1242C6.31149 10.5608 5.995 9.79672 5.995 9.00001C5.995 8.2033 6.31149 7.43923 6.87485 6.87587C7.43821 6.31251 8.20229 5.99601 8.999 5.99601C9.79571 5.99601 10.5598 6.31251 11.1231 6.87587C11.6865 7.43923 12.003 8.2033 12.003 9.00001C12.003 9.79672 11.6865 10.5608 11.1231 11.1242C10.5598 11.6875 9.79571 12.004 8.999 12.004Z" />
      <path d="M13.806 5.28503C14.4014 5.28503 14.884 4.80239 14.884 4.20703C14.884 3.61166 14.4014 3.12903 13.806 3.12903C13.2107 3.12903 12.728 3.61166 12.728 4.20703C12.728 4.80239 13.2107 5.28503 13.806 5.28503Z" />
      <path d="M17.533 3.111C17.3015 2.51319 16.9477 1.97029 16.4943 1.51706C16.0409 1.06384 15.4979 0.710276 14.9 0.479005C14.2003 0.216362 13.4611 0.074346 12.714 0.0590048C11.751 0.0170048 11.446 0.00500488 9.00395 0.00500488C6.56195 0.00500488 6.24895 0.00500478 5.29395 0.0590048C4.54734 0.0735616 3.80871 0.215606 3.10995 0.479005C2.51189 0.710006 1.96872 1.06348 1.51529 1.51673C1.06186 1.96999 0.708182 2.51303 0.476953 3.111C0.214258 3.81062 0.0725676 4.54984 0.0579531 5.297C0.0149531 6.259 0.00195312 6.564 0.00195312 9.007C0.00195312 11.449 0.00195312 11.76 0.0579531 12.717C0.0729531 13.465 0.213953 14.203 0.476953 14.904C0.708831 15.5018 1.06285 16.0446 1.51639 16.4978C1.96993 16.951 2.51302 17.3046 3.11095 17.536C3.80839 17.8092 4.54732 17.9614 5.29595 17.986C6.25895 18.028 6.56395 18.041 9.00595 18.041C11.448 18.041 11.761 18.041 12.716 17.986C13.4631 17.9708 14.2022 17.8291 14.902 17.567C15.4997 17.3352 16.0426 16.9813 16.4959 16.528C16.9493 16.0746 17.3031 15.5318 17.535 14.934C17.798 14.234 17.939 13.496 17.954 12.748C17.997 11.786 18.01 11.481 18.01 9.038C18.01 6.595 18.01 6.285 17.954 5.328C17.9423 4.57028 17.7999 3.82025 17.533 3.111ZM16.315 12.643C16.3085 13.2193 16.2033 13.7902 16.004 14.331C15.8538 14.7199 15.6239 15.073 15.329 15.3677C15.0342 15.6624 14.6809 15.8921 14.292 16.042C13.7572 16.2405 13.1923 16.3456 12.622 16.353C11.672 16.397 11.404 16.408 8.96795 16.408C6.52995 16.408 6.28095 16.408 5.31295 16.353C4.74288 16.346 4.17828 16.2408 3.64395 16.042C3.25364 15.893 2.89895 15.6637 2.60284 15.369C2.30673 15.0742 2.07579 14.7206 1.92495 14.331C1.7284 13.7961 1.62326 13.2318 1.61395 12.662C1.57095 11.712 1.56095 11.444 1.56095 9.00801C1.56095 6.57101 1.56095 6.322 1.61395 5.353C1.62042 4.77703 1.72561 4.20642 1.92495 3.666C2.22995 2.877 2.85495 2.256 3.64395 1.954C4.17854 1.75614 4.74298 1.65097 5.31295 1.643C6.26395 1.6 6.53095 1.588 8.96795 1.588C11.405 1.588 11.655 1.588 12.622 1.643C13.1924 1.64987 13.7573 1.75508 14.292 1.954C14.6809 2.10428 15.0341 2.33421 15.3289 2.62903C15.6238 2.92386 15.8537 3.27708 16.004 3.666C16.2005 4.20095 16.3056 4.76516 16.315 5.335C16.358 6.286 16.369 6.553 16.369 8.99C16.369 11.426 16.369 11.688 16.326 12.644H16.315V12.643Z" />
    </svg>
  );
  const linkedinIcon = (
    <svg
      className="w-6 text-foreground"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M2.98304 5.19698C4.19144 5.19698 5.17104 4.21738 5.17104 3.00898C5.17104 1.80058 4.19144 0.820984 2.98304 0.820984C1.77464 0.820984 0.795044 1.80058 0.795044 3.00898C0.795044 4.21738 1.77464 5.19698 2.98304 5.19698Z" />
      <path d="M7.23697 6.85499V18.994H11.006V12.991C11.006 11.407 11.304 9.87299 13.268 9.87299C15.205 9.87299 15.229 11.684 15.229 13.091V18.995H19V12.338C19 9.06799 18.296 6.55499 14.474 6.55499C12.639 6.55499 11.409 7.56199 10.906 8.51499H10.855V6.85499H7.23697ZM1.09497 6.85499H4.86997V18.994H1.09497V6.85499Z" />
    </svg>
  );

  return (
    <div className="relative h-[75vh]">
      <div className="absolute h-[75vh] w-full bg-gray-300 dark:bg-gray-900/90 ">
        <Squares
          speed={0.2}
          squareSize={80}
          direction="down" // up, down, left, right, diagonal
          borderColor="#8c8891"
          hoverFillColor="#8c8891"
        />
      </div>
      <div className="absolute flex flex-col items-center w-full h-full justify-center">
        <div className="flex flex-col justify-center items-center w-full sm:px-14 md:px-20 lg:px-32">
          <div className="flex flex-col md:flex-row justify-center items-start w-full px-5 ">
            <div className="flex flex-col w-full gap-3 h-full justify-center">
              <div className="relative size-20 overflow-hidden rounded-full md:hidden">
                <Image
                  src={"/profile.jpg"}
                  alt={"Profile"}
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-bold text-5xl flex flex-col items-start gap-3">
                <RotatingText
                  texts={["Web", "Mobile", "Software"]}
                  mainClassName="px-2 sm:px-2 md:px-3 bg-primary text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{
                    type: "spring",
                    damping: 30,
                    stiffness: 400,
                  }}
                  rotationInterval={2000}
                />
                Developer
              </h1>
              <p className="font-normal text-md">
                Hi! I&lsquo;m Benjie, specialized in web and mobile
                technologies.
              </p>
              <div className="flex flex-row gap-5 py-5">
                <Link
                  href={"/projects"}
                  className="cursor-pointer border-2 font-normal text-sm border-foreground bg-transparent text-foreground hover:bg-foreground hover:text-background rounded-sm px-3 py-1"
                >
                  View my projects
                </Link>
                <a
                  href={"/files/BENJIE%20PECSON%20-%20Resume.pdf"}
                  target="_blank"
                  className="cursor-pointer border-2 font-medium text-sm border-primary bg-transparent text-primary hover:bg-primary hover:text-background rounded-sm px-3 py-1"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
              </div>
              <div className="flex flex-row w-full justify-between pr-5">
                <Link
                  href="https://www.linkedin.com/in/bnjpcson/"
                  target="_blank"
                  aria-label="LinkedIn URL"
                >
                  {linkedinIcon}
                </Link>
                <Link
                  href="https://github.com/bnjpcson"
                  target="_blank"
                  aria-label="GitHub URL"
                >
                  {githubIcon}
                </Link>
                <Link
                  href="https://www.facebook.com/bnjpcson"
                  target="_blank"
                  aria-label="Facebook URL"
                >
                  {facebookIcon}
                </Link>
                <Link
                  href="https://www.instagram.com/bnjpcson/"
                  target="_blank"
                  aria-label="Instagram URL"
                >
                  {instagramIcon}
                </Link>
              </div>
            </div>
            <div className="md:flex flex-col justify-center items-center w-2/3 hidden h-full">
              <div className="relative size-75 overflow-hidden rounded-full">
                <Image
                  src={"/profile.jpg"}
                  alt={"Profile"}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <AosInitializer />
      <div className="mt-16 z-0">
        <BannerSection />
        <WhatIDoSection />
        <WhatIUse />
      </div>
    </>
  );
}
