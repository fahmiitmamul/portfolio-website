"use client";
import TopNavbar from "../components/TopNavbar";
import Contact from "../components/Contact";

export default function ContactPage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <TopNavbar />
      <Contact />
    </div>
  );
}