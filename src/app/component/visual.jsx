"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";

const featuredProjects = [
  {
    title: "Sea Foodco",
    description: (
      <>
        A full-featured landing page and ordering platform for a seafood restaurant, built from the ground up with Next.js and Tailwind CSS. The project features a dynamic menu display with real-time availability tracking, with stripe integration.
      </>
    ),
    tags: ["Nextjs", "Tailwind", "Typscript", "Stripe"],
    imageAlt: "Food App preview",
    images: ["/food1.png", "/food2.png", "/food3.png"],
    imageBg: "#1e4d5c",
    align: "right",
  },
  {
    title: "CMAS",
    description: "CMAS is a web-based academic result management system designed for Computer Science departments in Nigerian universities. It manages the complete lifecycle of student academic records from course registration through score entry, approval, GPA/CGPA computation, and transcript generation.",
    tags: ["Next.js", "Tailwind CSS", "Motion", "Portfolio"],
    imageAlt: "My Website preview",
    images: ["/cmas.png", "/cmas2.png", "/cmas3.png"],
    imageBg: "#0d2b1f",
    align: "left",
  },
  {
    title: "Cast",
    description:
      "A modern marketplace platform that connects talented creatives including designers, photographers, videographers, musicians, and writers with clients seeking professional creative services.",
    tags: ["Nextjs", "Tailwind", "Typscript", "creatives"],
    imageAlt: "Cast preview",
    images: ["/cast.png", "/cast2.png"],
    imageBg: "#0d3322",
    align: "right",
  },
];

function SlideshowImage({ images, alt }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={alt}
          fill
          className={`object-contain transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

function FeaturedProjectCard({ project }) {
  const isRight = project.align === "right";
  const hasSlideshow = !!project.images;
  const [imgHover, setImgHover] = useState(false);

  return (
    <div className="relative mb-28 last:mb-0">
      <div className="grid grid-cols-12 items-center">

        <div
          onMouseEnter={() => setImgHover(true)}
          onMouseLeave={() => setImgHover(false)}
          className={[
            "relative col-span-12 h-72 md:h-[480px] rounded overflow-hidden transition-all duration-500",
            "md:col-span-8 md:[grid-row:1]",
            isRight ? "md:col-start-1" : "md:col-start-5",
          ].join(" ")}
        >
          <div className={`relative w-full h-full transition-transform duration-500 ${imgHover ? "scale-100" : "scale-110"}`}>
            {hasSlideshow ? (
              <SlideshowImage images={project.images} alt={project.imageAlt} />
            ) : project.imageSrc ? (
              <Image
                src={project.imageSrc}
                alt={project.imageAlt}
                fill
                className="object-contain"
              />
            ) : (
              <div
                className="w-full h-full"
                style={{ backgroundColor: project.imageBg }}
              />
            )}
          </div>
          <div
            className="absolute inset-0 pointer-events-none z-10"
            style={{ backgroundColor: "rgba(10,25,47,0.3)" }}
          />
        </div>

        <div
          className={[
            "relative z-10 col-span-12 md:col-span-5 md:[grid-row:1] flex flex-col",
            isRight ? "md:col-start-7 items-end text-right" : "md:col-start-1 items-start text-left",
          ].join(" ")}
        >
          <p className="text-[#64ffda] font-mono text-xs tracking-widest mb-2">
            Featured Project
          </p>

          <h3 className="text-[#ccd6f6] font-semibold text-2xl md:text-[28px] mb-6 leading-snug">
            {project.title}
          </h3>

          <div
            className={`rounded px-7 py-6 mb-6 text-[#a8b2d8] text-sm md:text-[15px] leading-relaxed shadow-2xl transition-opacity duration-700 ${imgHover ? "opacity-0" : "opacity-100"}`}
            style={{ backgroundColor: "#112240" }}
          >
            {project.description}
          </div>

          <ul
            className={[
              "flex flex-wrap gap-x-5 gap-y-1 mb-6 font-mono text-xs text-[#8892b0]",
              isRight ? "justify-end" : "justify-start",
            ].join(" ")}
          >
            {project.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>

          <div className={`flex gap-4 ${isRight ? "justify-end" : "justify-start"}`}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub repository"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-200"
              >
                <Github className="w-[22px] h-[22px]" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live site"
                className="text-[#ccd6f6] hover:text-[#64ffda] transition-colors duration-200"
              >
                <ExternalLink className="w-[22px] h-[22px]" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="py-24 px-6"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#ccd6f6] text-xl font-semibold font-mono mb-16 flex items-center gap-4">
          <span className="text-[#64ffda]">01.</span>
          Frontend play
          <span className="flex-1 h-px bg-[#233554] ml-2 hidden md:block" />
        </h2>

        {featuredProjects.map((project) => (
          <FeaturedProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
