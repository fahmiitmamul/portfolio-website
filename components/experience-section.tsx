"use client";

import { motion } from "framer-motion";
import { Calendar, Briefcase, GraduationCap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experiences = [
  {
    title: "Fullstack Web & Mobile Develoer",
    company: "PT Radar Utama Nusantara Lapan",
    period: "2023 - 2024",
    description:
      "Developed and maintained multiple web applications for clients in various sectors.",
    achievements: [
      "Building Company Profile Website",
      "Building Human Resource Information System (HRIS)",
    ],
  },
  {
    title: "Fullstack Web & Mobile Developer",
    company: "PT Evolusi Sistem Digital",
    period: "2024 - Present",
    description:
      "Developed and maintained multiple web applications for clients in various sectors.",
    achievements: [
      "Built Enterprise Resource Planning (ERP)",
      "Integrated payment gateways and third-party APIs",
      "Built Hosting Platform Provider",
      "Build Parking Systems on Web and Mobile Platform",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="container py-24 space-y-12">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            My professional journey and career highlights
          </p>
        </div>
      </motion.div>

      <div className="relative mt-12">
        {/* Timeline line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-orange-500 via-pink-500 to-purple-600"></div>

        {/* Experience cards */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 flex items-center justify-center z-10">
                <Briefcase className="h-4 w-4 text-white" />
              </div>

              {/* Card */}
              <div className="w-full md:w-5/12 mb-8 md:mb-0">
                <Card className="overflow-hidden border border-gray-800 bg-[#121212]/50 backdrop-blur-sm hover:bg-[#1a1a1a]/30 hover:backdrop-blur-xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <CardDescription className="text-lg font-medium">
                          {exp.company}
                        </CardDescription>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="mr-1 h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>{exp.description}</p>
                    <div>
                      <h4 className="font-medium mb-2">Key Achievements:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Spacer for alternating layout */}
              <div className="w-full md:w-2/12"></div>

              {/* Empty div for alternating layout */}
              <div className="w-full md:w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
