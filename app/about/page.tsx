import AosInitializer from "@/components/aos-initializer";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import BannerSection from "./Banner";
import ExperienceSection from "./Experience";

export default function AboutPage() {

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
