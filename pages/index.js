import Head from 'next/head'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 font-sans">
      <Head>
        <title>Niloufar Baba Ahmadi | NLP & RAG Researcher</title>
      </Head>

      {/* Minimalist Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <a href="/" className="text-xl font-medium tracking-tight hover:text-slate-600 transition-colors">Niloufar B. Ahmadi</a>
        <div className="flex items-center gap-8 text-sm font-medium">
          <a href="/research" className="hover:text-blue-600 transition-colors">Research</a>
          <a href="/publications" className="hover:text-blue-600 transition-colors">Publications</a>
          <a href="/contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all">
            Contact
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-8 pt-12 pb-24">
        {/* Hero Section inspired by your favorite layout */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8">
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 mb-2">M.Sc. Intelligent Adaptive Systems</p>
              <h1 className="text-5xl md:text-6xl font-serif leading-tight">
                Niloufar Baba Ahmadi
              </h1>
            </div>
            <div className="space-y-4">
              <p className="text-lg text-slate-700 leading-relaxed">
                Graduate researcher specializing in <strong>Natural Language Processing</strong>, <strong>Retrieval-Augmented Generation (RAG)</strong>, and <strong>source-grounded conversational systems</strong>.
              </p>
              <p className="text-base text-slate-600 leading-relaxed">
                Currently pursuing my M.Sc. at Universität Hamburg. My research focuses on architecting RAG systems for medical diagnostics, scientific literature analysis, and impact assessment—bridging the gap between foundational NLP research and practical AI applications.
              </p>
            </div>
            <div className="pt-4 flex gap-4">
              <a href="/research" className="bg-slate-900 text-white px-8 py-3 rounded-md text-base font-medium hover:bg-slate-800 transition-all">
                Research
              </a>
              <a href="/contact" className="border border-slate-300 text-slate-900 px-8 py-3 rounded-md text-base font-medium hover:bg-slate-50 transition-all">
                Get in Touch
              </a>
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
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
          </div>
        </div>

        {/* Research Areas Section */}
        <section className="mt-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3 p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600">Research Areas</h3>
            <ul className="text-slate-700 space-y-2 text-sm">
              <li>• Retrieval-Augmented Generation (RAG)</li>
              <li>• Natural Language Processing</li>
              <li>• Conversational AI Systems</li>
              <li>• Source-grounded AI</li>
            </ul>
          </div>
          <div className="space-y-3 p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600">Key Projects</h3>
            <ul className="text-slate-700 space-y-2 text-sm">
              <li>• CollEX: Multimodal Agentic RAG</li>
              <li>• POL-App: Medical RAG System</li>
              <li>• Scientific Literature Analysis</li>
              <li>• Impact Assessment NLP</li>
            </ul>
          </div>
          <div className="space-y-3 p-6 bg-white rounded-lg border border-slate-200">
            <h3 className="text-sm font-bold uppercase tracking-widest text-slate-600">Technical Stack</h3>
            <ul className="text-slate-700 space-y-2 text-sm">
              <li>• Python, PyTorch, scikit-learn</li>
              <li>• Docker, Git, LaTeX</li>
              <li>• Chroma, OpenWebUI</li>
              <li>• Django, Flask, Next.js</li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="px-8 py-8 border-t border-slate-200 mt-32">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Niloufar Baba Ahmadi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:niloufar.baba.ahmadi@studium.uni-hamburg.de" className="hover:text-slate-900 transition-colors">Email</a>
            <a href="https://github.com/niloufarbabaahmadi" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <a href="/research" className="hover:text-slate-900 transition-colors">Research</a>
          </div>
        </div>
      </footer>
    </div>
  )
}