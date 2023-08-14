
import { projects } from '../assets/data';


export default function Projects() {
  return <section>
    {projects.map((projectItem, projectIndex) => {
      return <div key={projectIndex} className='my-2 bg-base-300 rounded p-2 flex flex-col gap-2 items-stretch justify-center'>
        <h2 className='text-xl font-medium'>{projectItem.name}</h2>

        <div className='mx-4 flex items-center justify-start flex-wrap gap-2'>
          <h3 className='text-md font-medium my-1'>Stack</h3>
          {projectItem.stack.map((stack, key) => {
            return <ul key={key} className='flex items-center gap-2 justify-start flex-wrap'>
              <li className='tooltip tooltip-primary' data-tip={stack.techName}>{stack.tech}</li>
            </ul>
          })}
        </div>

        <div>
          <h3>Description</h3>
          <div className='p-2'>
            {projectItem.description}
          </div>
        </div>
      </div>
    })}
  </section>;
}


{/* <section className='flex flex-col gap-3'>
    {projects.map((project, projectIndex) => {
      return <div key={projectIndex} id={projectIndex} className={` w-full  flex-col flex items-stretch justify-center `}>
        <div className='  relative'>
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
  </section > */}