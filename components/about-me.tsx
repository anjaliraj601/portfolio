"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export function AboutMe() {
  return (
    <div className="min-h-screen bg-[#2A2550] text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/3 mb-8 md:mb-0">
            <Image
              src="https://utfs.io/f/ANXNxDLF9i8sVQPcgtsRodCphqlrnt6wYHL1Ba5PMEUbWJI0"
              alt="Profile picture"
              width={300}
              height={300}
              className="rounded-full border-8 border-[#45CFDD] w-[300px] h-[300px] object-cover"
            />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h1 className="text-5xl font-bold mb-4">
              About <span className="text-[#45CFDD]">Me</span>
            </h1>
            <h2 className="text-3xl font-semibold mb-4">
              Architect / UI-UX designer
            </h2>
            <p className="mb-6 text-lg">
              A dedicated 4th-year architecture student at NIT Patna. With a
              passion for innovative design and sustainable solutions, I'm
              committed to exploring the intersection of creativity and
              functionality in architecture. Here, you'll find a showcase of my
              projects, design concepts, and architectural explorations. Join me
              as I embark on this exciting journey to shape the future of our
              built environment.
            </p>
            <Link
              href={"/projects"}
              className="bg-[#45CFDD] text-[#2A2550] hover:bg-[#3BBECF] font-semibold px-6 py-2 rounded-md"
            >
              See more
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Architect",
              description:
                "I am an architect by profession. I specialize in designing and planning buildings and structures, ensuring both functionality and aesthetic appeal. My work involves collaborating with clients, engineers, and construction teams to bring innovative design concepts to life.",
            },
            {
              title: "UI/UX Designer",
              description:
                "I'm a UI/UX designer dedicated to creating user-friendly and visually engaging websites. I combine research, design, and testing to deliver intuitive and impactful digital experiences. Let's bring your vision to life!",
            },
            {
              title: "Graphic Designer",
              description:
                "I'm a passionate graphic designer dedicated to creating visually compelling designs. With a strong eye for detail and a drive for innovation, I transform ideas into engaging visuals that capture attention and communicate effectively.",
            },
          ].map((card, index) => (
            <div key={index} className="bg-[#3B3772] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">{card.title}</h3>
              <p>{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
