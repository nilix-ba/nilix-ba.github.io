import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '../config/site'

export default function Research() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <title>Applied Research & Solutions | {siteConfig.name}</title>
      </Head>

      {/* Navigation using nav-link classes from your CSS */}
      <nav className="flex justify-between items-center px-4 sm:px-6 lg:px-8 py-4 sm:py-6 max-w-7xl mx-auto">
        <Link href={siteConfig.routes.home} className="text-lg sm:text-xl font-medium tracking-tight nav-link">
          {siteConfig.shortName}
        </Link>
        
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-primary transition-all ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 lg:gap-8 text-sm font-medium">
          <Link href={siteConfig.routes.research} className="nav-link-active">Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link">Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e3d5ca] px-4 py-4 flex flex-col gap-3">
          <Link href={siteConfig.routes.research} className="nav-link-active py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <header className="mb-8 sm:mb-12 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 text-primary">Applied AI & Engineering</h1>
          <p className="section-description text-sm sm:text-base lg:text-lg">
            I build reliable, source-grounded AI systems using Natural Language Processing and Retrieval-Augmented Generation, translating research ideas into deployable prototypes for scientific search, medical imaging support and impact reporting. My work reflects an international research trajectory shaped across Germany, Belgium and Iran.
          </p>
        </header>
        
        {/* Engineering Pillars Section */}
        <section className="mb-12 sm:mb-16 text-center">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-6 sm:mb-8 underline decoration-[#e7bc91]">Engineering Pillars</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <div className="accent-bar">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Architecting Scalable RAG</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Designing retrieval pipelines and knowledge interfaces that connect large language models with structured and unstructured data. I build robust data layers using <strong>SQLAlchemy</strong> and <strong>Chroma</strong> to transform static documentation into conversational decision-support tools.  
              </p>
            </div>
            <div className="accent-bar">
              <h3 className="text-base sm:text-lg font-semibold mb-2">Production Full-Stack AI</h3>
              <p className="text-xs sm:text-sm text-secondary leading-relaxed">
                Integrating deep-learning backends with modern web interfaces using <strong>Django</strong> and <strong>Next.js</strong>, with a focus on streaming interaction, multilingual behavior and deployment-ready system reliability.  
              </p>
            </div>
          </div>
        </section>

        {/* Featured Technical Implementations */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Selected Production AI Systems</h2>
          <div className="space-y-4 sm:space-y-6">
            
            {/* POL-App Implementation */}
            <div className="card p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">POL-App: Medical RAG Backend</h3>
                <span className="badge-accent text-xs whitespace-nowrap">Production Prototype</span>
              </div>
              <p className="text-xs sm:text-sm text-secondary mb-4 sm:mb-6">
                Contributed to the interface layer of a Retrieval-Augmented Generation system supporting diagnostic workflows in medical imaging. Implemented chat streaming behavior and multilingual interaction features using Django and Next.js to support structured illness reporting across clinical contexts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge text-xs">Next.js</span>
                <span className="badge text-xs">Django</span>
                <span className="badge text-xs">shadcn/ui</span>
                <span className="badge text-xs">Medical AI</span>
              </div>
            </div>

            {/* IMV Lab Implementation */}
            <div className="card p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">IMV Lab: SDG Impact Assistant</h3>
                <span className="badge-accent text-xs whitespace-nowrap">Domain-Specific RAG</span>
              </div>
              <p className="text-xs sm:text-sm text-secondary mb-4 sm:mb-6">
                Designed a domain-specific Retrieval-Augmented Generation assistant supporting impact measurement aligned with Sustainable Development Goal (SDG) indicators. Implemented German-language retrieval optimization and developed structured prompting strategies over heterogeneous internal documents to improve answer grounding and reporting reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge text-xs">Sentence-Transformers</span>
                <span className="badge text-xs">Prompt Engineering</span>
                <span className="badge text-xs">Knowledge Graphs</span>
              </div>
            </div>

            {/* UHH Tool Catalogue */}
            <div className="card p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-3 sm:mb-4 gap-2">
                <h3 className="text-lg sm:text-xl font-semibold text-primary">UHH Tool Catalogue Discovery</h3>
                <span className="badge-accent text-xs whitespace-nowrap">Internal Tooling</span>
              </div>
              <p className="text-xs sm:text-sm text-secondary mb-4 sm:mb-6">
                Developed a conversational discovery interface for the Universität Hamburg tool catalogue by constructing the dataset through web scraping and structured preprocessing of institutional web content. Designed the retrieval pipeline using SQLAlchemy and Chroma and integrated LLM interaction via OpenWebUI within a containerized Docker deployment.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="badge text-xs">Flask</span>
                <span className="badge text-xs">SQLAlchemy</span>
                <span className="badge text-xs">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Publication */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Publications & Preprints</h2>
          <article className="card p-4 sm:p-6 lg:p-8 border-l-4 border-[#e7bc91]">
            <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2">CollEX: A Multimodal Agentic RAG System Enabling Interactive Exploration of Scientific Collections</h3>
            <p className="text-xs font-bold text-accent uppercase tracking-widest mb-3 sm:mb-4">Published 2025 | ArXiv: 2504.07643</p>
            <p className="text-xs sm:text-sm text-secondary leading-relaxed mb-4 sm:mb-6">
              Co-authored CollEX, a multimodal agentic Retrieval-Augmented Generation system supporting interactive exploration of more than 64,000 scientific records. Contributed typed function-calling interfaces and orchestration logic for multimodal retrieval workflows.
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <div className="flex flex-wrap gap-2">
                <span className="badge-light text-xs">Agentic Workflows</span>
                <span className="badge-light text-xs">Multimodal Retrieval</span>
              </div>
              <a href="https://arxiv.org/abs/2504.07643" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-accent font-medium text-xs sm:text-sm whitespace-nowrap">Read Publication →</a>
            </div>
          </article>
        </section>

        {/* Technical Philosophy Card */}
        <section className="card-neutral p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">System Design Approach</h2>
          <ul className="space-y-3 sm:space-y-4 text-xs sm:text-sm text-secondary">
            <li className="flex gap-2 sm:gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span><strong>Reliability First:</strong> I design LLM pipelines using typed interfaces and modular retrieval layers to ensure predictable system behavior in domain-specific environments.</span>
            </li>
            <li className="flex gap-2 sm:gap-3">
              <span className="text-accent font-bold flex-shrink-0">•</span>
              <span><strong>Stack-Flexible LLM Integration:</strong> Experienced migrating RAG systems across model providers (OpenAI → Gemini) while maintaining interface stability and deployment continuity.</span>
            </li>
          </ul>
        </section>

        {/* Contact CTA using your CSS btn-primary class */}
        <div className="text-center pt-6 sm:pt-8">
          <Link href={siteConfig.routes.contact} className="btn-primary inline-block">
            Start a Technical Conversation
          </Link>
        </div>
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-12 divider mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center text-muted text-[8px] sm:text-[10px] uppercase tracking-widest font-bold">
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