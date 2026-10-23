import React from 'react'
import { experiences } from '@/config/index'
import { IconArrowUpRight, IconLink } from '@tabler/icons-react'

const Experiences: React.FC = () => {
    const ArrowIcon = () => <IconArrowUpRight aria-hidden="true" className='ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none' />

    return (
        <>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list space-y-6 sm:space-y-8">
                    {
                        experiences.map((experience) => (
                            <li key={`${experience.company}-${experience.period}`}>
                                <article className="group relative grid gap-3 rounded-lg border border-slate-800/80 bg-slate-900/30 p-4 transition-colors motion-reduce:transition-none sm:grid-cols-10 sm:gap-8 sm:p-5 md:gap-4 lg:-mx-6 lg:border-transparent lg:bg-transparent lg:p-6 lg:hover:!opacity-100 lg:hover:border-slate-800/80 lg:hover:bg-slate-800/50 lg:hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:hover:drop-shadow-lg lg:group-hover/list:opacity-50">
                                    <header className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300/90 sm:col-span-3 sm:pt-1" aria-label={`Employment period: ${experience.period}`}>
                                        {experience.period}
                                    </header>
                                    <div className="min-w-0 sm:col-span-7">
                                        <h3 className="text-base font-semibold leading-snug text-slate-100">
                                            {experience.role}
                                        </h3>
                                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-6">
                                            {
                                                experience.link ? (
                                                    <a className="group/link inline-flex min-h-7 items-center rounded-sm font-medium text-slate-300 transition-colors hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                                                        href={experience.link} target="_blank" rel="noreferrer" aria-label={`${experience.company} (opens in a new tab)`}>
                                                        <span>{experience.company}</span>
                                                        <ArrowIcon />
                                                    </a>
                                                ) : (
                                                    <span className="font-medium text-slate-300">{experience.company}</span>
                                                )
                                            }
                                            {
                                                experience.details && (
                                                    <span className="text-slate-500">{experience.details}</span>
                                                )
                                            }
                                        </div>
                                        <p className="mt-3 text-sm leading-relaxed text-slate-400">
                                            {experience.description}
                                        </p>
                                        {
                                            experience.links && (
                                                <ul className="mt-2 flex flex-wrap gap-x-4" aria-label="Related links">
                                                    {
                                                        experience.links.map((link, index) => (
                                                            <li key={`experience-link-${index}`} >
                                                                <a className="relative mt-1 inline-flex min-h-9 items-center rounded-sm text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900" href={link.url} target="_blank" rel="noreferrer">
                                                                    <IconLink className="mr-1 h-3 w-3" aria-hidden="true" />
                                                                    <span>{link.label}</span>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }
                                                </ul>
                                            )
                                        }
                                        <ul className="mt-3 flex flex-wrap gap-1.5" aria-label="Technologies used">
                                            {
                                                experience.technologies.map((tech) => (
                                                    <li key={`${experience.company}-${tech}`}>
                                                        <span className="flex items-center rounded-full border border-teal-400/10 bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                            {tech}
                                                        </span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </div>
                                </article>
                            </li>
                        ))
                    }
                </ol>
                <div className="mt-12">
                    <a className="group/link inline-flex min-h-11 items-center rounded-sm text-base font-semibold leading-tight text-slate-200 hover:text-teal-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
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
