import React from 'react'
import Header from '@/components/Header'
import HeroSection from '@/components/HeroSection'
import BlogSection from '@/components/BlogSection'
import InstagramSection from '@/components/InstagramSection'
import NewsletterSignup from '@/components/NewsletterSignup'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-savina-cream">
      <Header />
      <main>
        <HeroSection />
        <BlogSection />
        <InstagramSection />
        <NewsletterSignup />
      </main>
      <Footer />
    </div>
  )
}
