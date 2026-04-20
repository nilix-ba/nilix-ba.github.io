import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Contact() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // In a real application, you would send this data to a backend
    // For now, we'll just show a success message
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-[#F0F2F5] text-slate-900 font-sans" suppressHydrationWarning>
      <Head>
        <title>Contact | Niloufar Baba Ahmadi</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href="/" className="text-xl font-medium tracking-tight hover:text-slate-600 transition-colors">
          Niloufar B. Ahmadi
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="/research" className="hover:text-blue-600 transition-colors">Research</Link>
          <Link href="/publications" className="hover:text-blue-600 transition-colors">Publications</Link>
          <Link href="/contact" className="text-blue-600">Contact</Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-6">Get in Touch</h1>
        
        <p className="text-slate-700 text-lg mb-12">
          I'm interested in research collaborations, speaking opportunities, and engaging discussions about NLP, RAG systems, and conversational AI. Feel free to reach out!
        </p>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Direct Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Email</p>
                <a href="mailto:niloufar.baba.ahmadi@studium.uni-hamburg.de" className="text-blue-600 hover:underline text-slate-900">
                  niloufar.baba.ahmadi@studium.uni-hamburg.de
                </a>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">Location</p>
                <p className="text-slate-900">Hamburg, Germany</p>
              </div>
              <div>
                <p className="text-sm text-slate-500 uppercase tracking-wide mb-1">GitHub</p>
                <a href="https://github.com/niloufarbabaahmadi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  github.com/niloufarbabaahmadi
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg border border-slate-200">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Inquiry Types</h3>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li>• Research collaboration inquiries</li>
              <li>• Speaking engagements & conferences</li>
              <li>• Project-based consulting</li>
              <li>• Academic partnerships</li>
              <li>• Industry collaboration</li>
              <li>• General research discussions</li>
            </ul>
          </div>
        </section>

        {/* Contact Form */}
        <section className="bg-white p-8 rounded-lg border border-slate-200">
          <h2 className="text-2xl font-semibold mb-6 text-slate-900">Send a Message</h2>
          
          {!isHydrated ? (
            <div className="text-center text-slate-500">Loading...</div>
          ) : submitted ? (
            <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
              <p className="text-green-800 font-medium">Thank you for your message!</p>
              <p className="text-green-700 text-sm mt-2">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-900 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="6"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell me more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-slate-900 text-white py-3 rounded-md font-medium hover:bg-slate-800 transition-all"
              >
                Send Message
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                I typically respond to inquiries within 2-3 business days.
              </p>
            </form>
          )}
        </section>

        {/* Alternative Contact Methods */}
        <section className="mt-12 bg-slate-50 p-6 rounded-lg border border-slate-200">
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Prefer a Different Approach?</h3>
          <p className="text-slate-700 mb-4">
            You can also reach out directly via email or check my GitHub profile for code examples and projects.
          </p>
          <div className="flex gap-4">
            <a href="mailto:niloufar.baba.ahmadi@studium.uni-hamburg.de" className="bg-slate-900 text-white px-6 py-2 rounded-md hover:bg-slate-800 transition-all text-sm font-medium">
              Send Direct Email
            </a>
            <a href="https://github.com/niloufarbabaahmadi" target="_blank" rel="noopener noreferrer" className="border border-slate-300 text-slate-900 px-6 py-2 rounded-md hover:bg-white transition-all text-sm font-medium">
              Visit GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="px-8 py-8 border-t border-slate-200 mt-16">
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