"use client";
import TopNavbar from "../components/TopNavbar";
import Skills from "../components/Skills";

export default function SkillsPage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <TopNavbar />
      <Skills />
    </div>
  );
}
