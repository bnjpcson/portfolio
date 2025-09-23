import AosInitializer from "@/components/aos-initializer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AboutPage() {
  const BannerSection = () => {
    return (
      <>
        <div className="flex flex-col w-full items-center justify-center shadow-md py-10">
          <div className="flex flex-col items-start w-full gap-5 max-w-2xl px-10">
            <h1 className="text-4xl font-bold text-center w-full">
              <span className="gradient-text" data-color="primary">
                About
              </span>{" "}
              <span className="gradient-text" data-color="foreground">
                Me
              </span>
            </h1>
            <p className="font-normal text-sm text-center">
              I&apos;m a passionate and detail-oriented software developer with
              professional experience building modern web, mobile, and desktop
              applications using different technologies and various tools. I
              specialize in creating scalable front-end and back-end systems,
              with a strong focus on clean architecture and user-centered
              design.
            </p>
            <p className="font-normal text-sm text-center">
              I took my degree in Information Technology, majoring in Web and
              Mobile Technologies, from Pangasinan State University. Since then,
              I&apos;ve worked with companies where I contributed to the design,
              development, and deployment of internal systems and websites.
            </p>
          </div>
        </div>
      </>
    );
  };

  const ExperienceSection = () => {
    const experiences = [
      {
        date: "Mar 2024 - Jun 2025",
        position: "Software Engineer",
        company_name: "FullSuite",
        duties: [
          "Designed and developed a responsive web application for the Compliance Team",
          "Optimized UI and UX design for improved user experience",
          "Developed RESTful APIs using ExpressJS and implemented Knex ORM for efficient database queries and data management",
          "Implemented form validations on both the front-end and back-end to prevent errors and enhance user experience",
          "Used React PDF to draft PDF files with multiple templates",
          "Created an approval trail functionality to track and record document filing",
          "Integrated Google Authentication for secure internal employee login",
          "Developed a role-based access control system with defined permissions",
          "Implemented Google Apps Script to automate workflows within Google Workspace (Docs, Sheets, Drive, etc.)",
          "Contributed to the project through all phases, from development to deployment",
          "Actively collaborated with the team, participating in and assisting with various projects",
        ],
      },
      {
        date: "Aug 2023 - Feb 2024",
        position: "Web Developer",
        company_name: "Addessa Corporation",
        duties: [
          "Added functionalities to company websites using Laravel and jQuery",
          "Revamped the company’s website with Laravel for the backend and VueJS and Vuetify for the frontend",
          "Ensured continuous functionality and performance of all company websites",
          "Managed file backups and regularly monitored statistics and status of deployed websites on web hosting platforms",
          "Provided technical support and assistance to colleagues for resolving company-related issues",
        ],
      },
      {
        date: "Mar 2023 - Jun 2023",
        position: "Intern",
        company_name: "Global Agility Solutions",
        duties: [
          "Designed and developed a company’s Web-based ID System using Laravel PHP Framework and C# Windows Form",
          "Provides troubleshooting and maintenance support for PCs and laptops, diagnosing and resolving hardware and software issues to ensure optimal functionality",
        ],
      },
    ];

    return (
      <>
        <div className="flex flex-col items-center w-full">
          <div className="flex flex-col px-5 items-center text-light min-h-screen max-w-6xl sm:px-20 md:px-40 lg:px-60">
            <div className="py-10 space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[8.75rem] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent w-full">
              {experiences.map((experience, index) => {
                return (
                  <div
                    className="relative"
                    key={`exp-${index}`}
                    data-aos="fade-up"
                  >
                    <div className="md:flex items-center md:space-x-4 mb-3">
                      <div className="flex items-center space-x-4 md:space-x-2 md:space-x-reverse">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white shadow md:order-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-10 h-10 text-primary"
                          >
                            <path
                              fillRule="evenodd"
                              d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <time className="font-semibold md:w-28">
                          {experience.date}
                        </time>
                      </div>
                      <h1 className="font-medium text-xl pl-14 md:pl-0 w-full">
                        {experience.position}
                      </h1>
                      <div className="pl-14 md:pl-0 w-full md:text-end italic font-medium text-md">
                        {experience.company_name}
                      </div>
                    </div>
                    <ul className="list-disc font-normal text-sm pl-14 md:pl-44 text-justify">
                      {experience.duties.map((duty, indx) => {
                        return (
                          <li key={`duty-${index}-${indx}`} className="py-0.5">
                            {duty}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="mt-16 z-0">
      <AosInitializer />
      {/* <div className="relative h-[60vh] w-full sm:h-[50vh]">
        <div className="absolute w-full h-[60vh] sm:h-[50vh]">
          <Aurora
            colorStops={["#F08838", "#B19EBF", "#5227FF"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
        </div>

        <div className="absolute w-full h-[60vh] sm:h-[50vh]">
          <BannerSection />
        </div>
      </div> */}
      <BackgroundBeamsWithCollision>
        <div className="w-full">
          <BannerSection />
        </div>
      </BackgroundBeamsWithCollision>

      <ExperienceSection />
    </div>
  );
}
