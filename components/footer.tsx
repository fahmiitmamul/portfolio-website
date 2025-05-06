"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Itmamul Fahmi
            </h3>
            <p className="text-muted-foreground">
              A passionate full-stack developer specializing in building
              exceptional digital experiences.
            </p>
            <div className="flex space-x-3">
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
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-bold">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-2 text-sm">
              <Link
                href="#about"
                className="hover:text-primary transition-colors"
              >
                About
              </Link>
              <Link
                href="#projects"
                className="hover:text-primary transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#skills"
                className="hover:text-primary transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#experience"
                className="hover:text-primary transition-colors"
              >
                Experience
              </Link>
              <Link
                href="#contact"
                className="hover:text-primary transition-colors"
              >
                Contact
              </Link>
              <Link href="#" className="hover:text-primary transition-colors">
                Resume
              </Link>
            </nav>
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-bold">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to my newsletter to receive updates on my latest
              projects and tech articles.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-gray-900 border border-gray-800 rounded-l-md focus:outline-none focus:ring-1 focus:ring-purple-500"
              />
              <Button variant="gradientGlass" className="rounded-l-none">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Itmamul Fahmi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
