'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'

const Footer = () => {
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Footer newsletter signup:', { firstName, email })
  }

  const shoppingItems = [
    {
      name: "Dark Red Knit Sweater",
      image: "https://ext.same-assets.com/598298977/3088418263.jpeg",
      href: "#"
    },
    {
      name: "Collared Wool Jacket",
      image: "https://ext.same-assets.com/598298977/171869291.jpeg",
      href: "#"
    },
    {
      name: "Brown Sock Boots",
      image: "https://ext.same-assets.com/598298977/4030129053.jpeg",
      href: "#"
    },
    {
      name: "Satin Maxi Skirt",
      image: "https://ext.same-assets.com/598298977/2464019310.jpeg",
      href: "#"
    }
  ]

  return (
    <footer className="bg-savina-cream">
      {/* Shopping List Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-serif font-bold text-savina-dark text-center mb-12">
            Fall Capsule Wardrobe Shopping List:
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {shoppingItems.map((item, index) => (
              <div key={index} className="text-center">
                <Link href={item.href} className="group">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="font-medium text-savina-dark mb-2">{item.name}</h4>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-savina-brown text-savina-brown hover:bg-savina-brown hover:text-white"
                  >
                    SHOP
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final Newsletter Signup */}
      <div className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl font-bold text-savina-dark mb-4">
            GET THE ULTIMATE WARDROBE CHECKLIST + YOUR FREE STYLE GUIDE HERE
          </h3>
          <p className="text-savina-brown mb-8">
            Sign up for our newsletter and get this <strong>free printable</strong> directly to your email.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="text"
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="flex-1 border-savina-brown/20 focus:border-savina-accent"
            />
            <Input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-savina-brown/20 focus:border-savina-accent"
            />
            <Button
              type="submit"
              className="bg-savina-dark hover:bg-savina-brown text-white px-8 whitespace-nowrap"
            >
              SEND ME THE CHECKLIST!
            </Button>
          </form>

          <p className="text-xs text-savina-muted mt-4">
            YAY! Check your inbox!
          </p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-savina-brown/10 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm text-savina-brown mb-4">
              COPYRIGHT © 2025{' '}
              <Link href="/" className="text-savina-dark font-semibold hover:text-savina-accent">
                STYLE BY SAVINA
              </Link>{' '}
              ALL RIGHTS RESERVED.
            </p>

            <div className="flex justify-center space-x-4 text-xs text-savina-muted">
              <Link href="/privacy-policy" className="hover:text-savina-accent">
                PRIVACY POLICY
              </Link>
              <span>|</span>
              <Link href="/disclaimer" className="hover:text-savina-accent">
                DISCLAIMER POLICY
              </Link>
              <span>|</span>
              <Link href="/terms" className="hover:text-savina-accent">
                TERMS AND CONDITIONS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
