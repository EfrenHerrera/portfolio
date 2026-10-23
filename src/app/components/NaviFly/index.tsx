'use client'

import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { createNoise2D } from 'simplex-noise'
import alea from 'alea'

const SECTION_THEMES = {
    about: {
        label: 'About',
        glow: '#60a5fa',
        particle: '#bfdbfe',
        filter: 'drop-shadow(0 0 8px rgba(96, 165, 250, 0.9))',
        message: 'Hey! I build software from product idea to production.',
    },
    'ai-systems': {
        label: 'AI Systems',
        glow: '#5eead4',
        particle: '#c4b5fd',
        filter: 'hue-rotate(55deg) saturate(1.4) drop-shadow(0 0 9px rgba(94, 234, 212, 0.95))',
        message: 'Here, AI means real workflows, structured context, and reliable product behavior.',
    },
    experience: {
        label: 'Experience',
        glow: '#fbbf24',
        particle: '#fde68a',
        filter: 'hue-rotate(320deg) saturate(1.25) drop-shadow(0 0 8px rgba(251, 191, 36, 0.85))',
        message: 'See where full-stack engineering and AI come together in shipped work.',
    },
} as const

type SectionId = keyof typeof SECTION_THEMES

const SECTION_IDS = Object.keys(SECTION_THEMES) as SectionId[]
const noise = createNoise2D(alea(42))

const isSectionId = (value: string): value is SectionId => value in SECTION_THEMES

const useParticleEmitter = (
    containerRef: RefObject<HTMLButtonElement>,
    activeSection: SectionId,
    disabled: boolean,
) => {
    useEffect(() => {
        const container = containerRef.current
        if (!container || disabled) return

        const particles = new Set<HTMLDivElement>()
        const timeouts = new Set<number>()
        const theme = SECTION_THEMES[activeSection]

        const interval = window.setInterval(() => {
            const baseLeft = Number.parseFloat(container.style.left)
            const baseTop = Number.parseFloat(container.style.top)

            if (!Number.isFinite(baseLeft) || !Number.isFinite(baseTop)) return

            const particle = document.createElement('div')
            const isDataParticle = activeSection === 'ai-systems'

            particle.dataset.naviParticle = 'true'
            particle.textContent = isDataParticle ? (Math.random() > 0.5 ? '1' : '0') : ''
            particle.style.position = 'fixed'
            particle.style.left = `${baseLeft + container.offsetWidth / 2}px`
            particle.style.top = `${baseTop + container.offsetHeight / 2}px`
            particle.style.width = isDataParticle ? 'auto' : '3px'
            particle.style.height = isDataParticle ? 'auto' : '3px'
            particle.style.borderRadius = '50%'
            particle.style.background = isDataParticle ? 'transparent' : theme.particle
            particle.style.color = theme.particle
            particle.style.fontFamily = 'monospace'
            particle.style.fontSize = '9px'
            particle.style.lineHeight = '1'
            particle.style.opacity = '0.7'
            particle.style.pointerEvents = 'none'
            particle.style.zIndex = '998'
            particle.style.textShadow = `0 0 6px ${theme.glow}`
            particle.style.transform = `translate(${(Math.random() - 0.5) * 18}px, ${(Math.random() - 0.5) * 18}px)`
            particle.style.transition = 'opacity 900ms ease-out, transform 900ms ease-out'

            document.body.appendChild(particle)
            particles.add(particle)

            requestAnimationFrame(() => {
                particle.style.opacity = '0'
                particle.style.transform += ' scale(1.5)'
            })

            const timeout = window.setTimeout(() => {
                particle.remove()
                particles.delete(particle)
                timeouts.delete(timeout)
            }, 900)
            timeouts.add(timeout)
        }, 160)

        return () => {
            window.clearInterval(interval)
            timeouts.forEach((timeout) => window.clearTimeout(timeout))
            particles.forEach((particle) => particle.remove())
        }
    }, [activeSection, containerRef, disabled])
}

