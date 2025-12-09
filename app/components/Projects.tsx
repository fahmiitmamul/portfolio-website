"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const projectsData = [
    {
      id: 1,
      title: "HJOBS ERP",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765255320/erp_project.png",
      link: "https://hjobs-root-frontend.onrender.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 2,
      title: "LOOKIT HRIS",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765255742/hris.png",
      link: "https://lookithris.itmamulfahmi.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 3,
      title: "AKA Company Profile",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765257008/company_profile.png",
      link: "https://aka.itmamulfahmi.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 4,
      title: "Mitracloudhost",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765256160/mitracloudhost.png",
      link: "https://mitracloudhost.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
    {
      id: 5,
      title: "Evosist Parking System",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765256648/evosist_parking_system.png",
      link: "https://mitracloudhost.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
    {
      id: 6,
      title: "Darul Hikam TPQ",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765256841/tpq_ki3koe.png",
      link: "https://darulhikam.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
  ];

  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-4 font-opensans">
      <div>
        <h2 className="text-[#dee2e6] text-sm font-black mb-6 pb-1 border-b border-[#ffffff] inline-block tracking-widest">
          PROJECTS
        </h2>

        <div className="flex flex-wrap gap-2 sm:gap-4 mt-0 mb-8 sm:mb-12 font-raleway">
          {["ALL", "WEB-APP", "PROJECT"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded font-black transition text-sm sm:text-base cursor-pointer ${
                activeFilter === category
                  ? "bg-[#1c7d32] text-[#dee2e6]"
                  : "bg-[#1b2732] text-[#dee2e6] hover:bg-[#3a4a5a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group cursor-pointer"
              >
                <h3 className="text-[#dee2e6] text-xl font-bold pb-3 text-center">
                  {project.title}
                </h3>
                <Link
                  href={project.link}
                  target="_blank"
                  className="relative block overflow-hidden mb-3 sm:mb-4 h-40 sm:h-48 md:h-56"
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    width={500}
                    height={500}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 transition" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
