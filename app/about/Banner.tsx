export default function BannerSection(){
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
}