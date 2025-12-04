"use client";

import Image from "next/image";

export default function Skills() {
  const skillsData = [
    {
      category: "Languages",
      items: [
        {
          name: "PHP",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764667712/512px-PHP-logo.svg_k424mc.png",
        },
        {
          name: "Javascript",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764667809/1024px-JavaScript-logo_oebe8b.png",
        },
        {
          name: "Typescript",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764667728/ts-logo-128_o9cusv.png",
        },
      ],
    },
    {
      category: "Frameworks",
      items: [
        {
          name: "Next.js",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668039/Next.js_yj2hhs.png",
        },
        {
          name: "Node.js",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668226/nodejsDark_gxiqce.svg",
        },
        {
          name: "React.js",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668313/React_wqx20q.png",
        },
        {
          name: "Express.js",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668397/Express_lfqrh8.png",
        },
        {
          name: "React Native",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668587/React_Native_Logo_x1cgbg.png",
        },
        {
          name: "Flutter",
          logo: "https://res.cloudinary.com/dpeolbh0r/image/upload/v1764841237/icon_flutter_anyowd.png",
        },
        {
          name: "Laravel",
          logo: "https://res.cloudinary.com/dpeolbh0r/image/upload/v1764841681/laravel-logo_k35vdk.png",
        },
      ],
    },
    {
      category: "Databases",
      items: [
        {
          name: "MySQL",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668687/logo-mysql-170x115_x4yr15.png",
        },
        {
          name: "PostgreSQL",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668778/Postgresql_elephant.svg_vlx6yz.png",
        },
        {
          name: "MongoDB",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764668949/MongoDB_SpringGreen_zr6rpo.png",
        },
      ],
    },
    {
      category: "Tools",
      items: [
        {
          name: "Git",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764669026/Git-logo.svg_h027zn.png",
        },
        {
          name: "AWS",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764669068/Amazon_Web_Services_Logo.svg_inibow.png",
        },
        {
          name: "Google Cloud",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764669122/Google_Cloud_logo.svg_opc429.png",
        },
        {
          name: "Kubernetes",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764669158/Kubernetes_logo_without_workmark.svg_wfap0a.png",
        },
        {
          name: "Docker",
          logo: "https://res.cloudinary.com/dxnewldiy/image/upload/v1764669247/docker-logo-blue_pd0ug7.png",
        },
      ],
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-48 py-4 font-opensans">
      <div>
        <h2 className="text-[#dee2e6] text-lg sm:text-xl md:text-2xl font-small mb-6 pb-3 border-b border-[#ffffff] inline-block tracking-widest">
          SKILLS
        </h2>

        <div className="mt-2 space-y-6 font-raleway">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-white p-4 sm:p-6 md:p-8 rounded">
              <h3 className="text-[#1a2a3a] text-lg sm:text-xl md:text-2xl font-bold mb-4 md:mb-6">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-3 sm:gap-4 md:gap-6 items-center justify-start">
                {skillGroup.items.map((skill, skillIdx) => (
                  <div
                    key={skillIdx}
                    className="flex flex-col items-center gap-1 sm:gap-2"
                  >
                    <Image
                      src={skill.logo}
                      alt={skill.name}
                      className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 object-contain"
                      width={300}
                      height={300}
                    />
                    <span className="text-[#1a2a3a] text-xs sm:text-sm md:text-base font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
