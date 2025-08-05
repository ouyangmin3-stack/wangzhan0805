'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import BlogPostCard from './BlogPostCard'

const HeroSection = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', { firstName, email })
  }

  return (
    <section className="relative bg-savina-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and circular text */}
          <div className="relative">
            <div className="relative w-full h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <img
                src="https://ext.same-assets.com/598298977/2295940293.png"
                alt="Capsule Wardrobe Bundle"
                className="w-full h-full object-cover"
              />

              {/* Circular overlay with text */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center">
                    <p className="text-xs font-semibold text-savina-dark">PLUS A <span className="text-savina-accent">FREE</span></p>
                    <p className="text-xs font-semibold text-savina-dark">STYLE GUIDE <span className="text-savina-accent">WITH</span></p>
                    <p className="text-lg font-bold text-savina-dark">18</p>
                    <p className="text-xs text-savina-dark">OUTFIT IDEAS YOU</p>
                    <p className="text-xs text-savina-dark">CAN RE-CREATE</p>
                    <p className="text-xs font-semibold text-savina-dark">INSTANTLY</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-savina-dark leading-tight">
                Get The Ultimate Wardrobe Staples Checklist
              </h1>
              <p className="mt-4 text-lg text-savina-brown">
                Join our community and get this wardrobe checklist + a FREE style guide sent directly to your email.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 border-savina-brown/20 focus:border-savina-accent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 border-savina-brown/20 focus:border-savina-accent"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-savina-pink hover:bg-savina-accent text-savina-dark font-medium"
              >
                Download
              </Button>
            </form>

            <div className="flex justify-center">
              <Button variant="ghost" className="text-savina-brown hover:text-savina-accent">
                ✕
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Article preview */}
            <BlogPostCard
              title="Minimalist Clothes For Your Winter Wardrobe"
              excerpt="There is a selection of minimalist clothes that are essential for your winter capsule wardrobe. 7 to be exact, and here they are."
              imageUrl="https://ext.same-assets.com/598298977/3081962965.jpeg"
              href="/minimalist-clothes"
              featured={true}
            />

            {/* Right side content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif italic text-savina-accent mb-4">
                  Looking To Build A Capsule Wardrobe?
                </h2>
                <p className="text-xl font-medium text-savina-dark">
                  Start here.
                </p>
              </div>

              {/* Blog post links */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <img
                    src="https://ext.same-assets.com/598298977/4213366883.png"
                    alt="Winter Capsule Wardrobe"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-savina-dark">
                      Winter Capsule Wardrobe: What To Wear in Winter 2024
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="https://ext.same-assets.com/598298977/1461733617.png"
                    alt="Capsule Wardrobe Guide"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-savina-dark">
                      Capsule Wardrobe: The Complete Guide To Your Dream Closet
                    </h4>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <img
                    src="https://ext.same-assets.com/598298977/3178606061.png"
                    alt="Ultimate Capsule Wardrobe"
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <h4 className="font-medium text-savina-dark">
                      The Ultimate Capsule Wardrobe Checklist 2024
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Category cards */}
      <div className="mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://ext.same-assets.com/598298977/2953733044.jpeg"
                  alt="Style"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif font-bold">STYLE</h3>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://ext.same-assets.com/598298977/503618316.jpeg"
                  alt="Sustainability"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif font-bold">SUSTAINABILITY</h3>
                </div>
              </div>
            </Card>

            <Card className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300">
              <div className="relative h-48">
                <img
                  src="https://ext.same-assets.com/598298977/1159577400.png"
                  alt="Minimalism"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-serif font-bold">MINIMALISM</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
