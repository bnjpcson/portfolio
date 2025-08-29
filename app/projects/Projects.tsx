"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Stressio: A Self-Care Mobile Application",
      description:
        "Developed Stressio, a self-care mobile application for stress management as part of a capstone project. The app tracks users' daily mood and monthly Perceived Stress Scale (PSS) scores, and recommends personalized self-care activities. Built using the Flutter framework with Firebase Database for backend support.",
      technologies: ["Dart", "Flutter", "Firebase"],
      image: "/stressio.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/bnjpcson/stressio",
    },
    {
      id: 2,
      title: "ID Generation System",
      description:
        "Designed and developed Windows applications for employee ID generation. Created a user-friendly form to collect essential employee information for ID processing. Integrated digital pen and webcam support to capture employee signatures and photos seamlessly.",
      technologies: ["C# Windows Form Application"],
      image: "/id-mockup.jpg",
      demoUrl: "",
      githubUrl: "https://github.com/bnjpcson/id-system",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
    });
  }, []);

  return (
    <div className="px-5 sm:px-10 py-10 h-full">
      <div className="grid md:grid-cols-2 gap-8">
        {projects
          .slice()
          .reverse()
          .map((project) => (
            <div key={project.id} data-aos="zoom-in">
              <Card className="card-project h-full p-0 shadow-md">
                <div className="h-full flex flex-col justify-between">
                  <div className="flex flex-col">
                    {project.image != "" ? (
                      <div className="relative aspect-video overflow-hidden p-0 rounded-t-xl  w-full">
                        <Image
                          src={project.image}
                          alt={project.title} 
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                    ) : (
                      <div className="aspect-video relative overflow-hidden p-0 rounded-t-xl bg-secondary/30">
                        <div className="absolute inset-0 bg-gradient-primary opacity-20"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon color="gray" />
                        </div>
                      </div>
                    )}

                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 px-6 pb-6">
                    {project.demoUrl != "" && (
                      <Button
                        size="sm"
                        className="flex-1 cursor-pointer"
                        onClick={() => window.open(project.demoUrl, "_blank")}
                      >
                        Live Demo
                      </Button>
                    )}
                    {project.githubUrl != "" && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 cursor-pointer"
                        onClick={() => window.open(project.githubUrl, "_blank")}
                      >
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </div>
          ))}
      </div>
    </div>
  );
}
