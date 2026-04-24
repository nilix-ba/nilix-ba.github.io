import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { siteConfig } from '../config/site'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>{siteConfig.name} | {siteConfig.title}</title>
      </Head>

      {/* Minimalist Navigation */}
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
          <Link href={siteConfig.routes.resume} className="nav-link">Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e3d5ca] px-4 py-4 flex flex-col gap-3">
          <Link href={siteConfig.routes.research} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full text-center py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 sm:pt-10 lg:pt-12 pb-8 sm:pb-16 lg:pb-24">
        {/* Hero Section inspired by your favorite layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-10 lg:gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-8">
            <div>
              <p className="text-xs sm:text-sm uppercase tracking-widest text-muted mb-1 sm:mb-2">{siteConfig.degree}</p>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif leading-tight text-primary">
                {siteConfig.name}
              </h1>
            </div>
            <div className="space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-base lg:text-lg text-secondary leading-relaxed">
                I am an <strong>AI Engineer and Graduate Researcher</strong> with years of experience specializing in <strong>Natural Language Processing (NLP)</strong> and <strong>Retrieval-Augmented Generation (RAG)</strong>. I focus on translating state-of-the-art research into production-ready AI backends and functional prototypes.            
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-secondary leading-relaxed">
              Currently a Research Assistant at Universität Hamburg, I architect source-grounded systems for various domains including medical diagnostic support and automated impact reporting. My expertise lies in building robust, full-stack AI solutions using Python, Django and Next.js, moving beyond research theory to deliver practical, scalable applications.  
              </p>
            </div>
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row gap-2 sm:gap-3 lg:gap-4">
              <Link href={siteConfig.routes.research} className="btn-primary inline-block text-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base">
                Research
              </Link>
              <Link href={siteConfig.routes.contact} className="btn-secondary inline-block text-center px-3 sm:px-4 lg:px-6 py-2 sm:py-2.5 lg:py-3 text-xs sm:text-sm lg:text-base">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Visual Element: Professional photo */}
          <div className="lg:w-1/2 relative w-full">
            <div className="relative z-10 w-full aspect-square max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl sm:rounded-2xl lg:rounded-3xl shadow-lg sm:shadow-xl lg:shadow-2xl border-3 sm:border-4 lg:border-8 border-white">
              <img 
                src="/niloufar-portrait.jpg" 
                alt="Niloufar Baba Ahmadi" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle background accent shape to make it unique */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 lg:-bottom-8 lg:-right-8 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          </div>
        </div>

        {/* Research Areas Section */}
        <section className="mt-10 sm:mt-16 lg:mt-24 xl:mt-32 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
          <div className="card space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">Research Areas</h3>
            <ul className="text-secondary space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
              <li>• Retrieval-Augmented Generation (RAG)</li>
              <li>• Natural Language Processing</li>
              <li>• Information Retrieval</li>
              <li>• Machine Learning/Deep Learning</li>
            </ul>
          </div>
          <div className="card space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">Key Projects</h3>
            <ul className="text-secondary space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
              <li>• CollEX: Multimodal Agentic RAG</li>
              <li>• POL-App: Medical RAG System</li>
              <li>• Impact Assessment </li>
              <li>• UHH Tool Catalogue</li>
            </ul>
          </div>
          <div className="card space-y-2 sm:space-y-3 p-3 sm:p-4 lg:p-6">
            <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-primary">Technical Stack</h3>
            <ul className="text-secondary space-y-0.5 sm:space-y-1 text-xs sm:text-sm">
              <li>• Python, C/C++, SQL, JavaScript</li>
              <li>• PyTorch, scikit-learn, pandas, NumPy</li>
              <li>• Flask, Django, Next.js, Chroma, SQLAlchemy</li>
              <li>• Docker, Git, LaTeX, OpenWebUI</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 divider mt-8 sm:mt-16 lg:mt-24 xl:mt-32">
        <div className="max-w-7xl mx-auto flex flex-col gap-2 sm:gap-0 sm:flex-row justify-between items-center text-muted text-xs sm:text-sm">
          <p>{siteConfig.copyrightText}</p>
          <div className="flex gap-3 sm:gap-4 lg:gap-6 text-xs sm:text-sm">
            <a href={`mailto:${siteConfig.email}`} className="link-light">Email</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-light">GitHub</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="link-light">linkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  )
}