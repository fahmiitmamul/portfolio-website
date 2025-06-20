"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="container py-24 md:py-32 relative">
      {/* Decorative elements */}
      <div className="absolute top-1/2 right-10 w-20 h-20 border border-purple-500/20 rounded-full animate-pulse-slow"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 border border-orange-500/20 rounded-full animate-pulse-slow animation-delay-1000"></div>

      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          className="flex flex-col space-y-6 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-64 px-4 py-1.5 rounded-full text-sm font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 text-white mb-2 mx-auto md:mx-0">
            Fullstack Software Engineer
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Building{" "}
              <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Digital Experiences
              </span>
            </h1>
            <p className="md:text-xl max-w-[600px] mx-auto md:mx-0">
              I transform complex problems into elegant solutions. Specializing
              in full-stack development with expertise across the entire
              development lifecycle.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Button variant="gradientGlass" className="px-6 py-6 h-auto">
              <Link href="#contact" className="flex items-center">
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <div className="flex items-center gap-3">
              <Button
                variant="glass"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://github.com/fahmiitmamul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link
                  href="https://linkedin.com/in/fahmiitmamul"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="glass"
                size="icon"
                className="rounded-full"
                asChild
              >
                <Link href="mailto:itmamul2004@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="relative w-[230px] h-[230px] md:w-[300px] md:h-[300px]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 animate-rotate-slow"></div>
            <div className="absolute inset-[3px] rounded-full bg-gray-950 flex items-center justify-center">
              <div className="rounded-full overflow-hidden w-[calc(100%-6px)] h-[calc(100%-6px)]">
                <Image
                  src="/logo.png"
                  alt="Profile"
                  width={500}
                  height={500}
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 right-0 left-0 md:bottom-10 md:left-1/2 md:right-auto transform -translate-x-1/2 flex flex-col items-center animate-bounce-slow">
        <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1.5 h-1.5 bg-muted-foreground rounded-full mt-2 animate-scroll-down"></div>
        </div>
      </div>
    </section>
  );
}
