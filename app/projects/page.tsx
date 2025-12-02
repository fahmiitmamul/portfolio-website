"use client";
import TopNavbar from "../components/TopNavbar";
import Projects from "../components/Projects";

export default function ProjectsPage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <TopNavbar />
      <Projects />
    </div>
  );
}
