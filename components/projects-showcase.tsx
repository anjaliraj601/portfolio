"use client";

import Image from "next/image";

export function ProjectsShowcase() {
  const projects = [
    {
      src: "https://utfs.io/f/ANXNxDLF9i8sLfjnSvuwSnzXJmH6oLdutDq2Bbs7I1fN0ajY",
      alt: "Sports stadium project",
      title: "Sports Complex",
      description: "Ripples Effect : Sports complex inspired by ganga",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8se7lXSsw7CwzF5S3g49mq1UD2eZtLPOjrxIva",
      alt: "SPORTS HOSTEL",
      title: "SPORTS HOSTEL",
      description: "Hostel For Sports Person",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8s4ceBgLKRw0CVi8aF9Nh7fmTlBKngAGkHYjqD",
      alt: "Girls Hostel",
      title: "Girls Hostel",
      description: "Girls Hostel Design ",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8sLtXShybuwSnzXJmH6oLdutDq2Bbs7I1fN0aj",
      alt: "Architect Residence ",
      title: "Architect Residence",
      description: "Residence & office design for Architects ",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8svujl8BArBqmjUEWRpaP35xfClkdbe6o7MV9g",
      alt: "Housing Complex",
      title: "Housing Complex",
      description: "Housing Complex for HIG , MIG , LIG & EWS",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8stPcc3WgRj13a2vHXpwUSldWPQuqkc5yreomF",
      alt: "Interior Design",
      title: "Interior Design",
      description:
        "Interior Design :add elements that will calm your space and soothe your smile",
    },
  ];

  return (
    <div className="min-h-screen bg-[#2D2B4A] p-8 h-3">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-white">
        Our <span className="text-[#5FD5E0]">Projects</span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-2xl group"
          >
            <Image
              src={project.src}
              alt={project.alt}
              width={400}
              height={250}
              className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-x-0 bottom-0 h-2 bg-[#5FD5E0]"></div>
            <div className="absolute inset-0 bg-black bg-opacity-70 flex flex-col justify-center items-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-[#5FD5E0] text-xl font-bold mb-2">
                {project.title}
              </h3>
              <p className="text-white text-center">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
