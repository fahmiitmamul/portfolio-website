"use client";
import Image from "next/image";

export default function About() {
  return (
    <div className="px-4 md:px-8 lg:px-48 py-4 font-opensans">
      <div className="mb-0">
        <h2 className="text-[#dee2e6] text-lg md:text-xl font-small mb-6 pb-3 border-b border-[#dee2e6] inline-block tracking-widest">
          ABOUT
        </h2>

        <div className="flex flex-col md:flex-row gap-6 md:gap-12 mt-0">
          {/* Profile Image */}
          <div className="shrink-0">
            <Image
              src="https://res.cloudinary.com/dxnewldiy/image/upload/v1764655821/unnamed_fu99k4.png"
              alt="Profile"
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded"
              width={500}
              height={500}
            />
          </div>

          {/* About Content */}
          <div className="flex-1 font-raleway">
            <p className="text-[#dee2e6] text-base md:text-lg leading-7 mb-8">
              Enthusiastic Full Stack Developer with over 2 years of experience
              in building web applications and services. I enjoy collaborating
              with team members to tackle challenges and create user-friendly
              solutions that meet real-world needs. Committed to continuous
              learning and improvement, I take pride in writing clean,
              maintainable code and striving to enhance user experience. My goal
              is to contribute to projects that make a positive impact while
              growing alongside a supportive team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#12d640]">▶</span>
                  <span className="text-[#dee2e6] font-semibold">
                    Birthday:
                  </span>
                  <span className="text-[#dee2e6]">May 2004</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#12d640]">▶</span>
                  <span className="text-[#dee2e6] font-semibold">Phone:</span>
                  <span className="text-[#dee2e6] text-sm md:text-base">
                    +62 8976810795
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[#12d640]">▶</span>
                  <span className="text-[#dee2e6] font-semibold">City:</span>
                  <span className="text-[#dee2e6]">Banyumas, Indonesia</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#12d640]">▶</span>
                  <span className="text-[#dee2e6] font-semibold">Email:</span>
                  <span className="text-[#dee2e6] text-sm md:text-base">
                    itmamulfahmi@outlook.co.id
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Interests Section */}
      <div className="mt-8">
        <h2 className="text-[#dee2e6] text-lg md:text-xl font-small mb-6 pb-3 border-b border-[#dee2e6] inline-block tracking-widest">
          INTERESTS
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-2">
          {/* Software Development */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">🌐</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Software Development
              </h3>
            </div>
          </div>

          {/* Machine Learning */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">⚙️</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Machine Learning
              </h3>
            </div>
          </div>

          {/* Computer Vision */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">📷</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Computer Vision
              </h3>
            </div>
          </div>

          {/* Natural Language Processing */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">📝</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Natural Language Processing
              </h3>
            </div>
          </div>

          {/* Software Engineering */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">💻</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Software Engineering
              </h3>
            </div>
          </div>

          {/* Visualization */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">📊</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Visualization
              </h3>
            </div>
          </div>

          {/* Algorithms */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">🔧</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Algorithms
              </h3>
            </div>
          </div>

          {/* Image Processing */}
          <div className="bg-[#1a2332] p-4 md:p-6 rounded border border-[#2a3a4a] hover:border-[#12d640] transition">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[#12d640] text-xl md:text-2xl">🖼️</span>
              <h3 className="text-[#dee2e6] font-semibold font-raleway text-sm md:text-base">
                Image Processing
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
