import {
  AiOutlineLinkedin,
  AiOutlineMail,
  AiOutlinePhone,
} from "react-icons/ai";

import {
  SiMysql,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiNodedotjs,
  SiCss3,
  SiHtml5,
  SiPrisma,
  SiPhp,
  SiNodemon,
  SiDaisyui,
  SiReact,
} from "react-icons/si";

export const info = [
  {
    name: "Gmail",
    content: "roalddelacruz2000@gmail.com",
    icon: <AiOutlineMail size={24} />,
  },
  {
    name: "Phone",
    content: (
      <a href="tel:+639925744271">
        <span className="p-1 rounded bg-black text-white mr-1">+63</span>
        <p className="inline">992-574-4271</p>
      </a>
    ),
    icon: <AiOutlinePhone size={24} />,
  },
  {
    name: "LinkedIn",
    content: (
      <a
        href="https://linkedin.com/in/roald-dela-cruz-6a180127a"
        className=""
        target="_blank"
        rel="noreferrer"
      >
        Make a connection
      </a>
    ),
    link: "https://linkedin.com/in/roald-dela-cruz-6a180127a",
    icon: <AiOutlineLinkedin size={24} />,
  },
];

export const skills = [
  {
    name: "Web Development",
    tech: {
      lang: [
        { name: "HTML", icon: <SiHtml5 size={36} /> },
        { name: "CSS", icon: <SiCss3 size={36} /> },
        { name: "JavaScript", icon: <SiJavascript size={36} /> },
        { name: "PHP", icon: <SiPhp size={36} /> },
      ],
      front_stack: [
        { name: "React", icon: <SiReact size={36} /> },
        { name: "TailwindCSS", icon: <SiTailwindcss size={36} /> },
        { name: "DaisyUI", icon: <SiDaisyui size={36} /> },
      ],
      back_stack: [
        { name: "NodeJs", icon: <SiNodedotjs size={36} /> },
        { name: "ExpressJs", icon: <SiExpress size={36} /> },
        { name: "Nodemon", icon: <SiNodemon size={36} /> },
        { name: "Prisma", icon: <SiPrisma size={36} /> },
        { name: "MySQL - DB", icon: <SiMysql size={36} /> },
      ],
    },
  },
  // {
  //     name: 'Application Development',
  //     tech: {
  //         lang: [
  //             { name: 'C#', icon: <SiCsharp size={36} /> },
  //             { name: 'Visual Basic', icon: <div>Visual Basic</div> },
  //         ],
  //         front_stack: [
  //             { name: 'C# GUI', icon: <SiCsharp size={36} /> },
  //         ],
  //         back_stack: [
  //             { name: 'MySQL', icon: <SiMysql size={36} /> },
  //             { name: 'MSAccess', icon: <SiMicrosoftaccess size={36} /> },
  //             { name: 'SQLite', icon: <SiSqlite size={36} /> },
  //         ],
  //     }
  // }
];

export const personal_skills = [
  // { name: "Task Management" },
  { name: "Streamlined task management to achieve optimal productivity and organization in high-pressure work environments." },
  // { name: "Adaptability" },  
  { name: "Demonstrated exceptional adaptability in successfully handling diverse and rapidly changing work environments." },
  // { name: "FLexiblity" },  
  { name: "Maintained a high level of flexibility by quickly adjusting to new priorities and projects, contributing to successful completion of team goals." },
  // { name: "Detail oriented" },  
  { name: "Consistently demonstrated exceptional attention to detail, ensuring accuracy and quality in all aspects of work." },
  { name: "System OS Installation | Re-format" },
];

import { BiLogoTailwindCss, BiLogoReact } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";

export const projects = [
  {
    name: "Static React Task/Todo App",
    description:
      "This is a simplistic demo of a Todo app without a backend implementation. However, a backend will soon be included. So it can be called a Full-Stack Application that includes both Frontend and Backend development",
    link: "https://roald2000.github.io/static-react-task-app",
    stack: [
      {
        tech: <BiLogoTailwindCss key={"BiLogoTailwindCss"} size={32} />,
        techName: "TailwindCSS",
      },
      {
        tech: <BiLogoReact key={"BiLogoReact"} size={32} />,
        techName: "React",
      },
    ],
  },
  {
    name: "Simple Todo/Task REST API",
    description:
      "This application is built using MySQL as the database for data storage and Prisma as the ORM for database models, with JSON Web Token (JWT) authentication implemented for security. It also provides users with the ability to read, create, update, and  their own data, ensuring a personalized experience.",
    link: "https://github.com/Roald2000/task-management-rest-prisma-api",
    stack: [
      { tech: <FaNodeJs key={"FaNodeJs"} size={32} />, techName: "NodeJs" },
      {
        tech: <SiExpress key={"SiExpress"} size={32} />,
        techName: "ExpressJs",
      },
      { tech: <SiMysql key={"SiMysql"} size={32} />, techName: "MySql" },
      { techName: "Prisma", tech: <SiPrisma key={"SiPrisma"} size={32} /> },
    ],
  },
  {
    name: "FullStack Logbook App",
    description:
      "A logbook application where an employee/user times in and times out",
    link: "https://github.com/Roald2000/LogBook",
    stack: [
      { tech: <SiReact size={32} />, techName: "Reach" },
      { tech: <SiTailwindcss size={32} />, techName: "TailwindCss" },
      { tech: <SiPhp size={32} />, techName: "PHP - REST API" },
      { tech: <SiMysql size={32} />, techName: "MySQL - DB" },
    ],
  },
  {
    name: "PHP RESTful API",
    description:
      "This app contains the backend code for an API. The API provides endpoints for retrieving information from and adding information to a database. The endpoints are related to a system that logs the time when employees of a company clock in and out.",
    link: "https://github.com/Roald2000/php_api_with_bramus_router",
    stack: [
      { tech: <SiPhp size={32} />, techName: "PHP - REST API" },
      { tech: <SiMysql size={32} />, techName: "MySQL - DB" },
      {
        tech: (
          <a
            href="https://packagist.org/packages/symfony/dotenv"
            target="_blank"
            rel="noreferrer"
            className="text-xs link link-primary"
          >
            symfony/dotenv
          </a>
        ),
        techName: "Accessing environment variables",
      },
      {
        tech: (
          <a
            href="https://github.com/bramus/router"
            target="_blank"
            rel="noreferrer"
            className="text-xs link link-primary"
          >
            bramus/router
          </a>
        ),
        techName: "Routing API endpoints",
      },
    ],
  },
];

export const academia = [
  {
    name: "Dr. Aurelio Mendoza Memorial Colleges",
    address: "Poblacion, Ipil, Zamboanga Sibugay Province",
    academic_year: "2019 - 2023",
    department: "College of Computer Studies",
    degree_course: "Bachelor of Science in Information Technology",
    major: "",
  },
  {
    name: "Dr. Aurelio Mendoza Memorial Colleges",
    address: "Poblacion, Ipil, Zamboanga Sibugay Province",
    academic_year: "2017 - 2019",
    department: "Senior High School",
    degree_course: "Technology, Vocational & Livelihood Track",
    major: "Computer Programming",
  },
];

export const experience = [
  {
    company_institution: "Zamboanga del Sur Electric Cooperative II",
    acron: "ZAMSURECO II",
    address: "Poblacion, Ipil, Zamboanga Sibugay Province",
    duration: "January - May 2023",
    position: "On-The-Job Trainee / Intern",
    department_assignment: {
      department: "Finance Services Department",
      section: "Warehouse Section",
    },
  },
];
