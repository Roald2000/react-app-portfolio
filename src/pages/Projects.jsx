
import { projects } from '../assets/data';


export default function Projects() {
  return <section className='flex flex-col gap-3'>
    {projects.map((project, projectIndex) => {
      return <div key={projectIndex} id={projectIndex} className={` w-full  flex-col flex items-stretch justify-center flex-wrap ${projectIndex % 2 ? 'sm:flex-row-reverse' : 'sm:flex-row'} gap-4`}>
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
