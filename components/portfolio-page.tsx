"use client";

import { Button } from "@/components/ui/button";
import { downloadFileByURL } from "@/lib/downloadPDF";
import { Instagram, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

export function PortfolioPage() {
  const [loading, setLoading] = useState(false);
  async function downloadFile() {
    setLoading(true);
    const { success } = await downloadFileByURL(
      "https://utfs.io/f/ANXNxDLF9i8sjnF5wqDKOUZxq2tDm0fyJPczbpCXWlE8da5G",
      "Anjali_Raj",
      "pdf"
    );
    if (success) {
      toast.success("File downloaded successfully!");
    } else {
      toast.error("Failed to download file!");
    }

    setLoading(false);
  }
  return (
    <div className="min-h-screen bg-[#1E1B2E] text-white md:px-20">
      <main className="container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl mb-4">Hello it's Me</h2>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Anjali Raj</h1>
          <h3 className="text-2xl md:text-3xl mb-6">
            And I'm an{" "}
            <span className="text-cyan-400">Architect / UI-UX designer</span>
          </h3>
          <p className="mb-8 max-w-lg">
            Welcome to my website! I'm Anjali Raj, an architect and UI/UX
            designer with a passion for blending functionality and aesthetics.
            With a background in architecture and a keen eye for design, I merge
            architectural principles with modern design techniques to deliver
            exceptional results.
          </p>
          <div className="flex space-x-4 mb-8">
            <Link
              href="https://www.linkedin.com/in/anjaliraj09"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300"
            >
              <Linkedin size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/anjali__raj09?utm_source=qr&igsh=dm9teXY1NXlzMjk4"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="mailto:anjaliraj0922@gmail.com"
              target="_blank"
              className="text-cyan-400 hover:text-cyan-300"
            >
              <Mail size={24} />
            </Link>
          </div>
          <Button
            className="bg-cyan-400 hover:bg-cyan-500 text-black"
            onClick={downloadFile}
            disabled={loading}
          >
            {loading ? "Downloading..." : "Download Resume"}
          </Button>
        </div>
        <div className="lg:w-1/2 relative mt-12 lg:mt-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-sky-300 absolute top-0 right-0 -z-10"></div>
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-sky-300 absolute bottom-0 right-20 -z-10"></div>
          <div className="relative z-10 w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden bg-sky-300">
            <Image
              src="https://utfs.io/f/1UHzy064GsUIvIeeYLJ7fCHp8XU9goKY02Tn3hb5sc6N1qJZ"
              alt="Anjali Raj"
              layout="fill"
              objectFit="cover"
              className="rounded-full z-10"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
