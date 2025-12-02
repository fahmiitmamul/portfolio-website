"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Home() {
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #9e7f25;
          transition: width 0.3s ease;
        }
        .nav-link:hover::after {
          width: 100%;
        }
        .nav-link.active::after {
          width: 30%;
        }
        .home-link {
          position: relative;
          display: inline-block;
        }
        .home-link::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 0;
          width: 30%;
          height: 2px;
          background-color: #9e7f25;
        }
        @media (max-width: 768px) {
          .nav-link::after,
          .nav-link:hover::after {
            display: none;
          }
        }
      `}</style>

      <div className="flex flex-col justify-center px-6 sm:px-12 md:px-20 lg:pl-52 w-full min-h-screen py-12 md:py-0">
        <div className="text-[#dee2e6] text-3xl sm:text-4xl md:text-5xl font-black font-opensans">
          Itmamul Fahmi
        </div>

        <div className="text-lg sm:text-xl md:text-2xl flex gap-1 mt-4 font-medium font-opensans flex-wrap">
          <span className="text-[#dee2e6]">I&apos;m </span>
          <div className="text-[#12d640] underline decoration-1 underline-offset-12">
            <Typewriter
              options={{
                strings: [
                  "AI Enthusiast",
                  "Muslim",
                  "Software Engineer",
                  "Fullstack Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>

        <nav className="flex flex-col sm:flex-row gap-4 sm:gap-6 md:gap-10 mt-8 text-[#dee2e6] font-medium text-sm sm:text-base md:text-lg font-raleway">
          <Link
            href="/"
            className={`home-link ${
              isActive("/")
                ? "text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`nav-link ${
              isActive("/about")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            About
          </Link>
          <Link
            href="/education"
            className={`nav-link ${
              isActive("/education")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Education
          </Link>
          <Link
            href="/projects"
            className={`nav-link ${
              isActive("/projects")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Projects
          </Link>
          <Link
            href="/skills"
            className={`nav-link ${
              isActive("/skills")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Skills
          </Link>
          <Link
            href="/resume"
            className={`nav-link ${
              isActive("/resume")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className={`nav-link ${
              isActive("/contact")
                ? "active text-[#12d640]"
                : "text-[#dee2e6] hover:text-[#12d640]"
            }`}
          >
            Contact
          </Link>
        </nav>

        <div className="flex gap-3 sm:gap-4 mt-8 md:mt-12">
          <Link
            href="https://linkedin.com/in/fahmiitmamul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dee2e6] text-lg sm:text-2xl bg-[#212529] p-2 sm:p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition-all"
          >
            <FaLinkedin size={15} />
          </Link>
          <Link
            href="https://github.com/fahmiitmamul"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dee2e6] text-lg sm:text-2xl bg-[#212529] p-2 sm:p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition-all"
          >
            <FaGithub size={15} />
          </Link>
          <Link
            href="mailto:itmamulfahmi@outlook.co.id"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#dee2e6] text-lg sm:text-2xl bg-[#212529] p-2 sm:p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition-all"
          >
            <FiMail size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
