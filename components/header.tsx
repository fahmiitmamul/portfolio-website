"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header({ activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to handle navigation click and set active section
  const handleNavClick = (section) => {
    setIsMenuOpen(false);
  };

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled ? "bg-black/50 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-center m-auto">
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary relative ${
                  activeSection === item.href.substring(1)
                    ? "text-orange-500"
                    : "text-white"
                }`}
                onClick={() => handleNavClick(item.href.substring(1))}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"></span>
                )}
              </Link>
            ))}
          </nav>
          <Button variant="gradientGlass" className="flex items-center gap-1.5">
            <FileText className="h-4 w-4" />
            Resume
          </Button>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <Button variant="gradientGlass" className="h-8 w-8 p-0">
            <FileText className="h-4 w-4" />
            <span className="sr-only">Resume</span>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm md:hidden">
          <div className="container py-4">
            <div className="flex justify-end mb-8">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(false)}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="flex flex-col gap-6 items-center text-lg">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-medium transition-colors ${
                    activeSection === item.href.substring(1)
                      ? "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent"
                      : "text-white hover:text-primary"
                  }`}
                  onClick={() => handleNavClick(item.href.substring(1))}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
