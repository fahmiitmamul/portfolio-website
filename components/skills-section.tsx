"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");

  const skillCategories = [
    {
      id: "frontend",
      title: "Frontend",
      icon: <Layout className="h-6 w-6 text-white" />,
      iconBg: "bg-pink-500",
      borderGradient: "from-pink-500 via-purple-500 to-indigo-500",
      skills: [
        "React",
        "HTML/CSS",
        "JavaScript",
        "TypeScript",
        "Next.js",
        "Tailwind CSS",
        "Tanstack Query",
      ],
    },
    {
      id: "backend",
      title: "Backend",
      icon: <Server className="h-6 w-6 text-white" />,
      iconBg: "bg-blue-500",
      borderGradient: "from-blue-500 via-indigo-500 to-purple-500",
      skills: ["Node.js", "Express.js", "Nest.js", "GraphQL", "REST API"],
    },
    {
      id: "devops",
      title: "DevOps",
      icon: <Terminal className="h-6 w-6 text-white" />,
      iconBg: "bg-teal-500",
      borderGradient: "from-teal-500 via-cyan-500 to-blue-500",
      skills: [
        "Docker",
        "Kubernetes",
        "AWS",
        "GCP",
        "Azure",
        "CI/CD",
        "Jenkins",
      ],
    },
    {
      id: "databases",
      title: "Databases",
      icon: <Database className="h-6 w-6 text-white" />,
      iconBg: "bg-green-500",
      borderGradient: "from-green-500 via-teal-500 to-cyan-500",
      skills: ["PostgreSQL", "SQLite"],
    },
    {
      id: "tools",
      title: "Tools",
      icon: <Wrench className="h-6 w-6 text-white" />,
      iconBg: "bg-orange-500",
      borderGradient: "from-orange-500 via-red-500 to-pink-500",
      skills: [
        "Git",
        "GitHub",
        "GitLab",
        "Trello",
        "Figma",
        "VSCode",
        "Postman",
      ],
    },
    {
      id: "languages",
      title: "Languages",
      icon: <Code className="h-6 w-6 text-white" />,
      iconBg: "bg-purple-500",
      borderGradient: "from-purple-500 via-violet-500 to-indigo-500",
      skills: ["TypeScript", "JavaScript"],
    },
  ];

  const filteredCategories =
    activeCategory === "all"
      ? skillCategories
      : skillCategories.filter((category) => category.id === activeCategory);

  return (
    <section id="skills" className="container py-24 space-y-12">
      <motion.div
        className="flex flex-col items-center text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
            My Skills
          </h2>
          <p className="mx-auto max-w-[700px] md:text-xl">
            Technologies and tools I work with
          </p>
        </div>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-2 mb-8">
        <Button
          onClick={() => setActiveCategory("all")}
          variant={activeCategory === "all" ? "default" : "outline"}
          className={
            activeCategory === "all"
              ? "bg-gradient-to-r from-orange-500 to-purple-600 border-0"
              : ""
          }
        >
          All
        </Button>
        {skillCategories.map((category) => (
          <Button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            variant={activeCategory === category.id ? "default" : "outline"}
            className={
              activeCategory === category.id
                ? "bg-gradient-to-r from-orange-500 to-purple-600 border-0"
                : ""
            }
          >
            {category.title}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category, index) => (
          <motion.div
            key={category.id}
            className={`p-[1px] rounded-xl bg-gradient-to-br ${category.borderGradient} transition-all duration-300 group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="bg-[#121212] rounded-xl p-6 h-full backdrop-blur-sm transition-all duration-300 group-hover:bg-[#1a1a1a]/40 group-hover:backdrop-blur-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-3 rounded-lg ${category.iconBg}`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-[#1a1a1a]/70 backdrop-blur-sm rounded-full text-sm font-medium hover:bg-[#222222]/60 hover:backdrop-blur-xl transition-all cursor-default hover:scale-105 transform duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
