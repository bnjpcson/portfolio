import AosInitializer from "@/components/aos-initializer";
import Awards from "./Awards";

export default function CertificatesPage() {
  return (
    <>
      <AosInitializer />
      <div className="mt-16 z-0">
        <div className="flex flex-col  w-full bg-background py-10 shadow-md  items-center">
          <div className="flex flex-col w-full gap-5 text-center max-w-2xl px-10">
            <h1 className="text-4xl font-bold text-center w-full">
              <span className="gradient-text" data-color="primary">
                Awards
              </span>{" "}
              <span className="gradient-text" data-color="foreground">
                & Certifications
              </span>
            </h1>
            <p className="font-normal text-sm text-center">
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
