'use client'

import React from 'react'
import Link from 'next/link'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from '@/components/ui/navigation-menu'

const Header = () => {
  return (
    <header className="w-full bg-savina-cream border-b border-savina-brown/10 sticky top-0 z-50">
      {/* Top banner */}
      <div className="bg-savina-accent text-white text-center py-2 text-sm">
        <Link href="/shop" className="hover:underline">
          <em>The Ultimate Capsule Wardrobe</em> BUNDLE <em>is out now!</em>
        </Link>
      </div>

      {/* Main navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-6">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-serif font-bold text-savina-dark hover:text-savina-accent transition-colors">
              Style by Savina
            </Link>
            <p className="text-sm text-savina-brown">Minimalist Fashion Blog</p>
          </div>

          {/* Navigation menu */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-savina-dark hover:text-savina-accent transition-colors font-medium">
              Home
            </Link>
            <Link href="/about" className="text-savina-dark hover:text-savina-accent transition-colors font-medium">
              About
            </Link>

            {/* Categories dropdown */}
            <div className="relative group">
              <button className="text-savina-dark hover:text-savina-accent transition-colors font-medium flex items-center">
                Categories
                <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  <Link href="/style" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Style</Link>
                  <Link href="/sustainability" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Sustainability</Link>
                  <Link href="/minimalism" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Minimalism</Link>
                  <Link href="/capsule-wardrobe" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Capsule Wardrobe</Link>
                  <Link href="/what-to-buy" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">What To Buy</Link>
                  <Link href="/beauty" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Beauty</Link>
                  <Link href="/mindfulness" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Mindfulness</Link>
                  <Link href="/blogging" className="block px-4 py-2 text-sm text-savina-dark hover:bg-savina-cream">Blogging</Link>
                </div>
              </div>
            </div>

            <Link href="/shop" className="text-savina-dark hover:text-savina-accent transition-colors font-medium">
              Shop
            </Link>
            <Link href="/contact" className="text-savina-dark hover:text-savina-accent transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Social icons */}
          <div className="flex space-x-4">
            <Link href="https://instagram.com" className="text-savina-brown hover:text-savina-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987c6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.326-1.297s-1.297-1.991-1.297-3.326c0-1.297.49-2.448 1.297-3.326s1.991-1.297 3.326-1.297c1.297 0 2.448.49 3.326 1.297s1.297 1.991 1.297 3.326c0 1.297-.49 2.448-1.297 3.326s-1.991 1.297-3.326 1.297zm7.718 0c-1.297 0-2.448-.49-3.326-1.297s-1.297-1.991-1.297-3.326c0-1.297.49-2.448 1.297-3.326s1.991-1.297 3.326-1.297c1.297 0 2.448.49 3.326 1.297s1.297 1.991 1.297 3.326c0 1.297-.49 2.448-1.297 3.326s-1.991 1.297-3.326 1.297z"/>
              </svg>
            </Link>
            <Link href="https://facebook.com" className="text-savina-brown hover:text-savina-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </Link>
            <Link href="https://pinterest.com" className="text-savina-brown hover:text-savina-accent transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.14.016A11.928 11.928 0 000 11.986c0 5.032 3.1 9.336 7.514 11.127-.098-.934-.187-2.37.04-3.391.205-.921 1.315-5.583 1.315-5.583s-.336-.671-.336-1.662c0-1.556.902-2.719 2.024-2.719.954 0 1.415.716 1.415 1.575 0 .959-.61 2.391-.926 3.717-.264 1.117.56 2.027 1.663 2.027 1.996 0 3.532-2.105 3.532-5.142 0-2.69-1.932-4.57-4.692-4.57-3.196 0-5.073 2.397-5.073 4.87 0 .964.371 1.997.834 2.56a.362.362 0 01.083.343c-.091.378-.293 1.197-.333 1.363-.053.225-.172.272-.397.164-1.487-.693-2.417-2.869-2.417-4.615 0-3.542 2.574-6.797 7.413-6.797 3.892 0 6.92 2.777 6.92 6.493 0 3.87-2.441 6.982-5.829 6.982-1.138 0-2.21-.593-2.574-1.378 0 0-.563 2.147-.7 2.675-.253.972-.937 2.19-1.394 2.932A11.996 11.996 0 0012.14.016z"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
