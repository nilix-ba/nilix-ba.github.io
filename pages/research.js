import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../config/site'

export default function Research() {
  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <title>Research & Publications | {siteConfig.name}</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href={siteConfig.routes.home} className="text-xl font-medium tracking-tight nav-link">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href={siteConfig.routes.research} className="nav-link-active">Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link">Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Research & Publications</h1>
        
        {/* Research Focus */}
        <section className="mb-12">
          <h2 className="section-header">Research Focus</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Retrieval-Augmented Generation (RAG)</h3>
              <p className="text-slate-700 leading-relaxed">
                My primary research focus is on developing robust, source-grounded RAG systems that can provide reliable information retrieval and generation capabilities. I investigate how to effectively integrate external knowledge sources with large language models to ensure accuracy and traceability in domain-specific applications.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Conversational AI & Medical NLP</h3>
              <p className="text-slate-700 leading-relaxed">
                I work on designing conversational systems for medical diagnostics and scientific discovery. My research emphasizes the importance of source attribution and grounding in sensitive domains where accuracy is critical.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Agentic Systems</h3>
              <p className="text-slate-700 leading-relaxed">
                I explore multimodal agentic architectures that combine reasoning, planning, and information retrieval to solve complex tasks. This includes developing systems capable of handling 64,000+ scientific records with interactive exploration capabilities.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="mb-12">
          <h2 className="section-header">Featured Projects</h2>
          
          <div className="space-y-6">
            <div className="card space-y-4">
              <h3 className="text-xl font-semibold text-primary mb-2">CollEX: Multimodal Agentic RAG</h3>
              <p className="text-sm text-muted mb-4">Co-authored publication</p>
              <p className="section-description mb-4">
                A multimodal system enabling interactive exploration and retrieval from 64,000+ scientific records. CollEX combines agentic reasoning with advanced retrieval mechanisms to support complex scientific discovery workflows.
              </p>
              <div className="flex gap-3">
                <span className="badge-accent">Multimodal RAG</span>
                <span className="badge-accent">Agentic Systems</span>
                <span className="badge-accent">Scientific Discovery</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">POL-App: Medical RAG System</h3>
              <p className="text-sm text-slate-500 mb-4">Current research project</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                A specialized RAG application designed for medical diagnostics and clinical support. POL-App focuses on providing doctors and medical professionals with source-grounded, evidence-based information retrieval for diagnostic assistance.
              </p>
              <div className="flex gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">Medical NLP</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">RAG</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">Clinical AI</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Scientific Literature Analysis</h3>
              <p className="text-sm text-slate-500 mb-4">Research initiative</p>
              <p className="text-slate-700 leading-relaxed mb-4">
                Developing automated pipelines for analyzing and extracting insights from scientific literature at scale. This work supports both academic research and practical applications in knowledge synthesis.
              </p>
              <div className="flex gap-3">
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">NLP</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">Information Extraction</span>
                <span className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded">Knowledge Synthesis</span>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900">Methodology & Approach</h2>
          <p className="text-slate-700 leading-relaxed mb-4">
            My research adopts a rigorous, empirically-driven approach that emphasizes:
          </p>
          <ul className="space-y-3 text-slate-700">
            <li className="flex gap-3">
              <span className="text-accent font-semibold">•</span>
              <span><strong>Source Grounding:</strong> Ensuring all generated information can be traced to specific sources, particularly critical in medical and scientific contexts.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-semibold">•</span>
              <span><strong>Multimodal Integration:</strong> Combining text, structured data, and other modalities to create comprehensive knowledge systems.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-semibold">•</span>
              <span><strong>Practical Application:</strong> Bridging research models with real-world deployments that provide tangible value.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-accent font-semibold">•</span>
              <span><strong>Human-in-the-Loop Design:</strong> Developing systems that augment human expertise rather than replace it.</span>
            </li>
          </ul>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <h2 className="section-header">Publications</h2>
          
          <p className="text-secondary text-lg mb-8">
            A collection of peer-reviewed publications and research contributions in Natural Language Processing, Retrieval-Augmented Generation, and conversational AI systems.
          </p>

          {/* Publications List */}
          <div className="space-y-8">
            
            <article className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">CollEX: A Multimodal Agentic RAG System for Interactive Scientific Exploration</h3>
                <p className="text-sm text-slate-500">Co-authored publication</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Presents CollEX, a multimodal system enabling interactive exploration and retrieval from 64,000+ scientific records. Demonstrates how agentic architectures combined with advanced RAG mechanisms can support complex scientific discovery workflows.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">RAG</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Multimodal</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Agentic Systems</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Scientific Discovery</span>
              </div>
              <p className="text-sm text-slate-600">
                [Citation: cite: 11, 13, 106]
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Source-Grounded Conversational Systems: Design Principles and Evaluation</h3>
                <p className="text-sm text-slate-500">Research contribution</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Investigates fundamental design principles for building conversational systems that provide transparent source attribution. Discusses evaluation methodologies for assessing information accuracy and traceability in practical applications.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Conversational AI</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Source Attribution</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Evaluation</span>
              </div>
              <p className="text-sm text-slate-600">
                [Citation: cite: 78, 82, 83]
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">POL-App: A Medical RAG Application for Clinical Diagnostic Support</h3>
                <p className="text-sm text-slate-500">Ongoing research project</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Describes the architecture and implementation of POL-App, a specialized RAG system designed for medical professionals. Addresses challenges of deploying AI systems in clinical settings with emphasis on accuracy, source grounding, and user trust.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Medical NLP</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">RAG</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Clinical AI</span>
              </div>
              <p className="text-sm text-slate-600">
                [Citation: cite: 18, 74, 75]
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Retrieving and Ranking: Advanced Techniques for Information Retrieval in NLP Models</h3>
                <p className="text-sm text-slate-500">Research paper</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Explores advanced retrieval and ranking techniques for augmenting large language models. Examines how different retrieval strategies impact overall system performance across various domains.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Information Retrieval</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">NLP</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Machine Learning</span>
              </div>
              <p className="text-sm text-slate-600">
                [Citation: cite: 63, 103, 112]
              </p>
            </article>

            <article className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-slate-900 mb-2">Impact Assessment Through Conversational AI: A Case Study in Research Knowledge Transfer</h3>
                <p className="text-sm text-slate-500">Research initiative</p>
              </div>
              <p className="text-slate-700 leading-relaxed mb-4">
                Applies conversational AI and NLP techniques to assess and communicate research impact. Demonstrates how AI systems can facilitate knowledge transfer between academic and non-academic stakeholders.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Impact Assessment</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Knowledge Transfer</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">NLP</span>
              </div>
              <p className="text-sm text-slate-600">
                [Citation: cite: 84, 88]
              </p>
            </article>
          </div>

          {/* Preprints & Working Papers */}
          <section className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-slate-900">Preprints & Working Papers</h2>
            <p className="text-secondary mb-4">
              Additional research projects and preliminary findings under development. Please check back for updates.
            </p>
            <div className="card-neutral p-6 rounded-lg text-center">
              <p className="text-secondary">More preprints and working papers coming soon.</p>
            </div>
          </section>
        </section>

        {/* Call to Action */}
        <section className="card p-8 mt-12">
          <h2 className="text-xl font-semibold mb-4 text-primary">Interested in discussing research collaboration?</h2>
          <p className="section-description mb-6">
            I am open to research conversations, collaborations, and feedback on ongoing projects.
          </p>
          <Link href={siteConfig.routes.contact} className="btn-primary inline-block">
            Get in Touch
          </Link>
        </section>
      </main>

      <footer className="px-8 py-8 divider mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-muted text-sm">
          <p>{siteConfig.copyrightText}</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href={`mailto:${siteConfig.email}`} className="link-light">Email</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-light">GitHub</a>
            <Link href={siteConfig.routes.resume} className="link-light">Resume</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}