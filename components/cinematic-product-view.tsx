"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CinematicProductViewProps {
  images: string[]
  video?: string
  alt: string
}

export default function CinematicProductView({ images, video, alt }: CinematicProductViewProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const timeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = () => {
    if (video) {
      setShowVideo(true)
    }
  }

  const handleMouseLeave = () => {
    setShowVideo(false)
  }

  const nextImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setSelectedImage((prev) => (prev === images.length - 1 ? 0 : prev + 1))

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  const prevImage = () => {
    if (isTransitioning) return

    setIsTransitioning(true)
    setSelectedImage((prev) => (prev === 0 ? images.length - 1 : prev - 1))

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }

    timeoutRef.current = setTimeout(() => {
      setIsTransitioning(false)
    }, 500)
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <div className="space-y-4">
      <div
        className="relative h-[70vh] w-full overflow-hidden group"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {showVideo && video ? (
          <Image
            src={video || "/placeholder.svg"}
            alt={`${alt} video`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            priority
          />
        ) : (
          <Image
            src={images[selectedImage] || "/placeholder.svg"}
            alt={`${alt} - ${selectedImage + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={cn(
              "object-cover transition-opacity duration-500",
              isTransitioning ? "opacity-80" : "opacity-100",
            )}
            priority
          />
        )}

        {/* Navigation Arrows */}
        <Button
          variant="ghost"
          size="icon"
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Hover Instruction */}
        {video && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/80 px-3 py-1 rounded-full text-sm text-amber-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Hover to view video
          </div>
        )}
      </div>

      <div className="flex space-x-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            className={`relative h-24 w-24 flex-shrink-0 overflow-hidden border-2 transition-all duration-300 ${
              selectedImage === index ? "border-amber-500 scale-105" : "border-transparent"
            }`}
            onClick={() => setSelectedImage(index)}
            aria-label={`View image ${index + 1}`}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`${alt} thumbnail ${index + 1}`}
              fill
              sizes="96px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
