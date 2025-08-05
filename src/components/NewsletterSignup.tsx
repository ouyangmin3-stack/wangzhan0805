'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const NewsletterSignup = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log('Newsletter signup:', { firstName, email })
  }

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image and content */}
          <div className="relative">
            <img
              src="https://ext.same-assets.com/598298977/2147079498.png"
              alt="Style Everyday Newsletter"
              className="w-full h-auto rounded-lg"
            />
          </div>

          {/* Right side - Newsletter signup */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-serif italic text-savina-pink mb-4">
                Join the Club
              </h2>
              <p className="text-lg text-savina-dark mb-2">
                Everything you need to know to stay on top of your style game, delivered to your mailbox.
              </p>
              <p className="text-base text-savina-brown">
                Get FREE access to Savina's Exclusive Club.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full h-12 border-savina-brown/20 focus:border-savina-accent rounded-full"
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-12 border-savina-brown/20 focus:border-savina-accent rounded-full"
                />
              </div>
              <Button
                type="submit"
                className="w-full h-12 bg-savina-pink hover:bg-savina-accent text-savina-dark font-medium rounded-full"
              >
                I'M IN
              </Button>
            </form>

            <p className="text-xs text-savina-muted text-center">
              Welcome to the club, babe! Check your inbox.
            </p>
          </div>
        </div>

        {/* Popular from Capsule Wardrobe section */}
        <div className="mt-24">
          <div className="flex justify-between items-center mb-8">
            <h3 className="text-2xl font-serif text-savina-dark">
              Popular from <span className="italic">Capsule Wardrobe</span>
            </h3>
            <Button variant="link" className="text-savina-accent hover:text-savina-brown">
              READ ALL
            </Button>
          </div>

          <Card className="overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 lg:h-auto">
                <img
                  src="https://ext.same-assets.com/598298977/654356969.png"
                  alt="Winter Capsule Wardrobe"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-8 flex flex-col justify-center">
                <h4 className="font-serif text-2xl font-bold text-savina-dark mb-4">
                  Winter Capsule Wardrobe: What To Wear in Winter 2024
                </h4>
                <p className="text-savina-brown mb-6">
                  Everything you need to know about creating the perfect winter capsule wardrobe that works for your lifestyle and keeps you stylish all season long.
                </p>
                <Button
                  variant="outline"
                  className="border-savina-dark text-savina-dark hover:bg-savina-dark hover:text-white w-fit"
                >
                  READ MORE
                </Button>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Latest Stories section */}
        <div className="mt-24">
          <h3 className="text-3xl font-serif italic text-savina-dark text-center mb-12">
            Latest Stories
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h4 className="font-serif text-lg font-bold text-savina-dark mb-2">
                7 Essential Minimalist Clothes For Your Winter Wardrobe
              </h4>
              <p className="text-sm text-savina-brown">
                March 14, 2025
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-serif text-lg font-bold text-savina-dark mb-2">
                What To Wear To A Black Tie Wedding: Dos & Don'ts
              </h4>
              <p className="text-sm text-savina-brown">
                March 14, 2025
              </p>
            </div>

            <div className="text-center">
              <h4 className="font-serif text-lg font-bold text-savina-dark mb-2">
                How To Wear Ankle Boots With Jeans in Winter 2025
              </h4>
              <p className="text-sm text-savina-brown">
                March 14, 2025
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button
              variant="outline"
              className="border-savina-brown text-savina-brown hover:bg-savina-brown hover:text-white"
            >
              view all
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsletterSignup
