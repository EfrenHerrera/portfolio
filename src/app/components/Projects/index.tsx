import { projects } from '@/config'
import { IconArrowUpRight } from '@tabler/icons-react'
import React from 'react'


const Projects: React.FC = () => {
    const ArrowIcon = () => <IconArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
    return (
        <>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {
                        projects.map((project, index) => (
                            <li className="mb-12" key={`projects-${index}`}>
                                <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                    <div className="z-10 sm:order-2 sm:col-span-6">
                                        <h3>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                href="https://www.newline.co/courses/build-a-spotify-connected-app" target="_blank"
                                                rel="noreferrer" aria-label="Build a Spotify Connected App">
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {project.title} <ArrowIcon />
                                                </span>
                                            </a>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {project.description}
                                        </p>
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used:">
                                            {
                                                project.technologies.map((tech, index) => (
                                                    <li className="mr-1.5 mt-2" key={`project-tech-${index}`}>
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                                            {tech}
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                    <img
                                        alt=""
                                        loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                                        style={{ color: 'transparent' }}
                                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                        // srcset="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x, /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x"
                                        src="https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75"
                                    />
                                </div>
                            </li>
                        ))
                    }
                </ul>
                {/* <div className="mt-12">
                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                    href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                    <span>
                        View Full Project Archive <ArrowIcon />
                    </span>
                </a>
              </div> */}
            </div>
        </>
    )
}

export default Projects