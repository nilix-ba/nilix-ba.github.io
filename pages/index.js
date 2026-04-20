import Head from 'next/head'
import Link from 'next/link'
import { siteConfig } from '../config/site'

export default function Home() {
  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <title>{siteConfig.name} | {siteConfig.title}</title>
      </Head>

      {/* Minimalist Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href={siteConfig.routes.home} className="text-xl font-medium tracking-tight nav-link">
          {siteConfig.shortName}
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href={siteConfig.routes.research} className="nav-link">Research</Link>
          <Link href={siteConfig.routes.publications} className="nav-link">Publications</Link>
          <Link href={siteConfig.routes.contact} className="btn-primary rounded-full">Contact</Link>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-12 pb-24">
        {/* Hero Section inspired by your favorite layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-muted mb-2">{siteConfig.degree}</p>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight text-primary">
                {siteConfig.name}
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-secondary leading-relaxed">
                {siteConfig.description}. <strong>Retrieval-Augmented Generation (RAG)</strong>, and <strong>source-grounded conversational systems</strong>.
              </p>
              <p className="text-base text-secondary leading-relaxed">
                Currently pursuing my {siteConfig.degree} at {siteConfig.university}. My research focuses on architecting RAG systems for medical diagnostics, scientific literature analysis, and impact assessment—bridging the gap between foundational NLP research and practical AI applications.
              </p>
            </div>
            <div className="pt-4 flex gap-4">
              <Link href={siteConfig.routes.research} className="btn-primary inline-block">
                Research
              </Link>
              <Link href={siteConfig.routes.contact} className="btn-secondary inline-block">
                Get in Touch
              </Link>
            </div>
          </div>

          {/* Visual Element: Professional photo */}
          <div className="lg:w-1/2 relative">
            <div className="relative z-10 w-full aspect-square max-w-md mx-auto overflow-hidden rounded-[3rem] shadow-2xl border-8 border-white">
              <img 
                src="/niloufar-portrait.jpg" 
                alt="Niloufar Baba Ahmadi" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Subtle background accent shape to make it unique */}
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          </div>
        </div>

        {/* Research Areas Section */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card space-y-3 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Research Areas</h3>
            <ul className="text-secondary space-y-2 text-sm">
              <li>• Retrieval-Augmented Generation (RAG)</li>
              <li>• Natural Language Processing</li>
              <li>• Conversational AI Systems</li>
              <li>• Source-grounded AI</li>
            </ul>
          </div>
          <div className="card space-y-3 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Key Projects</h3>
            <ul className="text-secondary space-y-2 text-sm">
              <li>• CollEX: Multimodal Agentic RAG</li>
              <li>• POL-App: Medical RAG System</li>
              <li>• Scientific Literature Analysis</li>
              <li>• Impact Assessment NLP</li>
            </ul>
          </div>
          <div className="card space-y-3 p-6">
            <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Technical Stack</h3>
            <ul className="text-secondary space-y-2 text-sm">
              <li>• Python, PyTorch, scikit-learn</li>
              <li>• Docker, Git, LaTeX</li>
              <li>• Chroma, OpenWebUI</li>
              <li>• Django, Flask, Next.js</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="px-8 py-8 divider mt-32">
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