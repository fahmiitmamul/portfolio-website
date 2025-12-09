"use client";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaShare,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-48 py-4 font-opensans">
      <div>
        <h2 className="text-[#dee2e6] text-sm font-black mb-6 pb-1 border-b border-[#ffffff] inline-block tracking-widest">
          CONTACT
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mt-2 max-w-4xl font-raleway">
          {/* My Address */}
          <div className="bg-[#09203a] p-6 sm:p-8 rounded border border-[#09203a] transition hover:border-[#12d640]">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition shrink-0"
              >
                <FaMapMarkerAlt className="text-[#ffffff] text-lg sm:text-xl" />
              </Link>
              <h3 className="text-[#28a745] text-base sm:text-lg font-black">
                My Address
              </h3>
            </div>
            <p className="text-[#dee2e6] text-sm sm:text-base">Pekuncen</p>
            <p className="text-[#dee2e6] text-sm sm:text-base">
              Banyumas, Indonesia
            </p>
          </div>

          {/* Social Profiles */}
          <div className="bg-[#09203a] p-6 sm:p-8 rounded border border-[#09203a] transition hover:border-[#12d640]">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition shrink-0"
              >
                <FaShare className="text-[#ffffff] text-lg sm:text-xl" />
              </Link>
              <h3 className="text-[#28a745] text-base sm:text-lg font-black">
                Social Profiles
              </h3>
            </div>
            <div className="flex gap-3 sm:gap-4">
              <Link
                href="https://linkedin.com/in/fahmiitmamul"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#28a745] hover:bg-[#3a4a5a] transition"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/fahmiitmamul"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#28a745] hover:bg-[#3a4a5a] transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="mailto:itmamulfahmi@outlook.co.id"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#28a745] hover:bg-[#3a4a5a] transition"
              >
                <FiMail />
              </Link>
            </div>
          </div>

          {/* Email */}
          <div className="bg-[#09203a] p-6 sm:p-8 rounded border border-[#09203a] transition hover:border-[#12d640]">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition shrink-0"
              >
                <FaEnvelope className="text-[#ffffff] text-lg sm:text-xl" />
              </Link>
              <h3 className="text-[#28a745] text-base sm:text-lg font-black">
                Email
              </h3>
            </div>
            <Link
              href="mailto:itmamulfahmi@outlook.co.id"
              className="text-[#dee2e6] text-sm sm:text-base hover:text-[#28a745] transition break-all"
            >
              itmamulfahmi@outlook.co.id
            </Link>
          </div>

          {/* Contact */}
          <div className="bg-[#09203a] p-6 sm:p-8 rounded border border-[#09203a] transition hover:border-[#12d640]">
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/contact"
                rel="noopener noreferrer"
                className="text-[#dee2e6] text-xl bg-[#22374e] p-3 rounded-full hover:text-[#12d640] hover:bg-gray-600 transition shrink-0"
              >
                <FaPhone className="text-[#ffffff] text-lg sm:text-xl" />
              </Link>
              <h3 className="text-[#28a745] text-base sm:text-lg font-black">
                Contact
              </h3>
            </div>
            <Link
              href="tel:+628976810795"
              className="text-[#dee2e6] text-sm sm:text-base hover:text-[#28a745] transition"
            >
              +62 8976810795
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
