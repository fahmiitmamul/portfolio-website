"use client";
import TopNavbar from "../components/TopNavbar";
import About from "../components/About";

export default function AboutPage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <TopNavbar />
      <About />
    </div>
  );
}
