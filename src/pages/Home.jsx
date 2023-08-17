import {
  FaArrowRight,
  FaCloudRain,
  FaDiagramProject,
  FaGear,
  FaGithub,
  FaPeopleRoof,
  FaPooStorm,
  FaPerson,
} from "react-icons/fa6";

import { BiPen } from "react-icons/bi";

import { info, personal_skills, skills } from "../assets/data";
import { FaMailBulk, FaSchool } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* Intro */}
      <section className="w-full">
        <h2 className="my-2 text-2xl sm:text-4xl">Digital Porfolio | Resume</h2>
        <h4 className="text-xl flex items-start gap-1 flex-wrap">
          <span className="text-xs sm:text-lg font-bold">Roald Dela Cruz</span>
          <span className="text-xs sm:text-md p-1 rounded kbd border-primary text-primary">
            Web Developer | Backend
          </span>
        </h4>
      </section>

      {/* Summary */}
      <section className="w-full my-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <BiPen size={32} /> <span>Summary</span>
        </h2>
        <p className="mx-2">
          Passionate and driven junior with a foundation in web development,
          including skills in PHP, MySQL, HTML/CSS, JavaScript, ReactJS, NodeJS,
          and RESTful API{"'"}s. Seeking an opportunity to join a collaborative
          development team, where I can contribute my skills and actively
          participate in the growth and success within your organization.
        </p>
      </section>

      {/* Experience */}
      <section className="w-full my-2">
        <h2 className="my-3 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <FaPeopleRoof size={32} />
          <span>Experience | Internships</span>
        </h2>
        <div className="" id="company_list">
          <div className="mt-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex gap-2 items-center">
                <span className="">ZAMSURECO II</span>
                <span className="text-slate-500 italic font-light">
                  Pangi, Ipil, Zamboanga Sibugay 7001
                </span>
              </h3>
              <h3 className="font-normal">2023 January - May</h3>
            </div>
            <div className="divider my-1"></div>
            <ul className="mx-2">
              <li className="font-medium">
                Zamboanga del Sur Electric Cooprative II
              </li>
              <li className="">Engineering Department -- Warehouse Office</li>
              <li className="">Student Intern | OJT -- Warehouse Man</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="w-full my-2">
        <h2 className="my-3 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <FaSchool size={32} />
          <span>Education</span>
        </h2>
        <div className="" id="company_list">
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex gap-2 items-center">
                <span className="">Dr. Aurelio Mendoza Memorial Colleges</span>
                <span className="text-slate-500 italic font-light">
                  Poblacion, Ipil, Zamboanga Sibugay 7001
                </span>
              </h3>
              <h3 className="font-normal">2019 - 2023</h3>
            </div>
            <div className="divider my-1"></div>
            <ul className="mx-2">
              <li className="font-medium">College of Computer Studies</li>
              <li className="">
                Bachelor of Science in Information Technology
              </li>
            </ul>
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold flex gap-2 items-center">
                <span className="">Dr. Aurelio Mendoza Memorial Colleges</span>
                <span className="text-slate-500 italic font-light">
                  Poblacion, Ipil, Zamboanga Sibugay 7001
                </span>
              </h3>
              <h3 className="font-normal">2017 - 2019</h3>
            </div>
            <div className="divider my-1"></div>
            <ul className="mx-2">
              <li className="font-medium">
                Technology, Vocational & Livelihood Track (TVL)
              </li>
              <li className="">Computer Programming</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Personal Skills */}
      <section className="w-full my-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <FaPerson size={32} />
          <span>Personal Skills</span>
        </h2>
        {personal_skills.map((skill, skillIndex) => {
          return (
            <ul key={skillIndex} className="my-2 mx-3">
              <li className="flex items-center gap-2 hover: cursor-default hover:bg-primary hover:text-white p-1">
                <FaArrowRight /> {skill.name}
              </li>
            </ul>
          );
        })}
      </section>

      {/* Programming/Development Skills */}
      <section className="w-full my-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <FaGear size={32} />{" "}
          <span className="">Programming/Development Skills</span>
        </h2>
        {/* Data Here */}

        {skills.map((skill, skillIndex) => {
          return (
            <div className="p-4" key={skillIndex}>
              <h3 className="text-xl font-bold">{skill.name}</h3>
              <div className="my-2">
                <h4 className="ml-2 my-2 text-lg font-medium">Languages</h4>
                <ul className="ml-4 flex gap-2 items-center flex-wrap">
                  {skill.tech.lang.map((stack, stackIndex) => {
                    return (
                      <li
                        key={stackIndex}
                        className="tooltip tooltip-primary"
                        data-tip={stack.name}
                      >
                        {stack.icon}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-2">
                <h4 className="ml-2 my-2 text-lg font-medium">Frontend - UI</h4>
                <ul className="ml-4 flex gap-2 items-center flex-wrap">
                  {skill.tech.front_stack.map((stack, stackIndex) => {
                    return (
                      <li
                        key={stackIndex}
                        className="tooltip tooltip-primary"
                        data-tip={stack.name}
                      >
                        {stack.icon}
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="my-2">
                <h4 className="ml-2 my-2 text-lg font-medium">
                  Backend - REST API
                </h4>
                <ul className="ml-4 py-2 flex gap-2 items-center flex-wrap  ">
                  {skill.tech.back_stack.map((stack, stackIndex) => {
                    return (
                      <li
                        key={stackIndex}
                        className="tooltip tooltip-primary"
                        data-tip={stack.name}
                      >
                        {stack.icon}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          );
        })}
      </section>
      {/*  Contact */}
      <section className="w-full  my-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex justify-start items-center gap-2">
          <FaMailBulk size={32} />
          <span>Contact</span>
        </h2>
        {/* Data Here */}
        {info.map((infoItem, infoIndex) => {
          return (
            <div className=" relative group overflow-hidden" key={infoIndex}>
              <ul className=" cursor-default flex items-center gap-3 relative">
                <li className="my-1 relative overflow-hidden">
                  <p className="peer group-hover:text-sky-600">
                    {infoItem?.icon}
                  </p>
                </li>
                <li className="my-1 group-hover:text-sky-600">
                  {infoItem.name}
                </li>
                <li
                  onClick={() => {
                    navigator.clipboard.writeText(infoItem.content);
                  }}
                  className="my-1 cursor-pointer p-2 hover:bg-sky-600 hover:text-black"
                >
                  {infoItem.content}
                </li>
              </ul>
              <div className="p-[2px] bg-sky-600 w-0 absolute bottom-0 -left-full group-hover:left-0 group-hover:w-full duration-500"></div>
            </div>
          );
        })}
      </section>

      {/* Projects/Hobbies */}
      <section className="w-full my-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <FaDiagramProject size={32} />
          <span>Simple Hobby Projects</span>
        </h2>
        <p className=" pl-3 flex items-center flex-wrap gap-2">
          <span className="flex items-center gap-2">
            <FaCloudRain /> Undergoing Construction <FaPooStorm />
          </span>
          <span className="flex items-center gap-1">
            Try checking my{" "}
            <a
              className="flex items-center gap-1 p-1 rounded bg-black text-white"
              href="https://github.com/Roald2000"
              target="_blank"
              rel="noreferrer"
            >
              github <FaGithub />
            </a>{" "}
            instead
          </span>
        </p>
      </section>
    </>
  );
}
