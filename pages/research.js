import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../config/site'

export default function Research() {
  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <title>Applied Research & Solutions | {siteConfig.name}</title>
      </Head>

      {/* Navigation using nav-link classes from your CSS */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href={siteConfig.routes.home} className="text-xl font-medium tracking-tight nav-link">
          {siteConfig.shortName}
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href={siteConfig.routes.research} className="nav-link-active">Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link">Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif mb-4 text-primary">Applied AI & Engineering</h1>
          <p className="section-description text-lg">
            Specializing in translating Natural Language Processing research into production-ready **Retrieval-Augmented Generation (RAG)** backends and functional AI prototypes[cite: 78, 82, 84].
          </p>
        </header>
        
        {/* Engineering Pillars Section */}
        <section className="mb-16">
          <h2 className="section-header underline decoration-[#e7bc91]">Engineering Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="accent-bar">
              <h3 className="text-lg font-semibold mb-2">Architecting Scalable RAG</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Implementing robust data layers and vector stores using **SQLAlchemy** and **Chroma** to transform static documentation into conversational tools[cite: 24, 64, 90].
              </p>
            </div>
            <div className="accent-bar">
              <h3 className="text-lg font-semibold mb-2">Production Full-Stack AI</h3>
              <p className="text-sm text-secondary leading-relaxed">
                Bridging deep-learning backends with modern interfaces using **Django** and **Next.js**, specifically focusing on chat streaming and multilingual support[cite: 19, 75, 114].
              </p>
            </div>
          </div>
        </section>

        {/* Featured Technical Implementations */}
        <section className="mb-16">
          <h2 className="section-header">Technical Implementations</h2>
          <div className="space-y-6">
            
            {/* POL-App Implementation */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">POL-App: Medical RAG Backend</h3>
                <span className="badge-accent">Production Prototype</span>
              </div>
              <p className="text-sm text-secondary mb-6">
                Engineered a diagnostic support system for medical imaging. Implemented high-performance chat streaming and multilingual behavior to ensure reliable illness reporting in clinical settings[cite: 18, 19, 74, 75].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Next.js</span>
                <span className="badge">Django</span>
                <span className="badge">shadcn/ui</span>
                <span className="badge">Medical AI</span>
              </div>
            </div>

            {/* IMV Lab Implementation */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">IMV Lab: SDG Impact Assistant</h3>
                <span className="badge-accent">Domain-Specific RAG</span>
              </div>
              <p className="text-sm text-secondary mb-6">
                Architected a question-answering system over internal documents to measure organizational impact against **Sustainable Development Goal (SDG)** indicators[cite: 20, 21, 79]. Developed optimized retrieval and structured prompting strategies specifically for the German language[cite: 21, 80].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Sentence-Transformers</span>
                <span className="badge">Prompt Engineering</span>
                <span className="badge">Knowledge Graphs</span>
              </div>
            </div>

            {/* UHH Tool Catalogue */}
            <div className="card p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-primary">UHH Tool Catalogue Discovery</h3>
                <span className="badge-accent">Internal Tooling</span>
              </div>
              <p className="text-sm text-secondary mb-6">
                Transformed the Universität Hamburg Tool Catalogue into a conversational discovery platform. Designed a robust data layer with **Chroma** and integrated LLMs via **OpenWebUI** within a containerized **Docker** environment[cite: 23, 24, 90, 91].
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge">Flask</span>
                <span className="badge">SQLAlchemy</span>
                <span className="badge">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Publication */}
        <section className="mb-16">
          <h2 className="section-header">Publications & Preprints</h2>
          <article className="card p-8 border-l-4 border-[#e7bc91]">
            <h3 className="text-xl font-semibold mb-2">CollEX: A Multimodal Agentic RAG System Enabling Interactive Exploration of Scientific Collections</h3>
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-4">Published 2025 | ArXiv: 2504.07643</p>
            <p className="text-sm text-secondary leading-relaxed mb-6">
              Co-authored research on an agentic system designed for interactive exploration of 64,000+ scientific records[cite: 11, 13, 106]. Contributed to the development of **typed function-calling** interfaces and multimodal retrieval orchestration logic[cite: 26, 93, 107].
            </p>
            <div className="flex justify-between items-center">
              <div className="flex gap-2">
                <span className="badge-light">Agentic Workflows</span>
                <span className="badge-light">Multimodal Retrieval</span>
              </div>
              <a href="#" className="link-accent font-medium text-sm">Read Publication →</a>
            </div>
          </article>
        </section>

        {/* Technical Philosophy Card */}
        <section className="card-neutral p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4">Engineering Principles</h2>
          <ul className="space-y-4 text-sm text-secondary">
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span><strong>System Robustness:</strong> Prioritizing unit testing and typed interfaces to ensure reliable AI behavior in high-stakes environments[cite: 26, 94].</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-bold">•</span>
              <span><strong>Stack Agnostic Deployment:</strong> Experienced in migrating production AI stacks across providers (e.g., OpenAI to Google Gemini) while maintaining interface stability[cite: 94].</span>
            </li>
          </ul>
        </section>

        {/* Contact CTA using your CSS btn-primary class */}
        <div className="text-center pt-8">
          <Link href={siteConfig.routes.contact} className="btn-primary">
            Start a Technical Conversation
          </Link>
        </div>
      </main>

      <footer className="px-8 py-12 divider mt-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted text-[10px] uppercase tracking-widest font-bold">
          <p>{siteConfig.copyrightText}</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href={`mailto:${siteConfig.email}`} className="link-light">Email</a>
            <a href={siteConfig.github} className="link-light">GitHub</a>
            <p className="text-[#6b6562]">English • German (B1) • Persian</p>
          </div>
        </div>
      </footer>
    </div>
  )
}