'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

interface BlogPostCardProps {
  title: string
  excerpt: string
  imageUrl: string
  category?: string
  readTime?: string
  href: string
  className?: string
  featured?: boolean
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
  title,
  excerpt,
  imageUrl,
  category,
  readTime,
  href,
  className = "",
  featured = false
}) => {
  if (featured) {
    return (
      <div className={`blog-post-card ${className}`}>
        <Link href={href}>
          <div className="relative h-80 overflow-hidden rounded-lg">
            <img
              src={imageUrl}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4">
              <Card className="bg-white/95 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="font-serif text-xl font-bold text-savina-dark mb-2">
                    {title}
                  </h3>
                  <p className="text-sm text-savina-brown mb-3" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden'
                  }}>
                    {excerpt}
                  </p>
                  <Button variant="outline" size="sm" className="border-savina-dark text-savina-dark hover:bg-savina-dark hover:text-white">
                    READ NOW
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </Link>
      </div>
    )
  }

  return (
    <Card className={`blog-post-card overflow-hidden bg-white border-0 shadow-sm hover:shadow-md ${className}`}>
      <Link href={href}>
        <div className="relative h-48 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {category && (
            <Badge className="absolute top-4 left-4 bg-white/90 text-savina-dark hover:bg-white">
              {category}
            </Badge>
          )}
        </div>
        <CardContent className="p-6 bg-white">
          <h3 className="font-serif text-xl font-bold text-savina-dark mb-3 hover:text-savina-accent transition-colors" style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {title}
          </h3>
          <p className="text-savina-brown text-sm mb-4" style={{
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden'
          }}>
            {excerpt}
          </p>
          {readTime && (
            <p className="text-xs text-savina-muted">{readTime}</p>
          )}
        </CardContent>
      </Link>
    </Card>
  )
}

export default BlogPostCard
