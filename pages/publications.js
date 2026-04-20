import Head from 'next/head'
import Link from 'next/link'

export default function Publications() {
  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 font-sans" suppressHydrationWarning>
      <Head>
        <title>Publications | Niloufar Baba Ahmadi</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium tracking-tight hover:text-slate-600 transition-colors">
          Niloufar B. Ahmadi
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/research" className="hover:text-blue-600 transition-colors">Research</Link>
          <Link href="/publications" className="text-blue-600">Publications</Link>
          <Link href="/contact" className="bg-black text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all">Contact</Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-8">Publications</h1>
        
        <p className="text-slate-600 mb-12">
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
          <p className="text-slate-700 mb-4">
            Additional research projects and preliminary findings under development. Please check back for updates.
          </p>
          <div className="bg-slate-50 p-6 rounded-lg border border-slate-200 text-center">
            <p className="text-slate-600">More preprints and working papers coming soon.</p>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-white p-8 rounded-lg border border-slate-200 mt-12">
          <h2 className="text-xl font-semibold mb-4">Have questions or want to discuss research?</h2>
          <p className="text-slate-700 mb-6">
            I welcome discussions about ongoing projects, potential collaborations, and research inquiries.
          </p>
          <Link href="/contact" className="bg-slate-900 text-white px-6 py-3 rounded-md font-medium hover:bg-slate-800 transition-all inline-block">
            Get in Touch
          </Link>
        </section>
      </main>

      <footer className="px-8 py-8 border-t border-slate-200 mt-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>© 2026 Niloufar Baba Ahmadi. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="mailto:niloufar.baba.ahmadi@studium.uni-hamburg.de" className="hover:text-slate-900 transition-colors">Email</a>
            <a href="https://github.com/niloufarbabaahmadi" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors">GitHub</a>
            <Link href="/research" className="hover:text-slate-900 transition-colors">Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}