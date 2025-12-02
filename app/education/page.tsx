"use client";
import TopNavbar from "../components/TopNavbar";
import Education from "../components/Education";

export default function EducationPage() {
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div
      className="w-full min-h-screen bg-[#010e1b]"
      onContextMenu={handleContextMenu}
    >
      <TopNavbar />
      <Education />
    </div>
  );
}
