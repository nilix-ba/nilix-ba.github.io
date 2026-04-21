import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '../config/site'

export default function Resume() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Resume | {siteConfig.name}</title>
      </Head>

      {/* Navigation */}
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
          <Link href={siteConfig.routes.research} className="nav-link">Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link-active">Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e3d5ca] px-4 py-4 flex flex-col gap-3">
          <Link href={siteConfig.routes.research} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link-active py-2" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-6 sm:mb-8 text-primary">Resume & Experience</h1>

        {/* Education */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Education</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">{siteConfig.degree}</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Expected {siteConfig.year}</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-1 sm:mb-2">{siteConfig.university}</p>
              <p className="text-xs sm:text-sm text-slate-600">{siteConfig.location}</p>
              <p className="text-slate-700 text-sm leading-relaxed mt-3 sm:mt-4">
                Focus on Natural Language Processing, Machine Learning, and Information Retrieval Systems. Specialized research in developing source-grounded conversational AI and retrieval-augmented generation architectures.
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Professional Experience</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Research Assistant & AI Developer</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">2024 - Present</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">Universität Hamburg</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Developing and deploying retrieval-augmented generation (RAG) systems for medical and scientific applications</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Building multimodal agentic architectures for complex information retrieval tasks</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Contributing to source-grounded conversational AI research and implementation</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Publishing peer-reviewed research contributions in NLP and RAG systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">NLP Engineer</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">2023 - 2024</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">AI Research Initiative</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Implemented end-to-end NLP pipelines for scientific literature analysis</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Designed and deployed information extraction systems handling 64,000+ scientific records</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Collaborated on developing evaluation frameworks for conversational AI systems</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Machine Learning Intern</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">2022 - 2023</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">Tech Company</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Developed machine learning models for text classification and retrieval tasks</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Contributed to data preprocessing and feature engineering pipelines</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Participated in code reviews and collaborative development workflows</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="section-header">Technical Skills</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Python</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">JavaScript</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">SQL</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-3 py-1 rounded">Java</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">ML & NLP Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">PyTorch</span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">TensorFlow</span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">Hugging Face</span>
                <span className="text-xs bg-green-50 text-green-700 px-3 py-1 rounded">LangChain</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Data & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded">NumPy</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded">Pandas</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded">Docker</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-3 py-1 rounded">Git</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-4">Specialized Areas</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded">RAG Systems</span>
                <span className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded">Information Retrieval</span>
                <span className="text-xs bg-orange-50 text-orange-700 px-3 py-1 rounded">Medical NLP</span>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Achievements */}
        <section className="mb-12">
          <h2 className="section-header">Certifications & Achievements</h2>
          
          <div className="space-y-4">
            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Publications in Peer-Reviewed Venues</h3>
              <p className="text-slate-700">Multiple papers published in Natural Language Processing and AI conferences, focusing on RAG systems and conversational AI.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Research Contributions</h3>
              <p className="text-slate-700">Active contributor to open-source projects in NLP and machine learning. Participate in research collaborations with academic and industry partners.</p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-slate-200">
              <h3 className="font-semibold text-slate-900 mb-2">Conference Presentations</h3>
              <p className="text-slate-700">Presented research findings at major AI and NLP conferences, sharing insights on retrieval-augmented generation and source-grounded systems.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="card p-8 mb-12">
          <h2 className="text-xl font-semibold mb-4 text-primary">Interested in collaboration or opportunities?</h2>
          <p className="section-description mb-6">
            Feel free to reach out to discuss collaboration opportunities, research partnerships, or professional inquiries.
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
            <Link href={siteConfig.routes.research} className="link-light">Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
