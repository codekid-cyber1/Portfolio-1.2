"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Play, Pause, Volume2, VolumeX, Film } from "lucide-react";

interface LazyProjectMediaProps {
  src?: string;
  videoSrc?: string;
  posterSrc?: string;
  alt: string;
  className?: string;
  aspectRatio?: string;
  contain?: boolean;
}

export function LazyProjectMedia({
  src,
  videoSrc,
  posterSrc,
  alt,
  className = "",
  aspectRatio = "aspect-[16/10]",
  contain = false,
}: LazyProjectMediaProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Check if media is video
  const resolvedVideo =
    videoSrc ||
    (src && (src.endsWith(".mp4") || src.includes("/video/upload/")) ? src : undefined);
  const resolvedImage = !resolvedVideo ? src : posterSrc;

  // Lazy loading state: only load when approaching viewport
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Use IntersectionObserver with 250px rootMargin so it begins loading right before scrolling in
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsNearViewport(true);
            // If it's a video and currently in view, play
            if (videoRef.current) {
              videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
            }
          } else {
            // When scrolled out of view, pause video to preserve CPU/battery & bandwidth
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause();
              setIsPlaying(false);
            }
          }
        });
      },
      {
        rootMargin: "250px 0px",
        threshold: 0.2,
      }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [resolvedVideo]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  return (
    <div
      ref={containerRef}
      className={`relative w-full overflow-hidden bg-[#FAF7F2] select-none ${aspectRatio} ${className}`}
    >
      {/* ── VIDEO MEDIA ── */}
      {resolvedVideo ? (
        <>
          {/* Poster / Placeholder shown while waiting or loading */}
          {posterSrc && (
            <Image
              src={posterSrc}
              alt={alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
              className={`object-${contain ? "contain" : "cover"} object-center transition-opacity duration-700 ${
                isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
              }`}
              loading="lazy"
              decoding="async"
              unoptimized
            />
          )}

          {/* Mount video only when near or inside viewport */}
          {isNearViewport && (
            <video
              ref={videoRef}
              src={resolvedVideo}
              poster={posterSrc}
              loop
              muted
              playsInline
              preload="metadata"
              className={`w-full h-full object-${contain ? "contain" : "cover"} object-center transition-opacity duration-500`}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          )}

          {/* Subtle Video Badge */}
          <div className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold text-white bg-black/60 backdrop-blur-md border border-white/10 shadow-sm pointer-events-none">
            <Film className="w-3 h-3 text-[#E87040]" />
            <span>HD Video</span>
          </div>

          {/* Video control overlay buttons */}
          <div className="absolute bottom-3 right-3 z-10 flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-opacity">
            <button
              onClick={togglePlay}
              type="button"
              aria-label={isPlaying ? "Pause Video" : "Play Video"}
              className="w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/15 shadow"
            >
              {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
            </button>
            <button
              onClick={toggleMute}
              type="button"
              aria-label={isMuted ? "Unmute Video" : "Mute Video"}
              className="w-8 h-8 rounded-full bg-black/65 hover:bg-black/85 backdrop-blur-md text-white flex items-center justify-center transition-transform hover:scale-105 border border-white/15 shadow"
            >
              {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
            </button>
          </div>
        </>
      ) : resolvedImage ? (
        /* ── IMAGE MEDIA (Pure Lazy Loading) ── */
        <>
          {/* Subtle skeleton shimmer before load */}
          {!imageLoaded && (
            <div className="absolute inset-0 bg-gradient-to-r from-[#F4EFE6] via-[#EDE4D5] to-[#F4EFE6] animate-pulse" />
          )}
          <Image
            src={resolvedImage}
            alt={alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
            className={`object-${contain ? "contain" : "cover"} object-center transition-all duration-700 ease-out group-hover:scale-105 ${
              imageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            loading="lazy"
            decoding="async"
            unoptimized
            onLoad={() => setImageLoaded(true)}
          />
        </>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-xs text-stone-400">
          No media preview
        </div>
      )}
    </div>
  );
}
