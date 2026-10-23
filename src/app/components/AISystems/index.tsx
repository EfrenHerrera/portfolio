import React from 'react'

const capabilities = [
    {
        title: 'Conversational AI',
        description: 'LLM-powered WhatsApp and CRM copilots with structured, persistent context, human handoff, and appointment workflows.',
    },
    {
        title: 'Document Intelligence',
        description: 'Automation and AI-assisted classification workflows that integrate business documents into operational processes.',
    },
    {
        title: 'LLM Engineering',
        description: 'Prompt architecture, model evaluation, multi-agent workflows, and tool integrations through MCP for reliable product behavior.',
    },
]

const AISystems: React.FC = () => {
    return (
        <>
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 id="ai-systems-heading" className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    AI &amp; Intelligent Systems
                </h2>
            </div>

            <div>
                <p className="max-w-2xl leading-relaxed text-slate-300">
                    I build AI systems into real products and operational workflows—not isolated demos.
                </p>

                <ul className="mt-6 grid gap-4 sm:grid-cols-3" aria-label="AI engineering capabilities">
                    {capabilities.map((capability, index) => (
                        <li key={capability.title} className="rounded-lg border border-slate-800/80 bg-slate-900/30 p-4 sm:p-5">
                            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-teal-300/90" aria-hidden="true">
                                0{index + 1}
                            </span>
                            <h3 className="mt-3 text-base font-semibold leading-snug text-slate-100">
                                {capability.title}
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-slate-400">
                                {capability.description}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default AISystems
