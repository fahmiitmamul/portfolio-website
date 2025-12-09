"use client";

import Image from "next/image";

export default function Education() {
  const educationData = [
    {
      id: 1,
      logo: "https://res.cloudinary.com/dpeolbh0r/image/upload/v1765253846/Indonesia%20Open%20University%20Logo.png",
      university: "Indonesia Open University",
      degree: "Bachelor of Engineering in Data Science",
      period: "2025 - 2028",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Software Engineering",
        "Web Programming",
        "Computer Networks",
        "Statistics & Probability",
        "Machine Learning",
        "Exploratory Data Analysis",
        "Artificial Intelligence",
        "Database Systems",
        "Database Management Systems",
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-48 py-4 font-opensans">
      <div>
        <h2 className="text-[#dee2e6] text-sm font-black mb-6 pb-1 border-b border-[#dee2e6] inline-block tracking-widest">
          EDUCATION
        </h2>

        <div className="mt-0 space-y-8 font-raleway">
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="bg-[#1a2a3a] p-4 sm:p-6 md:p-8 rounded border border-[#2a3a4a] hover:border-[#12d640] transition"
            >
              <div className="flex flex-col sm:flex-row gap-6 sm:gap-8">
                {/* Logo */}
                <div className="shrink-0 flex justify-center sm:justify-start">
                  <Image
                    src={edu.logo}
                    alt={edu.university}
                    className="w-24 h-24 sm:w-28 md:w-32 md:h-32 object-contain"
                    width={500}
                    height={500}
                  />
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[#dee2e6] text-base sm:text-lg font-semibold italic mb-2">
                    {edu.degree}
                  </h3>
                  {/* <p className="text-[#12d640] font-small mb-1">{edu.period}</p> */}
                  <p className="text-[#dee2e6] text-sm mb-4">
                    {edu.university}
                  </p>

                  <p className="text-[#dee2e6] font-semibold mb-3 text-sm sm:text-base">
                    Relevant Coursework
                  </p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {edu.coursework.map((course, idx) => (
                      <li
                        key={idx}
                        className="text-[#dee2e6] text-xs sm:text-sm"
                      >
                        • {course}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
