import Projects from "./Projects";

export default function ProjectsPage() {
  return (
    <div className="mt-16 z-0">
      <div className="flex flex-col w-full bg-background py-10 shadow-md  items-center">
        <div className="flex flex-col w-full gap-5 text-center max-w-2xl px-10">
          <h1 className="text-4xl font-bold text-center w-full">
            <span className="text-primary">My</span> Projects
          </h1>
          <p className="font-normal text-md text-center">
            A showcase of my recent work, featuring web and mobile applications
            built with cutting-edge technologies and modern design principles.
          </p>
        </div>

        <Projects />
      </div>
    </div>
  );
}
