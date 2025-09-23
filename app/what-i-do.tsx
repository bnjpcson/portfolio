"use client";

import { AppWindowMac, Monitor, Smartphone } from "lucide-react";

export default function WhatIDoSection() {
  const services = [
    {
      id: 1,
      name: "Web App Development",
      desc: "I build dynamic, scalable web applications using various programming languages and tools, delivering responsive, modern user experiences with a strong focus on performance and usability.",
      icon: <AppWindowMac color="oklch(.705 .213 47.604)" />,
    },
    {
      id: 2,
      name: "Mobile App Development",
      desc: "I build mobile apps using Flutter, ensuring smooth and consistent user interfaces across all platforms.",
      icon: <Smartphone color="oklch(.705 .213 47.604)" />,
    },
    {
      id: 3,
      name: "Desktop App Development",
      desc: "I build desktop apps using C# Windows Form Application, focusing on creating efficient, user-friendly interfaces for Windows-based systems.",
      icon: <Monitor color="oklch(.705 .213 47.604)" />,
    },
  ];

  return (
    <div className="flex flex-col  w-full bg-background py-18 shadow-md  items-center">
      <div
        className="flex flex-col w-full gap-3 text-center max-w-2xl px-10"
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-bold text-center w-full">
          <span className="gradient-text" data-color="primary">
            What
          </span>{" "}
          <span className="gradient-text" data-color="foreground">
            I Do
          </span>
        </h1>
        <p className="font-normal text-sm text-center">
          Delivering scalable solutions across web, mobile, and desktop using
          modern, efficient tech stacks.
        </p>
      </div>

      <div className="px-5 sm:px-10 py-5 h-full lg:px-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 my-6 w-full">
          {services.map((service) => {
            return (
              <div
                className="flex flex-col bg-background shadow-md border rounded-lg w-full p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                key={service.id}
                data-aos="zoom-in"
              >
                <div className="flex items-center mb-4 flex-row">
                  {service.icon}
                  <h1
                    className="ml-3 text-lg font-semibold leading-tight gradient-text"
                    data-color="foreground"
                  >
                    {service.name}
                  </h1>
                </div>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
