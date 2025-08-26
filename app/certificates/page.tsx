import AosInitializer from "@/components/aos-initialer";
import Awards from "./Awards";

export default function CertificatesPage() {
  return (
    <>
      <AosInitializer />
      <div className="mt-16 z-0">
        <div className="flex flex-col  w-full bg-background py-10 shadow-md  items-center">
          <div className="flex flex-col w-full gap-5 text-center max-w-2xl px-10">
            <h1 className="text-4xl font-bold text-center w-full">
              <span className="text-primary">Awards</span> & Certifications
            </h1>
            <p className="font-normal text-md text-center">
              Showcasing validated skills through certifications, awards, and
              professional accomplishments.
            </p>
          </div>
          <Awards />
        </div>
      </div>
    </>
  );
}
