import Head from 'next/head'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import { siteConfig } from '../config/site'

export default function Contact() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
      setTimeout(() => setSubmitted(false), 5000)
    } catch (err) {
      setError('Failed to send message. Please try again.')
      console.error('EmailJS error:', err)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cream text-primary font-sans" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <title>Contact | {siteConfig.name}</title>
      </Head>

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
          <Link href={siteConfig.routes.contact} className="nav-link-active">Contact</Link>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-[#e3d5ca] px-4 py-4 flex flex-col gap-3">
          <Link href={siteConfig.routes.research} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Research</Link>
          <Link href={siteConfig.routes.resume} className="nav-link py-2" onClick={() => setMobileMenuOpen(false)}>Resume</Link>
          <Link href={siteConfig.routes.contact} className="nav-link-active py-2" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
        </div>
      )}

      <main className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif mb-4 sm:mb-6 text-primary">Get in Touch</h1>
        
        <p className="section-description text-sm sm:text-base lg:text-lg mb-8 sm:mb-12">
          I'm interested in research collaborations and speaking opportunities. Feel free to reach out!
        </p>

        <section className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          <div className="card p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-4">Direct Contact</h3>
            <div className="space-y-4">
              <div>
                <p className="text-xs sm:text-sm text-muted uppercase tracking-wide mb-1">Email</p>
                <a href={`mailto:${siteConfig.email}`} className="text-blue-600 hover:underline text-sm sm:text-slate-900 break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted uppercase tracking-wide mb-1">LinkedIn</p>
                <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm">
                  View Profile
                </a>
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted uppercase tracking-wide mb-1">GitHub</p>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm break-all">
                  {siteConfig.github}
                </a>
              </div>
            </div>
          </div>

          <div className="card p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-primary mb-4">Quick Inquiry Types</h3>
            <ul className="space-y-2 text-secondary text-xs sm:text-sm">
              <li>• Research collaboration inquiries</li>
              <li>• Speaking engagements</li>
              <li>• Academic partnerships</li>
              <li>• Industry collaboration</li>
            </ul>
          </div>
        </section>

        <section className="card p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-primary">Send a Message</h2>
          
          {!isHydrated ? (
            <div className="text-center text-muted text-sm">Loading...</div>
          ) : submitted ? (
            <div className="bg-accent/10 border border-accent rounded-lg p-4 sm:p-6 text-center">
              <p className="text-accent font-medium text-sm sm:text-base">✓ Thank you for your message!</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              {error && <div className="text-red-700 text-xs sm:text-sm">{error}</div>}
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">Name</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2 border rounded-md text-sm" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2 border rounded-md text-sm" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">Subject</label>
                <input type="text" name="subject" value={formData.subject} onChange={handleInputChange} required className="w-full px-3 sm:px-4 py-2 border rounded-md text-sm" placeholder="What is this about?" />
              </div>
              <div>
                <label className="block text-xs sm:text-sm font-medium text-slate-900 mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} required rows="6" className="w-full px-3 sm:px-4 py-2 border rounded-md resize-none text-sm" placeholder="Tell me more..."></textarea>
              </div>
              <button type="submit" disabled={isLoading} className="w-full bg-slate-900 text-white py-2.5 sm:py-3 rounded-md font-medium hover:bg-slate-800 disabled:bg-slate-500 text-sm sm:text-base">
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </section>

        <section className="mt-8 sm:mt-12 card-neutral p-4 sm:p-6 rounded-lg">
          <h3 className="text-base sm:text-lg font-semibold text-primary mb-4">Prefer a Different Approach?</h3>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3">
            <a href={`mailto:${siteConfig.email}`} className="btn-primary text-center px-4 sm:px-6 py-2 sm:py-3">Email</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center px-4 sm:px-6 py-2 sm:py-3">LinkedIn Profile</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="btn-secondary text-center px-4 sm:px-6 py-2 sm:py-3">Visit GitHub</a>
          </div>
        </section>
      </main>

      <footer className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 divider mt-12 sm:mt-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-3 sm:flex-row justify-between items-center text-muted text-xs sm:text-sm">
          <p>{siteConfig.copyrightText}</p>
          <div className="flex gap-3 sm:gap-6 text-xs sm:text-sm">
            <a href={`mailto:${siteConfig.email}`} className="link-light">Email</a>
            <a href={siteConfig.linkedIn} target="_blank" rel="noopener noreferrer" className="link-light">LinkedIn</a>
            <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="link-light">GitHub</a>
            <Link href={siteConfig.routes.research} className="link-light">Research</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}