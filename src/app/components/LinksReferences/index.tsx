import Image from 'next/image'
import React from 'react'
import IconGithub from '@images/github.svg'
import IconCodePen from '@images/codepen.svg'
import IconIntagram from '@images/intagram.svg'
import IconLinkedIn from '@images/linkedin.svg'

const LinksReferences = () => {
    return (
        <ul className="ml-1 mt-8 flex items-center flex-wrap" aria-label="Social media">
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://github.com/EfrenHerrera/" target="_blank" rel="noreferrer">
                    <span className="sr-only">GitHub</span>
                    <IconGithub  width={24} height={24}  />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://codepen.io/EfrenHHI" target="_blank" rel="noreferrer">
                    <span className="sr-only">CodePen</span>
                    <IconCodePen width={24} height={24}  />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://instagram.com/efrenerror" target="_blank" rel="noreferrer">
                    <span className="sr-only">Instagram</span>
                    <IconIntagram width={24} height={24}  />
                </a>
            </li>
            <li className="mr-5 text-xs">
                <a className="block hover:text-slate-200" href="https://www.linkedin.com/in/efrenherrerai/" target="_blank" rel="noreferrer">
                    <span className="sr-only">LinkedIn</span>
                    <IconLinkedIn width={24} height={24}  />
                </a>
            </li>
        </ul>
    )
}

export default LinksReferences