
import { BiLogoTailwindCss, BiLogoReact } from 'react-icons/bi';
import { FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMysql, SiPhp, SiPrisma, SiReact, SiSymfony, SiTailwindcss } from 'react-icons/si';

const projects = [
  {
    name: "Static React Task/Todo App",
    description: "This is a simplistic demo of a Todo app without a backend implementation. However, a backend will soon be included. So it can be called a Full-Stack Application that includes both Frontend and Backend development",
    link: "https://roald2000.github.io/static-react-task-app",
    stack: [{ tech: <BiLogoTailwindCss key={'BiLogoTailwindCss'} size={32} />, techName: 'TailwindCSS' }, { tech: <BiLogoReact key={'BiLogoReact'} size={32} />, techName: 'React' }]
  },
  {
    name: "Simple Todo/Task REST API",
    description: "This application is built using MySQL as the database for data storage and Prisma as the ORM for database models, with JSON Web Token (JWT) authentication implemented for security. It also provides users with the ability to read, create, update, and  their own data, ensuring a personalized experience.",
    link: "https://github.com/Roald2000/task-management-rest-prisma-api",
    stack: [{ tech: <FaNodeJs key={'FaNodeJs'} size={32} />, techName: 'NodeJs' }, { tech: <SiExpress key={'SiExpress'} size={32} />, techName: 'ExpressJs' }, { tech: <SiMysql key={'SiMysql'} size={32} />, techName: 'MySql' }, { techName: 'Prisma', tech: <SiPrisma key={'SiPrisma'} size={32} /> }]
  },
  {
    name: "FullStack Logbook App",
    description: "A logbook application where an employee/user times in and times out",
    link: "https://github.com/Roald2000/LogBook",
    stack: [
      { tech: <SiReact size={32} />, techName: 'Reach' },
      { tech: <SiTailwindcss size={32} />, techName: 'TailwindCss' },
      { tech: <SiPhp size={32} />, techName: 'PHP - REST API' },
      { tech: <SiMysql size={32} />, techName: 'MySQL - DB' },
    ]
  },
  {
    name: "PHP RESTful API",
    description: "This app contains the backend code for an API. The API provides endpoints for retrieving information from and adding information to a database. The endpoints are related to a system that logs the time when employees of a company clock in and out.",
    link: "https://github.com/Roald2000/php_api_with_bramus_router",
    stack: [
      { tech: <SiPhp size={32} />, techName: 'PHP - REST API' },
      { tech: <SiMysql size={32} />, techName: 'MySQL - DB' },
      { tech: <a href='https://packagist.org/packages/symfony/dotenv' target='_blank' className='text-xs link link-primary'>symfony/dotenv</a>, techName: 'Accessing environment variables' },
      { tech: <a href='https://github.com/bramus/router' target='_blank' className='text-xs link link-primary'>bramus/router</a>, techName: 'Routing API endpoints' },
    ]
  },
];


export default function Projects() {
  return <section className='flex flex-col gap-3'>
    {projects.map((project, projectIndex) => {
      return <div key={projectIndex} id={projectIndex} className={` w-full  flex-col flex items-stretch justify-center flex-wrap ${projectIndex % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4`}>
        <div className='flex-1 bg-black p-2 rounded'>

        </div>
        <div className='flex-1 relative'>
          <h4 className='text-xl font-semibold'>{project.name}</h4>
          <div className='divider my-1'></div>
          <div className='flex gap-2 items-center justify-start'>
            <h1>Tech Stack -</h1>
            {project.stack.map((stack, key) => {
              return <div key={key} className='tooltip tooltip-primary' data-tip={stack.techName}>
                {stack.tech}
              </div>
            })}
          </div>
          <a target='_blank' href={project.link} className='link link-primary'>Visit</a>
          <div className='divider my-1'></div>
          <p className=''>{project.description}</p>
          <div className='divider my-1'></div>
        </div>
      </div>
    })}
  </section >;
}
