"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function TopNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (href: string) => pathname === href;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/education", label: "Education" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    {
      href: "https://1drv.ms/b/c/966a5f6043e7d119/IQBc28f9YUSWT6Jj_zJnCzUGAbUwO2PefuB9kPM5FUmDaBY?e=ws8gZX",
      label: "Resume",
      external: true,
    },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
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
        .hamburger {
          display: none;
          flex-direction: column;
          cursor: pointer;
          z-index: 1001;
          gap: 6px;
          padding: 8px;
        }
        .hamburger span {
          width: 25px;
          height: 2.5px;
          background-color: #dee2e6;
          border-radius: 2px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          transform-origin: center;
        }
        .hamburger.active span:nth-child(1) {
          transform: translateY(11.5px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
          transform: translateX(-10px);
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-11.5px) rotate(-45deg);
        }
        .brand-name {
          font-size: clamp(1.5rem, 5vw, 2.25rem);
        }
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }
          .nav-links {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            flex-direction: column;
            background-color: #09203a;
            border-b: 1px solid #1a2a3a;
            gap: 0;
            padding: 20px;
            z-index: 1000;
            animation: slideDown 0.3s ease-out;
          }
          @keyframes slideDown {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .nav-links.active {
            display: flex;
          }
          .nav-links a {
            padding: 12px 0;
            border-bottom: 1px solid #1a2a3a;
          }
          .nav-links a:last-child {
            border-bottom: none;
          }
          nav {
            padding: 20px !important;
            position: relative;
            z-index: 999;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }
        }
      `}</style>

      <nav className="flex justify-between items-center px-48 py-6 bg-[#09203a] border-b border-[#1a2a3a] relative z-50">
        <div className="brand-name text-[#dee2e6] font-black">
          Itmamul Fahmi
        </div>

        <div
          className={`nav-links flex gap-10 text-[#dee2e6] font-medium text-lg font-raleway ${
            isOpen ? "active" : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link font-black ${
                isActive(link.href)
                  ? "active text-[#12d640]"
                  : "text-[#dee2e6] hover:text-[#12d640]"
              }`}
              target={link.external ? "_blank" : undefined}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div
          className={`hamburger ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </>
  );
}
