"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("ALL"); //

  const projectsData = [
    {
      id: 1,
      title: "HJOBS ERP",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662813/hjobs-erp_qxcxf1.png",
      link: "https://hjobs-root-frontend.onrender.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 2,
      title: "Lookit HRIS",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662813/lookit-hris_gpgkrx.png", // [cite: 4]
      link: "https://lookithris.itmamulfahmi.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 3,
      title: "AKA Company Profile",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662813/arya-kemuning-abadi_qtblpa.png",
      link: "https://aka.itmamulfahmi.com/",
      tags: ["WEB-APP"],
    },
    {
      id: 4,
      title: "Mitracloudhost",
      category: "ALL", // [cite: 5]
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662814/mitracloudhosting_u5kvtq.png",
      link: "https://mitracloudhost.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
    {
      id: 5,
      title: "Evosist Parking System",
      category: "ALL",
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662813/evosist-parking_gjpo6k.png",
      link: "https://mitracloudhost.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
    {
      id: 6,
      title: "Darul Hikam TPQ", // [cite: 6]
      category: "ALL",
      image:
        "https://res.cloudinary.com/dxnewldiy/image/upload/v1764662814/darul-hikam_muwune.png",
      link: "https://darulhikam.itmamulfahmi.com/",
      tags: ["PROJECT"],
    },
  ];

  // Logika Filter tetap sama [cite: 7, 8]
  const filteredProjects =
    activeFilter === "ALL"
      ? projectsData
      : projectsData.filter((project) => project.tags.includes(activeFilter));

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-4 font-opensans">
      <div>
        <h2 className="text-[#dee2e6] text-lg sm:text-xl font-small mb-6 pb-3 border-b border-[#ffffff] inline-block tracking-widest">
          PROJECTS
        </h2>

        {/* Filter Buttons [cite: 10, 11] */}
        <div className="flex flex-wrap gap-2 sm:gap-4 mt-0 mb-8 sm:mb-12 font-raleway">
          {["ALL", "WEB-APP", "PROJECT"].map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-4 sm:px-6 py-2 rounded font-medium transition text-sm sm:text-base ${
                activeFilter === category
                  ? "bg-[#1c7d32] text-[#dee2e6]" // [cite: 11]
                  : "bg-[#1b2732] text-[#dee2e6] hover:bg-[#3a4a5a]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid dengan Animasi */}
        <motion.div
          layout // Prop ajaib untuk animasi pergeseran layout otomatis
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8" //
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout // Memungkinkan kartu bergerak saat posisi berubah
                initial={{ opacity: 0, scale: 0.8 }} // Animasi awal muncul
                animate={{ opacity: 1, scale: 1 }} // Animasi saat diam
                exit={{ opacity: 0, scale: 0.5 }} // Animasi saat hilang (difilter keluar)
                transition={{ duration: 0.3 }}
                key={project.id}
                className="group cursor-pointer" // Hover scale dihapus di sini agar tidak bentrok dengan layout animation
              >
                <Link
                  href={project.link}
                  target="_blank" // [cite: 16]
                  className="relative block overflow-hidden rounded mb-3 sm:mb-4 h-40 sm:h-48 md:h-56"
                >
                  <Image
                    src={project.image}
                    alt={project.title} // [cite: 17]
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500" // Pindahkan efek zoom gambar ke sini
                    width={300}
                    height={300}
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition" />
                </Link>
                <h3 className="text-[#dee2e6] text-base sm:text-lg font-semibold text-center">
                  {project.title}
                </h3>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}
