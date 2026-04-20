import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { siteConfig } from '../config/site'

export default function Contact() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setIsHydrated(true)
    // Initialize EmailJS
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '')
  }, [])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    setError(null)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        {
          to_email: siteConfig.email,
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }
      )

      setSubmitted(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => {
        setSubmitted(false)
      }, 5000)
    } catch (err) {
      setError('Failed to send message. Please try again or contact directly via email.')
      console.error('EmailJS error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <title>Contact | {siteConfig.name}</title>
      </Head>

      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
        <Link href={siteConfig.routes.home} className="text-xl font-medium tracking-tight nav-link">
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href={siteConfig.routes.research} className="nav-link">Research</Link>
          <Link href={siteConfig.routes.publications} className="nav-link">Publications</Link>
          <Link href={siteConfig.routes.contact} className="nav-link-active">Contact</Link>
        </div>
      </nav>

      <main className="max-w-2xl mx-auto px-8 py-12">
        <h1 className="text-4xl md:text-5xl font-serif mb-6 text-primary">Get in Touch</h1>
        
        <p className="section-description text-lg mb-12">
          I'm interested in research collaborations and speaking opportunities. Feel free to reach out!
        </p>

        {/* Contact Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="card p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Direct Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline text-slate-900">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-sm text-muted uppercase tracking-wide mb-1">Location</p>
                <p className="text-primary">{siteConfig.location}</p>
              </div>
              <div>
                <p className="text-sm text-muted uppercase tracking-wide mb-1">GitHub</p>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                  {siteConfig.github}
                </a>
              </div>
            </div>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-primary mb-4">Quick Inquiry Types</h3>
            <ul className="space-y-2 text-secondary text-sm">
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
        <section className="card p-8">
          <h2 className="text-2xl font-semibold mb-6 text-primary">Send a Message</h2>
          
          {!isHydrated ? (
            <div className="text-center text-muted">Loading...</div>
          ) : submitted ? (
            <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
              <p className="text-accent font-medium">✓ Thank you for your message!</p>
              <p className="text-accent/80 text-sm mt-2">I'll get back to you as soon as possible.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {error && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700 text-sm">
                  {error}
                </div>
              )}
              
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
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-50"
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
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-50"
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
                  disabled={isLoading}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-slate-50"
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
                  disabled={isLoading}
                  rows="6"
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none disabled:bg-slate-50"
                  placeholder="Tell me more about your inquiry..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-slate-900 text-white py-3 rounded-md font-medium hover:bg-slate-800 transition-all disabled:bg-slate-500 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
              
              <p className="text-xs text-slate-500 text-center">
                I typically respond to inquiries within 2-3 business days.
              </p>
            </form>
          )}
        </section>

        {/* Alternative Contact Methods */}
        <section className="mt-12 card-neutral p-6 rounded-lg">
          <h3 className="text-lg font-semibold text-primary mb-4">Prefer a Different Approach?</h3>
          <p className="section-description mb-4">
            You can also reach out directly via email or check my GitHub profile for code examples and projects.
          </p>
          <div className="flex gap-4">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary">
              Send Direct Email
            </a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              Visit GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="px-8 py-8 divider mt-16">
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