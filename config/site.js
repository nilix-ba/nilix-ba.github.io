/**
 * Site Configuration
 * Update values here and they will automatically reflect across all pages
 */

export const siteConfig = {
  // Personal Information
  name: 'Niloufar Baba Ahmadi',
  shortName: 'Niloufar',
  title: 'NLP & RAG Researcher',
  description: 'I am a graduate researcher with years of experience in Natural Language Processing (NLP) and Retrieval-Augmented Generation (RAG)',
  degree: 'M.Sc. Intelligent Adaptive Systems',
  university: 'Universität Hamburg',
  location: 'Hamburg, Germany',
  year: 2026,

  // Contact Information
  email: 'niloufarbabaahmadi@gmail.com',
  
  // Social & External Links
  github: 'https://github.com/nilix-ba',
  linkedIn: 'https://www.linkedin.com/in/niloufar-babaahmadi/',
  
  // Internal Routes
  routes: {
    home: '/',
    research: '/research',
    publications: '/research', // Redirect to research (merged)
    resume: '/resume',
    contact: '/contact',
  },

  // Site Metadata
  siteUrl: 'https://niloufar-baba-ahmadi.de',
  
  // Footer
  copyrightText: `© ${2026} Niloufar Baba Ahmadi. All rights reserved.`,
}

export default siteConfig
