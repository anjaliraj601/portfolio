"use client";

import Image from "next/image";

export function ProjectsShowcase() {
  const projects = [
    {
      src: "https://utfs.io/f/ANXNxDLF9i8sL5U1WXuwSnzXJmH6oLdutDq2Bbs7I1fN0ajY",
      alt: "Sports stadium project",
      title: "Sports Complex",
      description: "A modern stadium with multi-purpose facilities",
    },
    {
      src: "https://utfs.io/f/ANXNxDLF9i8se7lXSsw7CwzF5S3g49mq1UD2eZtLPOjrxIva",
      alt: "SPORTS HOSTEL",
      title: "SPORTS HOSTEL",
      description: "Sustainable urban living spaces",
    },
    {
      src: "/placeholder.svg?height=250&width=400",
      alt: "Urban planning project",
      title: "Urban Planning",
      description: "Innovative city layout and green spaces",
    },
    {
      src: "/placeholder.svg?height=250&width=400",
      alt: "Modern house project",
      title: "Modern House",
      description: "Contemporary design with eco-friendly features",
    },
    {
      src: "/placeholder.svg?height=250&width=400",
      alt: "Apartment complex project",
      title: "Apartment Complex",
      description: "High-rise living with panoramic views",
    },
    {
      src: "/placeholder.svg?height=250&width=400",
      alt: "Conceptual building design",
      title: "Conceptual Design",
      description: "Futuristic architecture pushing boundaries",
    },
  ];

  return (
    <div className="min-h-screen bg-[#2D2B4A] p-8">
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