const NaviFly = () => {
    const naviRef = useRef<HTMLButtonElement>(null)
    const panelRef = useRef<HTMLElement>(null)
    const [activeSection, setActiveSection] = useState<SectionId>('about')
    const [panelOpen, setPanelOpen] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(false)

    const theme = SECTION_THEMES[activeSection]

    const closePanel = useCallback((returnFocus = false) => {
        setPanelOpen(false)
        if (returnFocus) window.requestAnimationFrame(() => naviRef.current?.focus())
    }, [])

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
        const updatePreference = () => setReducedMotion(mediaQuery.matches)

        updatePreference()
        mediaQuery.addEventListener('change', updatePreference)
        return () => mediaQuery.removeEventListener('change', updatePreference)
    }, [])

    useEffect(() => {
        const sections = SECTION_IDS
            .map((id) => document.getElementById(id))
            .filter((section): section is HTMLElement => Boolean(section))

        const observer = new IntersectionObserver((entries) => {
            const visibleEntry = entries
                .filter((entry) => entry.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]

            if (!visibleEntry) return

            const sectionId = visibleEntry.target.id
            if (isSectionId(sectionId)) setActiveSection(sectionId)
        }, {
            rootMargin: '-20% 0px -55% 0px',
            threshold: [0.1, 0.25, 0.5],
        })

        sections.forEach((section) => observer.observe(section))
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!panelOpen) return

        const handlePointerDown = (event: PointerEvent) => {
            const target = event.target
            if (!(target instanceof Node)) return
            if (naviRef.current?.contains(target) || panelRef.current?.contains(target)) return
            closePanel(false)
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') closePanel(true)
        }

        document.addEventListener('pointerdown', handlePointerDown)
        document.addEventListener('keydown', handleKeyDown)

        return () => {
            document.removeEventListener('pointerdown', handlePointerDown)
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [closePanel, panelOpen])

    useEffect(() => {
        const navi = naviRef.current
        if (!navi) return

        let animationFrame = 0

        const placeAtBottom = () => {
            const inset = window.innerWidth < 640 ? 14 : 24
            navi.style.transition = reducedMotion
                ? 'none'
                : 'left 600ms cubic-bezier(0.22, 1, 0.36, 1), top 600ms cubic-bezier(0.22, 1, 0.36, 1)'
            navi.style.left = `${Math.max(8, window.innerWidth - navi.offsetWidth - inset)}px`
            navi.style.top = `${Math.max(8, window.innerHeight - navi.offsetHeight - inset)}px`
        }

        if (!panelOpen) {
            placeAtBottom()
            window.addEventListener('resize', placeAtBottom)
            return () => window.removeEventListener('resize', placeAtBottom)
        }

        const panel = panelRef.current
        if (!panel) return

        const startLeft = Number.parseFloat(navi.style.left)
        const startTop = Number.parseFloat(navi.style.top)
        const startX = Number.isFinite(startLeft)
            ? startLeft
            : window.innerWidth - navi.offsetWidth - 24
        const startY = Number.isFinite(startTop)
            ? startTop
            : window.innerHeight - navi.offsetHeight - 24
        const startedAt = window.performance.now()
        const approachDuration = reducedMotion ? 0 : 700

        navi.style.transition = 'none'

        const animateAbovePanel = (now: number) => {
            const panelBounds = panel.getBoundingClientRect()
            const minX = panelBounds.left + 16
            const maxX = Math.max(minX, panelBounds.right - navi.offsetWidth - 64)
            const centerX = minX + (maxX - minX) / 2
            const targetY = panelBounds.top - navi.offsetHeight + 10
            const elapsed = now - startedAt

            if (elapsed < approachDuration) {
                const progress = elapsed / approachDuration
                const eased = 1 - Math.pow(1 - progress, 3)
                navi.style.left = `${startX + (centerX - startX) * eased}px`
                navi.style.top = `${startY + (targetY - startY) * eased}px`
            } else if (reducedMotion) {
                navi.style.left = `${centerX}px`
                navi.style.top = `${targetY}px`
            } else {
                const playTime = (elapsed - approachDuration) * 0.0014
                const horizontalProgress = (Math.sin(playTime) + 1) / 2
                navi.style.left = `${minX + (maxX - minX) * horizontalProgress}px`
                navi.style.top = `${targetY + noise(playTime, 0) * 2}px`
            }

            animationFrame = window.requestAnimationFrame(animateAbovePanel)
        }

        animationFrame = window.requestAnimationFrame(animateAbovePanel)
        return () => window.cancelAnimationFrame(animationFrame)
    }, [panelOpen, reducedMotion])

    useParticleEmitter(naviRef, activeSection, reducedMotion || !panelOpen)

    return (
        <>
            <button
                ref={naviRef}
                type="button"
                aria-expanded={panelOpen}
                aria-controls="navi-guide-panel"
                aria-label={`${panelOpen ? 'Close' : 'Open'} Navi guide for ${theme.label}`}
                title={`${panelOpen ? 'Close' : 'Open'} Navi guide`}
                onClick={() => panelOpen ? closePanel(false) : setPanelOpen(true)}
                className="fixed left-[calc(100vw-4rem)] top-[calc(100vh-4rem)] z-[1002] h-12 w-12 rounded-full will-change-[left,top] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 motion-reduce:will-change-auto sm:h-14 sm:w-14"
            >
                <span
                    aria-hidden="true"
                    className="absolute inset-1 rounded-full blur-xl transition-colors duration-500 motion-reduce:transition-none"
                    style={{ background: `radial-gradient(circle, ${theme.glow}66 0%, transparent 70%)` }}
                />
                <span
                    aria-hidden="true"
                    className="absolute inset-2 bg-contain bg-center bg-no-repeat transition-[filter] duration-500 motion-reduce:transition-none sm:inset-1"
                    style={{
                        backgroundImage: 'url("/images/navi.gif")',
                        filter: theme.filter,
                    }}
                />
                {!panelOpen && (
                    <span
                        aria-hidden="true"
                        className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full border-2 border-slate-900"
                        style={{ backgroundColor: theme.glow }}
                    />
                )}
            </button>

            {panelOpen && (
                <aside
                    ref={panelRef}
                    id="navi-guide-panel"
                    role="dialog"
                    aria-label={`Navi guide for ${theme.label}`}
                    aria-live="polite"
                    className="fixed bottom-4 left-4 right-4 z-[1001] rounded-xl border border-slate-700/80 bg-slate-900/95 p-4 shadow-2xl backdrop-blur sm:bottom-6 sm:left-auto sm:right-6 sm:w-[24rem]"
                    style={{ boxShadow: `0 18px 50px -24px ${theme.glow}` }}
                >
                    <div className="flex items-start justify-between gap-4">
                        <div>
                            <div className="flex items-center gap-2">
                                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: theme.glow }} />
                                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300">
                                    Navi · {theme.label}
                                </span>
                            </div>
                            <p className="mt-2 text-sm leading-relaxed text-slate-300">{theme.message}</p>
                        </div>
                        <button
                            type="button"
                            onClick={() => closePanel(true)}
                            className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-slate-400 hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300"
                            aria-label="Close Navi guide"
                        >
                            ×
                        </button>
                    </div>

                    <nav className="mt-4 border-t border-slate-800 pt-3" aria-label="Navi shortcuts">
                        <ul className="grid grid-cols-2 gap-2">
                            {SECTION_IDS.map((sectionId) => (
                                <li key={sectionId}>
                                    <a
                                        href={`#${sectionId}`}
                                        aria-current={activeSection === sectionId ? 'location' : undefined}
                                        className={`flex min-h-10 items-center rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 motion-reduce:transition-none ${
                                            activeSection === sectionId
                                                ? 'bg-teal-400/10 text-teal-300'
                                                : 'bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                                        }`}
                                    >
                                        {SECTION_THEMES[sectionId].label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/resume.pdf"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="flex min-h-10 items-center rounded-md bg-slate-800/60 px-3 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-slate-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 motion-reduce:transition-none"
                                >
                                    Résumé ↗
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
            )}
        </>
    )
}

export default NaviFly
