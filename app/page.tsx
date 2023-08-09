"use client";
import React, { useEffect } from "react";
import { ConfigProvider } from "antd";
import theme from "../theme/themeConfig";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdDocument } from "react-icons/io";
import Profile from "../public/fahmi.jpg";
import { BsLinkedin } from "react-icons/bs";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import Bootstrap from "../public/bootstrap5.svg";
import Docker from "../public/docker.png";
import Javascript from "../public/js.svg";
import NextJs from "../public/nextjs2.png";
import Node from "../public/nodejs.svg";
import ReactJs from "../public/reactjs.svg";
import Redux from "../public/redux.png";
import Ts from "../public/typescript.png";
import WpImage from "../public/webpack.svg";
import Typewriter from "../components/typewriter";
import TailwindImage from "../public/tailwind.png";
import { Steps } from "antd";
import Eventific from "../public/eventific.png";
import CoffeeShop from "../public/coffeshop.png";
import Wallet from "../public/wallet.png";
import EventificMobile from "../public/eventific_mobile.png";
import Hamburger from "hamburger-react";

export default function Homepage(): JSX.Element {
  const mobileNav: any = React.useRef();
  const navChildren: any = React.useRef();

  function ShowNavbar() {
    mobileNav.current.classList.toggle("transform-active");
    navChildren.current.classList.toggle("hidden");
  }

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <div className="App">
        <div className="flex justify-between items-center w-full h-[70px] bg-white px-5 sm:px:10  text-[#383838]">
          <div>
            <p className="font-bold text-2xl uppercase tracking-widest animate-on-hover cursor-pointer">
              portfolio
            </p>
          </div>
          <nav className="md:flex justify-center items-center gap-10 hidden">
            <ul className="flex gap-10">
              <li className="text-lg font-bold cursor-pointer animate-on-hover overflow-auto">
                <a
                  href="https://drive.google.com/uc?export=download&id=1BE6VvEl8a2smITrR4hNpnj6yPYCh5nak"
                  className="flex gap-2 items-center justify-center"
                >
                  Download CV
                  <IoMdDocument />
                </a>
              </li>
            </ul>
          </nav>
          <div className="md:hidden" onClick={ShowNavbar}>
            <Hamburger size={25} />
          </div>
        </div>
        <div ref={mobileNav} className="box transform md:hidden">
          <nav className="md:flex justify-center items-center gap-10 hidden">
            <ul className="flex gap-10">
              <li className="text-lg font-bold cursor-pointer animate-on-hover overflow-auto">
                <a
                  href="https://drive.google.com/uc?export=download&id=1BE6VvEl8a2smITrR4hNpnj6yPYCh5nak"
                  className="flex gap-2 items-center justify-center"
                >
                  Download CV
                  <IoMdDocument />
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex w-full flex-col justify-center items-center md:flex-row h-[600px] bg-gradient-to-tr from-blue-300 via-white to-orange-300 pt-0">
          <div
            data-aos="fade-right"
            className="flex flex-auto md:w-64 flex-col text-[#383838] justify-center items-center"
          >
            <div className="flex flex-col px-8 max-w-2xl text-3xl md:text-5xl font-black">
              <div>Hi.</div>
              <div>I&apos;m Itmamul Fahmi</div>
              <div className="flex gap-2 text-2xl">
                <div>A</div> <Typewriter />
              </div>
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="flex-auto md:w-32 flex justify-center items-center"
          >
            <Image
              alt="fahmi"
              src={Profile}
              className="w-64 shadow-2xl rounded-lg"
            />
          </div>
        </div>
        <div
          className="flex flex-col gap-24 h-auto bg-white text-[#383838] py-10"
          id="about-me"
        >
          <div className="w-full flex flex-col justify-center items-center text-3xl pt-10">
            <div className="font-bold">About Me</div>
            <div className="text-xl px-5 md:px-20 text-center py-5">
              I&apos;m a person who is interested in learning new things,
              especially in the field of programming. My background is in
              computer and network engineering, which I majored in during high
              school. I have experience in building applications and have
              developed many applications using JavaScript. My expertise
              including frontend development, backend development even a
              fullstack development. I&apos; a fast learner, highly motivated,
              and professional person.
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-32 md:gap-0 justify-center items-center px-8">
            <div className="flex flex-col gap-10 flex-1 justify-center items-center">
              <div className="font-bold text-3xl">Education</div>
              <div className="max-w-xl">
                <Steps
                  progressDot
                  current={0}
                  direction="vertical"
                  items={[
                    {
                      title: "Fazztrack | Fullstack Web Developer",
                      description:
                        "After graduate from high school, i attend fazztrack bootcamp to sharpen my knowledge about fullstack web development",
                    },
                    {
                      title:
                        "SMK Ma'arif NU 1 Ajibarang | Computer Engineering",
                      description:
                        "I'm learning fundamental of web development such as HTML, CSS, and JavaScript",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="flex flex-col gap-10 flex-1 justify-center items-center">
              <div className="font-bold text-3xl">Work Experience</div>
              <div className="max-w-md">
                <Steps
                  progressDot
                  current={0}
                  direction="vertical"
                  items={[
                    {
                      title: "Freelance Web Developer",
                      description: `Developed a fully functional website from scratch for a corporate client,
                        Customized existing websites to suit the unique needs of clients, Worked with a team to create a website mockup for a client`,
                    },
                  ]}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center items-center text-3xl pt-10 pb-5">
            <div className="font-bold pb-5">Skills</div>
            <div className="text-xl px-5 md:px-20 text-center">
              Here are some skills that I have mastered such as React.js,
              Next.js, Express.js and many more...
            </div>
          </div>
          <div className="flex flex-wrap justify-center items-center">
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Bootstrap}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={TailwindImage}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Docker}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Javascript}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={NextJs}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Node}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={ReactJs}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Redux}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={Ts}
              alt="skills"
            />
            <Image
              className="hover:scale-[1.1] cursor-pointer transition-all"
              width={130}
              height={130}
              src={WpImage}
              alt="skills"
            />
          </div>
        </div>
        <div
          className="h-auto bg-blue-50 text-[#383838] px-5 md:px-20 py-20"
          id="projects"
        >
          <div className="w-full flex justify-center items-center text-3xl font-bold">
            Projects
          </div>
          <div className="text-xl text-center py-10">
            Here several projects that i developed
          </div>
          <div className="w-full flex flex-wrap gap-14 justify-center items-center">
            <a
              target="_blank"
              href="https://eventific.netlify.app"
              className="rounded-xl shadow-xl max-w-md cursor-pointer hover:scale-[1.05] transition-all"
            >
              <Image src={Eventific} alt="Projects" width={500} />
              <div className="p-5">
                <div className="text-xl font-bold">Eventific</div>
                <div className="text-md">Role: Fullstack Developer</div>
                <div className="text-md">
                  Eventific is an event management application. In this app, you
                  can find various events, and you have the option to purchase
                  tickets for these events. It is built using React.js and Daisy
                  UI.
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://roastville.netlify.app"
              className="rounded-xl shadow-xl max-w-md cursor-pointer hover:scale-[1.05] transition-all"
            >
              <Image src={CoffeeShop} alt="Projects" width={500} />
              <div className="p-5">
                <div className="text-xl font-bold">Roastville</div>
                <div className="text-md">Role: Fullstack Developer</div>
                <div className="text-md">
                  Eventific is an event management application. In this app, you
                  can find various events, and you have the option to purchase
                  tickets for these events. It is built using React.js and Daisy
                  UI.
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://paywave-wallet.vercel.app"
              className="rounded-xl shadow-xl max-w-md cursor-pointer hover:scale-[1.05] transition-all"
            >
              <Image src={Wallet} alt="Projects" width={500} />
              <div className="p-5">
                <div className="text-xl font-bold">Paywave</div>
                <div className="text-md">Role: Fullstack Developer</div>
                <div className="text-md">
                  Eventific is an event management application. In this app, you
                  can find various events, and you have the option to purchase
                  tickets for these events. It is built using React.js and Daisy
                  UI.
                </div>
              </div>
            </a>
            <a
              target="_blank"
              href="https://github.com/fahmiitmamul/Eventific-Mobile/releases/tag/1.0.0"
              className="rounded-xl shadow-xl max-w-md cursor-pointer hover:scale-[1.05] transition-all"
            >
              <Image src={EventificMobile} alt="Projects" width={500} />
              <div className="p-5">
                <div className="text-xl font-bold">Eventific Mobile</div>
                <div className="text-md">Role: Mobile Developer</div>
                <div className="text-md">
                  Eventific is an event management application. In this app, you
                  can find various events, and you have the option to purchase
                  tickets for these events. It is built using React.js and Daisy
                  UI.
                </div>
              </div>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center h-[700px] bg-gradient-to-tr from-blue-300 via-white to-orange-300 text-[#383838] py-10">
          <div className="flex flex-col gap-10 justify-center items-center text-center">
            <div className="font-bold text-2xl max-w-sm md:max-w-none">
              You can reach out me by clicking link below, or just say hi to me
              :)
            </div>
            <Link
              className="flex gap-4 hover:scale-[1.1] transition-all"
              href="https://www.linkedin.com/in/itmamulfahmi"
            >
              <div>
                <BsLinkedin size={30} />
              </div>
              <div className="w-[100px]">
                <div className="font-bold">Linkedin</div>
              </div>
            </Link>
            <Link
              className="flex gap-4 hover:scale-[1.1] transition-all"
              href="https://www.github.com/fahmiitmamul"
            >
              <div>
                <FaGithub size={30} />
              </div>
              <div className="w-[100px]">
                <div className="font-bold">Github</div>
              </div>
            </Link>
            <Link
              className="flex gap-4 hover:scale-[1.1] transition-all"
              href="https://www.instagram.com/fahmiitmamul"
            >
              <div>
                <FaInstagram size={30} />
              </div>
              <div className="w-[100px]">
                <div className="font-bold">Instagram</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </ConfigProvider>
  );
}
