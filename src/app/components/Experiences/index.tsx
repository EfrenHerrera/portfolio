import React from 'react'
import { experiences } from '@/config/index'
import { IconArrowUpRight, IconLink } from '@tabler/icons-react'

const Experiences: React.FC = () => {
    const ArrowIcon = () => <IconArrowUpRight className='inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px' />
    return (
        <>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {
                        experiences.map((experience, index) => (
                            <li className="mb-12" key={`experience-${index}`}>
                                <div className="group relative grid pb-1 transition-all sm:grid-cols-10 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                    <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg">
                                    </div>
                                    <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-3" aria-label="2018 to Present">
                                        {experience.period}
                                    </header>
                                    <div className="z-10 sm:col-span-7">
                                        <h3 className="font-medium leading-snug text-slate-200">
                                            <div>
                                                <a className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                                                    href={experience.link ? experience.link : ""} target="_blank" rel="noreferrer" aria-label={experience.title}>
                                                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                    <span> {experience.title} <ArrowIcon /> </span>
                                                </a>
                                            </div>
                                            <div>
                                                <div className="text-slate-500" aria-hidden="true">{experience.position}</div>
                                            </div>
                                        </h3>
                                        <p className="mt-2 text-sm leading-normal">
                                            {experience.description}
                                        </p>
                                        {
                                            experience.links && (
                                                <ul className="mt-2 flex flex-wrap" aria-label="Related links">
                                                    {
                                                        experience.links.map((link, index) => (
                                                            <li className="mr-4" key={`experience-link-${index}`} >
                                                                <a className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300" href={link.url} target="_blank" rel="noreferrer">
                                                                    <IconLink className="mr-1 h-3 w-3" aria-hidden="true" />
                                                                    <span>{link.label}</span>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                        <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                            {
                                                experience.technologies.map((tech, index) => (
                                                    <li className="mr-1.5 mt-2" key={`experience-tech-${index}`}>
                                                        <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                                            {tech}
                                                        </div>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        ))
                    }
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-baseline leading-tight hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                        href="/resume.pdf" target="_blank" rel="noreferrer noopener" aria-label="View Full Résumé (opens in a new tab)">
                        <span>
                            View Full Résumé <ArrowIcon />
                        </span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default Experiences