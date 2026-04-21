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
        
        {/* Header with Download Buttons */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 sm:mb-14 gap-6 border-b border-[#e3d5ca] pb-6">
          <div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-primary mb-2">Resume & Experience</h1>
            <p className="text-[#7a6a5f] text-sm sm:text-base">A complete overview of my academic and professional journey.</p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full md:w-auto">
            <a 
              href="/Academic_CV.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider px-6 py-2.5 bg-[#e3d5ca] text-[#4a3b32] hover:bg-[#d4c3b3] transition-colors rounded text-center shadow-sm"
            >
              Academic CV
            </a>
            <a 
              href="/niloufar_resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto text-xs font-bold uppercase tracking-wider px-6 py-2.5 bg-[#e3d5ca] text-[#4a3b32] hover:bg-[#d4c3b3] transition-colors rounded text-center shadow-sm"
            >
              Technical Resume
            </a>
          </div>
        </div>

        {/* Education */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Education</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">M.Sc. Intelligent Adaptive Systems</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Oct 2024 - Present</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-1 sm:mb-2">Universität Hamburg</p>
              <p className="text-xs sm:text-sm text-slate-600">Hamburg, Germany</p>
              <p className="text-slate-700 text-sm leading-relaxed mt-3 sm:mt-4">
                Research focus on Natural Language Processing, Machine Learning, Deep Learning, and Retrieval-Augmented Generation (RAG).
              </p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">B.Sc. Computer Science (Minor in Management)</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Sep 2019 - Feb 2024</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-1 sm:mb-2">University of Tehran</p>
              <p className="text-xs sm:text-sm text-slate-600">Tehran, Iran</p>
              <p className="text-slate-700 text-sm leading-relaxed mt-3 sm:mt-4">
                Thesis: Applied machine learning methods to classify mental disorders from EEG data. Achieved 0.9889 accuracy for major-disorder classification using SVM.
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
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Jul 2023 - Mar 2026</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">Universität Hamburg</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Developed POL-App, a medical imaging RAG system, implementing chat streaming and multilingual behavior using Django and Next.js.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Designed a domain-specific RAG assistant for IMV Lab to support impact measurement using structured German-language prompting.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Built the UHH Tool Catalogue conversational discovery system using Flask, SQLAlchemy, Chroma, and Docker.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Investigated few-shot and zero-shot large language models for word-sense disambiguation using ontologies.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Visiting Scholar</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Jul 2022 - Sep 2022</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">KU Leuven</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Analyzed probability calibration in Speech Recognition systems.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Implemented an MLP-based approach to improve character-level confidence estimation.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">Chief Teaching Assistant</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Sep 2021 - Mar 2024</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">University of Tehran</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Served as Chief TA for Advanced Information Retrieval and Fundamentals of Computer Science.</span>
                </li>
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Coordinated teams of assistants, designed student projects, and managed grading workflows for multiple cohorts.</span>
                </li>
              </ul>
            </div>

          </div>
        </section>

        {/* Skills */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Technical Skills</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">Programming Languages</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded">Python</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded">JavaScript</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded">C/C++</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded">SQL</span>
                <span className="text-xs bg-blue-50 text-blue-700 px-2 sm:px-3 py-1 rounded">R</span>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">ML & NLP Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded">PyTorch</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded">scikit-learn</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded">Pandas</span>
                <span className="text-xs bg-green-50 text-green-700 px-2 sm:px-3 py-1 rounded">NumPy</span>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">Data & Tools</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Next.js</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Django</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Flask</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Chroma</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">SQLAlchemy</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Docker</span>
                <span className="text-xs bg-purple-50 text-purple-700 px-2 sm:px-3 py-1 rounded">Git</span>
              </div>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-4">Specialized Areas</h3>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-orange-50 text-orange-700 px-2 sm:px-3 py-1 rounded">RAG Systems</span>
                <span className="text-xs bg-orange-50 text-orange-700 px-2 sm:px-3 py-1 rounded">Information Retrieval</span>
                <span className="text-xs bg-orange-50 text-orange-700 px-2 sm:px-3 py-1 rounded">Natural Language Processing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership & Volunteering */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Leadership & Volunteering</h2>
          
          <div className="space-y-4 sm:space-y-6">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">OE-Tutor</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">May 2025 - Oct 2025</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">Universität Hamburg</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Developed comprehensive onboarding content and organized social activities to help new students navigate university life, German culture and local regulations in Hamburg.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <div className="flex flex-col sm:flex-row justify-between items-start mb-2 gap-2">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900">PIASTA Welcome Buddy</h3>
                <span className="text-xs sm:text-sm text-slate-500 whitespace-nowrap">Sep 2025 - Dec 2025</span>
              </div>
              <p className="text-sm sm:text-slate-700 font-medium mb-3 sm:mb-4">Universität Hamburg</p>
              <ul className="space-y-1 sm:space-y-2 text-xs sm:text-slate-700">
                <li className="flex gap-2 sm:gap-3">
                  <span className="text-accent font-semibold flex-shrink-0">•</span>
                  <span>Provided dedicated, one-on-one mentorship to incoming international students, offering personalized guidance and peer support to ease their cultural and academic transition.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Certifications & Publications */}
        <section className="mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-serif text-[#2d2624] mb-4 sm:mb-6">Publications & Certifications</h2>
          
          <div className="space-y-3 sm:space-y-4">
            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">CollEX - A Multimodal Agentic RAG System</h3>
              <p className="text-slate-700 text-xs sm:text-sm">Co-authored a publication on a system designed to support interactive exploration of 64,000+ scientific records through a chat interface, combining textual and visual modalities.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">Certificate Intercultural Competence (CIC)</h3>
              <p className="text-slate-700 text-xs sm:text-sm">Awarded by Universität Hamburg for intercultural commitment, including mandatory intercultural training, international campus engagement and intercultural studies.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">IBM Skills Network Certifications</h3>
              <p className="text-slate-700 text-xs sm:text-sm">Completed Applied Data Science Capstone and Databases and SQL for Data Science with Python.</p>
            </div>

            <div className="bg-white p-4 sm:p-6 rounded-lg border border-slate-200">
              <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">DeepLearning.AI Certifications</h3>
              <p className="text-slate-700 text-xs sm:text-sm">Completed Advanced Learning Algorithms and Supervised Machine Learning: Regression and Classification.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="card p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12">
          <h2 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 text-primary">Interested in collaboration or opportunities?</h2>
          <p className="section-description text-xs sm:text-sm mb-4 sm:mb-6">
            Feel free to reach out to discuss collaboration opportunities, research partnerships, or professional inquiries.
          </p>
          <Link href={siteConfig.routes.contact} className="btn-primary inline-block">
            Get in Touch
          </Link>
        </section>
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 divider mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center text-muted text-xs sm:text-sm">
          <p>{siteConfig.copyrightText}</p>
          <div className="flex gap-3 sm:gap-6">
            <a href={`mailto:${siteConfig.email}`} className="link-light">Email</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-light">GitHub</a>
            <Link href={siteConfig.routes.research} className="link-light">Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}