"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, Github, Code } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const projects = [
  {
    title: "H-Jobs ERP",
    description: "All-in-One ERP for Smarter Business.",
    image: "/hjobs-erp.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Sequelize ORM",
      "Rabbit MQ",
      "Docker",
      "Kubernetes",
    ],
    category: "Dashboard",
    liveUrl: "https://hjobserp.itmamulfahmi.com",
  },
  {
    title: "Lookit HRIS",
    description:
      "An all-in-one platform to manage employee data, payroll, attendance, and HR tasks efficiently.",
    image: "/lookit-hris.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Sequelize ORM",
    ],
    category: "Dashboard",
    liveUrl: "https://lookithris.itmamulfahmi.com",
  },
  {
    title: "AKA Company Profile",
    description: "A company profile website of AKA.",
    image: "/arya-kemuning-abadi.png",
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Express.js",
      "PostgreSQL",
      "Sequelize ORM",
    ],
    category: "Company Profile",
    liveUrl: "https://aka.itmamulfahmi.com",
  },
  {
    title: "Mitracloudhost",
    description: "A web hosting provider platform.",
    image: "/mitracloudhosting.png",
    tags: ["Next.js", "Tailwind CSS", "Third Party Payment Gateway"],
    category: "Company Profile",
    liveUrl: "https://mitracloudhost.itmamulfahmi.com",
  },
  {
    title: "Evosist Parking",
    description: "A parking management system.",
    image: "/evosist-parking.png",
    tags: ["Next.js", "Sequelize.js", "Tailwind CSS", "Express.js"],
    category: "Dashboard",
    liveUrl: "https://evolusipark.itmamulfahmi.com",
  },
  {
    title: "Darul Hikam TPQ",
    description: "A student management system.",
    image: "/darul-hikam.png",
    tags: [
      "Next.js",
      "shadcn/ui",
      "Sequelize.js",
      "Tailwind CSS",
      "Express.js",
    ],
    category: "Dashboard",
    liveUrl: "https://darulhikam.itmamulfahmi.com",
  },
];

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("All");
  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="container py-24 space-y-12">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-4">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl">
            Check out some of my recent work
          </p>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setActiveFilter(category)}
            variant={activeFilter === category ? "default" : "outline"}
            className={
              activeFilter === category
                ? "bg-gradient-to-r from-orange-500 to-purple-600 border-0"
                : ""
            }
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="overflow-hidden h-full border border-gray-800 bg-[#121212]/50 backdrop-blur-sm group hover:bg-[#1a1a1a]/30 hover:backdrop-blur-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
              <div className="relative aspect-video group">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="absolute top-2 right-2 z-10 flex items-center gap-1 bg-black/60 text-white px-3 py-1 rounded-md hover:bg-black/80"
                >
                  <ExternalLink size={18} />
                  <span className="text-sm">Live Demo</span>
                </Link>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription className="mt-1">
                      {project.description}
                    </CardDescription>
                  </div>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1a1a1a]">
                    {project.category}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-[#1a1a1a] rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between"></CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
