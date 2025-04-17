"use client";
import React, { useEffect } from 'react'
import { navigations, technologies } from '@/config/index'
import LinksReferences from './components/LinksReferences'
import Experiences from './components/Experiences'
import Projects from './components/Projects'
import * as Sentry from '@sentry/nextjs';
import { usePathname } from 'next/navigation';

const Home: React.FC = () => {
  const pathname = usePathname();

  useEffect(() => {
    Sentry.captureMessage(`User navigated to: ${pathname}`, "info");
  }, [pathname]);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className='lg:flex lg:justify-between lg:gap-6'>
        <header className='lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-5/12 lg:flex-col lg:justify-between lg:py-24'>
          <div>
            <h1 className='text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl'>Efren Herrera</h1>
            <h2 className="mt-3 text-2xl font-medium tracking-tight text-slate-200">Full-Stack Engineer</h2>
            <p className="mt-4 max-w-xs leading-normal">
              I code seamless, innovative, and responsive digital solutions for an unparalleled user experience.
            </p>

            {/* Technologies of interest */}
            <div>
              <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200">Technologies of interest</h2>
              <ul className="ml-1 mt-3 flex items-center flex-wrap" aria-label="Technologies of interest">
                {
                  technologies.map((tech, index) => (
                    <li className="mr-5 text-xs" key={`technologies-${index}`}>
                      <a className="block hover:text-slate-200" target="_blank" rel="noreferrer">
                        <span className="sr-only">{tech.name}</span>
                        <tech.icon size={30} stroke={1} />
                      </a>
                    </li>
                  ))
                }
              </ul>
            </div>

            {/* Navigation */}
            <nav className="nav hidden lg:block" aria-label="In-page jump links">
              <ul className="mt-16 w-max">
                {
                  navigations.map((nav, index) => (
                    <li key={`section-${index}`}>
                      <a className="group flex items-center py-3 active" href={`#${nav.id}`}>
                        <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
                        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                          {nav.label}
                        </span>
                      </a>
                    </li>
                  ))
                }
              </ul>
            </nav>
          </div>

          {/* Links References */}
          <LinksReferences />
        </header>

        <main id='content' className='pt-24 lg:w-7/12 lg:py-24'>
          <section id='about' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div>
              <p className="mb-4">
                Since 2018, I have been engaged in software development. Throughout my career, I have worked with various programming languages and explored different areas within the development landscape. Over the past nearly two years, I have dedicated my efforts to mobile development, collaborating with diverse clients. My experience encompasses both Front-End and Backend development. Currently, I am venturing into the realm of artificial intelligence to undertake a project for one of my clients.
              </p>
              <p className="mb-4">
                My primary focus in recent times has shifted towards creating products and overseeing my own projects. What I find most fulfilling is crafting software at the intersection of design and engineering—creating aesthetically pleasing solutions that are also robust beneath the surface. I thrive on being creative and innovative in my work.
              </p>
              <p>
                Beyond the computer screen, you can often find me socializing with friends, enjoying shows, or exploring Hyrule in search of <span className="group/korok inline-flex lg:cursor-[url('/images/Elma.png'),_pointer] lg:font-medium lg:text-slate-200">
                  <span className="sr-only"> Korok seeds</span>
                  <span className="group-hover/korok:text-red-400 transition duration-75 group-hover/korok:-translate-y-px delay-[50ms]" aria-hidden="true">K</span>
                  <span className="group-hover/korok:text-orange-400 transition duration-75 group-hover/korok:-translate-y-px delay-[75ms]" aria-hidden="true">o</span>
                  <span className="group-hover/korok:text-yellow-400 transition duration-75 group-hover/korok:-translate-y-px delay-[100ms]" aria-hidden="true">r</span>
                  <span className="group-hover/korok:text-lime-400 transition duration-75 group-hover/korok:-translate-y-px delay-[125ms]" aria-hidden="true">o</span>
                  <span className="group-hover/korok:text-green-400 transition duration-75 group-hover/korok:-translate-y-px delay-[150ms]" aria-hidden="true">k</span>
                  <span className="group-hover/korok:text-teal-400 transition duration-75 group-hover/korok:-translate-y-px delay-[175ms]" aria-hidden="true">&nbsp;</span>
                  <span className="group-hover/korok:text-cyan-400 transition duration-75 group-hover/korok:-translate-y-px delay-[200ms]" aria-hidden="true">s</span>
                  <span className="group-hover/korok:text-sky-400 transition duration-75 group-hover/korok:-translate-y-px delay-[225ms]" aria-hidden="true">e</span>
                  <span className="group-hover/korok:text-blue-400 transition duration-75 group-hover/korok:-translate-y-px delay-[250ms]" aria-hidden="true">e</span>
                  <span className="group-hover/korok:text-indigo-400 transition duration-75 group-hover/korok:-translate-y-px delay-[275ms]" aria-hidden="true">d</span>
                  <span className="group-hover/korok:text-violet-400 transition duration-75 group-hover/korok:-translate-y-px delay-[300ms]" aria-hidden="true">s</span>
                </span>.
              </p>
            </div>
          </section>

          <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <Experiences />
          </section>

          {/* <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <Projects />
          </section> */}
        </main>
      </div>
    </div>
  )
}

export default Home

// TODO: 
// https://brittanychiang.com/#projects