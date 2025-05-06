"use client";
import { useEffect, useState } from "react";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ExperienceSection } from "@/components/experience-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ScrollToTop } from "@/components/scroll-to-top";
import { BackgroundGradient } from "@/components/background-gradient";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "projects",
        "skills",
        "experience",
        "contact",
      ];

      const sectionElements = sections.map((section) => {
        const element = document.getElementById(section);
        if (!element) return { id: section, top: 0, bottom: 0 };

        const rect = element.getBoundingClientRect();
        return {
          id: section,
          top: rect.top,
          bottom: rect.bottom,
        };
      });

      // Find the section that is currently in view
      const viewportHeight = window.innerHeight;
      const currentSection = sectionElements.find((section) => {
        return (
          section.top <= viewportHeight / 3 &&
          section.bottom >= viewportHeight / 3
        );
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <BackgroundGradient />

      <Header activeSection={activeSection} />
      <main>
        <section id="home">
          <HeroSection />
        </section>
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
