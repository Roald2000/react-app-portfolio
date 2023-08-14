

import {
  FaCloudRain,
  FaDiagramProject,
  FaGear,
  FaGithub,
  FaPeopleGroup,
  FaPooStorm,
} from "react-icons/fa6";

import {
  BiPen
} from "react-icons/bi";

import { info, skills } from '../assets/data';
import { FaSchool } from "react-icons/fa";




export default function Home() {
  return (
    <>
      <section className="w-full">
        <h2 className="my-2 text-2xl sm:text-4xl">Digital Porfolio | Resume</h2>
      </section>
      <section className="w-full pt-2">
        <h4 className="text-xl flex flex-col items-start gap-1 flex-wrap">
          <span className="text-xs sm:text-lg font-bold">Roald Dela Cruz</span>
          <span className="text-xs sm:text-md p-1 rounded kbd ">
            Web Developer | Backend
          </span>
        </h4>
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <span>Summary</span> <BiPen />
        </h2>
        <p className="p-2">
          Passionate and driven junior with a foundation in web
          development, including skills in PHP, MySQL, HTML/CSS,
          JavaScript, ReactJS, NodeJS, and RESTful API{"'"}s. Seeking an opportunity
          to join a collaborative development team, where I can contribute my
          skills and actively participate in the growth and success within your
          organization.
        </p>
      </section>
      {/* Skills & Tech */}
      <section className="w-full pt-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <span className="">Skills & Tech</span> <FaGear />
        </h2>
        {/* Data Here */}

        {skills.map((skill, skillIndex) => {
          return <div className="p-4" key={skillIndex}>
            <h3 className="text-xl font-bold">{skill.name}</h3>
            <div className="my-2">
              <h4 className="ml-2 my-2 text-lg font-medium">Languages</h4>
              <ul className="ml-4 flex gap-2 items-center flex-wrap">
                {skill.tech.lang.map((stack, stackIndex) => {
                  return <li key={stackIndex} className="tooltip tooltip-primary hover:animate-pulse" data-tip={stack.name}>
                    {stack.icon}
                  </li>
                })}
              </ul>
            </div>
            <div className="my-2">
              <h4 className="ml-2 my-2 text-lg font-medium">Frontend - UI</h4>
              <ul className="ml-4 flex gap-2 items-center flex-wrap">
                {skill.tech.front_stack.map((stack, stackIndex) => {
                  return <li key={stackIndex} className="tooltip tooltip-primary hover:animate-pulse" data-tip={stack.name}>
                    {stack.icon}
                  </li>
                })}
              </ul>
            </div>
            <div className="my-2">
              <h4 className="ml-2 my-2 text-lg font-medium">Backend - REST API</h4>
              <ul className="ml-4 py-2 flex gap-2 items-center flex-wrap  ">
                {skill.tech.back_stack.map((stack, stackIndex) => {
                  return <li key={stackIndex} className="tooltip tooltip-primary hover:animate-pulse" data-tip={stack.name}>
                    {stack.icon}
                  </li>
                })}
              </ul>
            </div>
          </div>
        })}
      </section >
      {/* <!-- //TODO --> Contact */}
      < section className="w-full  pt-2" >
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex justify-start items-center gap-1">
          Reach Me Now @
        </h2>
        {/* Data Here */}
        {
          info.map((infoItem, infoIndex) => {
            return <div className=" relative group overflow-hidden" key={infoIndex}>
              <ul className=" cursor-default flex items-center gap-3 relative">
                <li className="my-1 relative overflow-hidden">
                  <p className="peer group-hover:text-sky-600">{infoItem?.icon}</p>
                </li>
                <li className="my-1 group-hover:text-sky-600">{infoItem.name}</li>
                <li onClick={() => {
                  navigator.clipboard.writeText(infoItem.content)
                }} className="my-1 cursor-pointer p-2 hover:bg-sky-600 hover:text-black">{infoItem.content}</li>
              </ul>
              <div className="p-[2px] bg-sky-600 w-0 absolute bottom-0 -left-full group-hover:left-0 group-hover:w-full duration-500"></div>
            </div>
          })
        }
      </ section>


      <section className="w-full pt-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <span>Simple Hobby Projects</span> <FaDiagramProject />
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
              target="_blank" rel="noreferrer"
            >
              github <FaGithub />
            </a>{" "}
            instead
          </span>
        </p>
      </section>

      <section className="w-full pt-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <span>Work Experience</span> <FaPeopleGroup />
        </h2>
        <div>
          <div className="collapse collapse-plus">
            <input type="checkbox" name="" id="" />
            <div className=" collapse-title">
              <h2 >Zamboanga del Sur Electric Cooperative II</h2>
              <a href="#" className="link-primary">Visit WebSite</a>
            </div>
            <div className="collapse-content">
              <h2 className="my-1 font-medium">Company</h2>
              <ul className="mx-4">
                <li className="font-bold">ZAMSURECO II</li>
                <li className="">Pangi, Ipil , Zamboanga Sibugay</li>
                <li className="italic">Student Intern | OJT</li>
                <li className="font-medium">Warehouse Man</li>
                <li className="font-semibold">2023 | January - May</li>
              </ul>
              <h2 className="my-1 font-medium">Skills Developed/Gained</h2>
              <ul className="mx-4">
                <li>Adaptability & Flexibility</li>
                <li>Time Management</li>
                <li>Task Management</li>
                <li>Inventory</li>
              </ul>
            </div>
          </div>
        </div>

      </section>

      <section className="w-full pt-2">
        <h2 className="my-2 text-lg sm:text-2xl font-semibold flex items-center gap-2">
          <span>Education</span> <FaSchool />
        </h2>
        <ul className="mx-3 mt-1">
          <li className="font-bold"> {'>'} Dr. Aurelio Mendoza Memorial Colleges</li>
          <li className="italic">College of Computer Studies Department</li>
          <li className="font-medium">BS in Information Technology</li>
          <li className="font-semibold">2019 - 2023</li>
        </ul>
        <ul className="mx-3 mt-1">
          <li className="font-bold">{'>'} Dr. Aurelio Mendoza Memorial Colleges</li>
          <li className="italic">Technology, Vocational, & Livelihood Track (TVL)</li>
          <li className="font-medium">Computer Programming</li>
          <li className="font-semibold">2017 - 2019</li>
        </ul>
      </section>

    </>
  );
}
