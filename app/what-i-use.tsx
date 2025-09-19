import LogoLoop from "@/components/LogoLoop";
import type { SimpleIcon as SimpleIconType } from "simple-icons";

import {
  siHtml5,
  siCss,
  siJavascript,
  siBootstrap,
  siTailwindcss,
  siPhp,
  siLaravel,
  siFlutter,
  siVuedotjs,
  siVuetify,
  siReact,
  siNextdotjs,
  siTypescript,
  siNodedotjs,
  siMysql,
  siPostgresql,
  siFirebase,
  siGoogleappsscript,
  siGit,
  siGithub,
  siPostman,
  siFigma,
} from "simple-icons/icons";

interface SimpleIconProps {
  icon: SimpleIconType;
  size?: number;
  className?: string;
  fillOverride?: string;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({ icon, size = 42 }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill={`#${icon.hex}`}
    aria-label={icon.title}
  >
    <path d={icon.path} />
  </svg>
);

export default function WhatIUse() {
  const techLogosTop = [
    {
      node: <SimpleIcon icon={siHtml5} />,
      title: "HTML5",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
    },
    {
      node: <SimpleIcon icon={siCss} />,
      title: "CSS3",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    },
    {
      node: <SimpleIcon icon={siJavascript} />,
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      node: <SimpleIcon icon={siBootstrap} />,
      title: "Bootstrap 5",
      href: "https://getbootstrap.com/",
    },
    {
      node: <SimpleIcon icon={siTailwindcss} />,
      title: "Tailwind CSS",
      href: "https://tailwindcss.com/",
    },
    {
      node: <SimpleIcon icon={siPhp} />,
      title: "PHP",
      href: "https://www.php.net/",
    },
    {
      node: <SimpleIcon icon={siLaravel} />,
      title: "Laravel",
      href: "https://laravel.com/",
    },
    {
      node: <SimpleIcon icon={siFlutter} />,
      title: "Flutter",
      href: "https://flutter.dev/",
    },
    {
      node: <SimpleIcon icon={siVuedotjs} />,
      title: "Vue.js",
      href: "https://vuejs.org/",
    },
    {
      node: <SimpleIcon icon={siVuetify} />,
      title: "Vuetify",
      href: "https://vuetifyjs.com/",
    },
  ];

  const techLogosBottom = [
    {
      node: <SimpleIcon icon={siReact} />,
      title: "React JS",
      href: "https://react.dev/",
    },
    {
      node: <SimpleIcon icon={siNextdotjs} />,
      title: "Next.js",
      href: "https://nextjs.org/",
    },
    {
      node: <SimpleIcon icon={siTypescript} />,
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
    },
    {
      node: <SimpleIcon icon={siNodedotjs} />,
      title: "Node.js",
      href: "https://nodejs.org/",
    },
    {
      node: <SimpleIcon icon={siMysql} />,
      title: "MySQL",
      href: "https://www.mysql.com/",
    },
    {
      node: <SimpleIcon icon={siPostgresql} />,
      title: "PostgreSQL",
      href: "https://www.postgresql.org/",
    },
    {
      node: <SimpleIcon icon={siFirebase} />,
      title: "Firebase",
      href: "https://firebase.google.com/",
    },
    {
      node: <SimpleIcon icon={siGoogleappsscript} />,
      title: "Google Apps Script",
      href: "https://developers.google.com/apps-script",
    },
    {
      node: <SimpleIcon icon={siGit} />,
      title: "Git",
      href: "https://git-scm.com/",
    },
    {
      node: <SimpleIcon icon={siGithub} />,
      title: "GitHub",
      href: "https://github.com/",
    },
    {
      node: <SimpleIcon icon={siPostman} />,
      title: "Postman",
      href: "https://www.postman.com/",
    },
    {
      node: <SimpleIcon icon={siFigma} />,
      title: "Figma",
      href: "https://www.figma.com/",
    },
  ];

  return (
    <div className="flex flex-col  w-full bg-secondary py-18 shadow-md  items-center">
      <div
        className="flex flex-col w-full gap-3 text-center max-w-xl px-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-center w-full">
          <span className="gradient-text" data-color="primary">
            What
          </span>{" "}
          <span className="gradient-text" data-color="foreground">
            I Use
          </span>
        </h1>
        <p className="font-normal text-sm text-center">
          Tools and Technologies I use to build efficient, scalable, and modern
          app solutions.
        </p>
      </div>

      <div className="w-full h-full flex flex-col gap-5 py-10">
        <div className="h-full relative overflow-hidden w-full" data-aos="zoom-in">
          <LogoLoop
            logos={techLogosTop}
            speed={20}
            direction="right"
            logoHeight={30}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--secondary)"
            ariaLabel="Technologies Top"
          />
        </div>
        <div className="h-full relative overflow-hidden  w-full" data-aos="zoom-in">
          <LogoLoop
            logos={techLogosBottom}
            speed={20}
            direction="left"
            logoHeight={30}
            gap={50}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="var(--secondary)"
            ariaLabel="Technologies Bottom"
          />
        </div>
      </div>
    </div>
  );
}
