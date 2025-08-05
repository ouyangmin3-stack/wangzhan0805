'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import BlogPostCard from './BlogPostCard'

const BlogSection = () => {
  const seasonalPosts = [
    {
      title: "7 Essential Minimalist Clothes For Your Winter Wardrobe",
      excerpt: "There is a selection of minimalist clothes that are essential for your winter capsule wardrobe. 7 to be exact, and here they are.",
      imageUrl: "https://ext.same-assets.com/598298977/3081962965.jpeg",
      href: "/minimalist-clothes",
      category: "Winter Style"
    },
    {
      title: "How To Wear Ankle Boots With Jeans in Winter 2025",
      excerpt: "The DOs and DONTs of how to wear ankle boots with jeans. Get inspired by these outfits and show off your style confidently.",
      imageUrl: "https://ext.same-assets.com/598298977/4181216412.jpeg",
      href: "/ankle-boots-jeans",
      category: "Style Tips"
    },
    {
      title: "Winter Capsule Wardrobe: What To Wear in Winter 2024",
      excerpt: "Everything you need to know about creating the perfect winter capsule wardrobe that works for your lifestyle.",
      imageUrl: "https://ext.same-assets.com/598298977/4213366883.png",
      href: "/winter-capsule-wardrobe",
      category: "Capsule Wardrobe"
    }
  ]

  const capsulePosts = [
    {
      title: "Winter Capsule Wardrobe: What To Wear in Winter 2024",
      excerpt: "Everything you need to know about creating the perfect winter capsule wardrobe that works for your lifestyle.",
      imageUrl: "https://ext.same-assets.com/598298977/1902205507.png",
      href: "/winter-capsule-wardrobe",
      category: "Capsule Wardrobe"
    },
    {
      title: "Fall Capsule Wardrobe: What To Wear in Autumn 2024",
      excerpt: "Discover the essential pieces for your fall capsule wardrobe and create effortless autumn outfits.",
      imageUrl: "https://ext.same-assets.com/598298977/3921716118.png",
      href: "/fall-capsule-wardrobe",
      category: "Capsule Wardrobe"
    },
    {
      title: "Why Is It Called A Capsule Wardrobe? A Brief History",
      excerpt: "Learn about the origins and evolution of the capsule wardrobe concept and why it's become so popular.",
      imageUrl: "https://ext.same-assets.com/598298977/3036631159.jpeg",
      href: "/capsule-wardrobe-history",
      category: "Fashion History"
    }
  ]

  const giftGuidePosts = [
    {
      title: "12 Fantastic Beauty Gifts For Her That She Will Love And Use",
      excerpt: "Discover the perfect beauty gifts that any woman would love to receive and actually use in her daily routine.",
      imageUrl: "https://ext.same-assets.com/598298977/2658567325.png",
      href: "/beauty-gifts-for-her",
      category: "Gift Guides"
    },
    {
      title: "The Best Minimalist Gifts For People Who Don't Need Anything",
      excerpt: "Find thoughtful and practical minimalist gifts for the person who already has everything they need.",
      imageUrl: "https://ext.same-assets.com/598298977/2066249400.png",
      href: "/minimalist-gifts",
      category: "Gift Guides"
    },
    {
      title: "The Perfect Vegan Gifts For Women That Will Make Their Day",
      excerpt: "A curated list of vegan gifts that are both ethical and luxurious, perfect for the conscious woman in your life.",
      imageUrl: "https://ext.same-assets.com/598298977/1469921050.png",
      href: "/vegan-gifts-women",
      category: "Gift Guides"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seasonal Fashion Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-savina-dark">Seasonal Fashion</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {seasonalPosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-savina-brown text-savina-brown hover:bg-savina-brown hover:text-white">
              more seasonal fashion posts here
            </Button>
          </div>
        </div>

        {/* Capsule Wardrobe Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-savina-dark">Capsule Wardrobe</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capsulePosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-savina-brown text-savina-brown hover:bg-savina-brown hover:text-white">
              more capsule wardrobe posts here
            </Button>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section rounded-2xl p-8 mb-16 text-center">
          <div className="max-w-2xl mx-auto">
            <img
              src="https://ext.same-assets.com/598298977/1830379879.png"
              alt="Ultimate Wardrobe Checklist"
              className="w-24 h-32 mx-auto mb-6"
            />
            <h3 className="text-2xl font-serif font-bold text-savina-dark mb-4">
              JOIN OUR NEWSLETTER AND GET ACCESS TO EXCLUSIVE CAPSULE WARDROBE CONTENT, STYLE GUIDES AND FREE PRINTABLES
            </h3>
            <Button className="bg-savina-accent hover:bg-savina-brown text-white px-8 py-3">
              click here to join
            </Button>
          </div>
        </div>

        {/* Gift Guides Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-savina-dark">Gift Guides</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {giftGuidePosts.map((post, index) => (
              <BlogPostCard key={index} {...post} />
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline" className="border-savina-brown text-savina-brown hover:bg-savina-brown hover:text-white">
              more gift guides posts here
            </Button>
          </div>
        </div>

        {/* Blogging Section */}
        <div className="mb-16">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-savina-dark">Blogging</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-serif font-bold text-savina-dark mb-4">
                Want To Start A Blog?
              </h3>
              <img
                src="https://ext.same-assets.com/598298977/3373452020.png"
                alt="How to start a fashion blog"
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <div className="bg-savina-accent/10 p-6 rounded-lg">
                <span className="text-xs font-semibold text-savina-accent bg-savina-accent/20 px-2 py-1 rounded">
                  BLOGGING
                </span>
                <h4 className="font-serif text-xl font-bold text-savina-dark mt-4 mb-2">
                  How To Start A Fashion Blog That Makes Money
                </h4>
                <p className="text-savina-brown text-sm mb-4">
                  So you're wondering how to start a fashion blog, and you figured who better to ask than a fashion blogger, right? That's smart. I wish I had thought that when I was starting. Maybe this blog would have got where it is a lot faster.
                </p>
                <Button variant="outline" size="sm" className="border-savina-dark text-savina-dark hover:bg-savina-dark hover:text-white">
                  READ MORE
                </Button>
              </div>
            </div>

            <div className="space-y-6">
              <BlogPostCard
                title="How To Become A Fashion Blogger In 2024: Complete Blog Plan"
                excerpt="Everything you need to know to start and grow a successful fashion blog in 2024."
                imageUrl="https://ext.same-assets.com/598298977/132715689.png"
                href="/become-fashion-blogger"
                category="Blogging"
              />
              <BlogPostCard
                title="10 Blog Mistakes You Should Avoid At All Costs"
                excerpt="Learn from these common blogging mistakes and save yourself time and effort."
                imageUrl="https://ext.same-assets.com/598298977/2330003911.jpeg"
                href="/blog-mistakes"
                category="Blogging Tips"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSection
