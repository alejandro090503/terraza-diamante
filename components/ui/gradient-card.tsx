"use client";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

/**
 * GradientCard — animated blob gradient background that works at ANY size.
 * Uses the same color palette as the hero's BackgroundGradientAnimation.
 * Wrap any card or section content with this component.
 */
export function GradientCard({
  children,
  className,
  containerClassName,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) {
  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        "bg-[linear-gradient(135deg,rgb(76,29,149),rgb(45,10,100))]",
        containerClassName
      )}
    >
      {/* Blob layer — percentage-based origins so they work at any size */}
      <div
        className={cn(
          "absolute inset-0",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(20px)]"
        )}
        aria-hidden="true"
      >
        {/* Purple — orbits from center */}
        <div className={cn(
          "absolute w-[120%] h-[120%] -top-[10%] -left-[10%]",
          "[background:radial-gradient(circle_at_center,rgba(124,58,237,0.9)_0,transparent_55%)]",
          "[mix-blend-mode:hard-light] [transform-origin:50%_50%]",
          "animate-gradient-first opacity-100"
        )} />
        {/* Pink — orbits from left */}
        <div className={cn(
          "absolute w-[120%] h-[120%] -top-[10%] -left-[10%]",
          "[background:radial-gradient(circle_at_center,rgba(236,72,153,0.8)_0,transparent_55%)]",
          "[mix-blend-mode:hard-light] [transform-origin:20%_50%]",
          "animate-gradient-second opacity-100"
        )} />
        {/* Blue — orbits from right */}
        <div className={cn(
          "absolute w-[120%] h-[120%] -top-[10%] -left-[10%]",
          "[background:radial-gradient(circle_at_center,rgba(59,130,246,0.8)_0,transparent_55%)]",
          "[mix-blend-mode:hard-light] [transform-origin:80%_50%]",
          "animate-gradient-third opacity-100"
        )} />
        {/* Gold — orbits from bottom-left */}
        <div className={cn(
          "absolute w-[120%] h-[120%] -top-[10%] -left-[10%]",
          "[background:radial-gradient(circle_at_center,rgba(245,158,11,0.7)_0,transparent_55%)]",
          "[mix-blend-mode:hard-light] [transform-origin:30%_80%]",
          "animate-gradient-fourth opacity-60"
        )} />
        {/* Lilac — orbits from top-right */}
        <div className={cn(
          "absolute w-[120%] h-[120%] -top-[10%] -left-[10%]",
          "[background:radial-gradient(circle_at_center,rgba(167,139,250,0.8)_0,transparent_55%)]",
          "[mix-blend-mode:hard-light] [transform-origin:70%_20%]",
          "animate-gradient-fifth opacity-100"
        )} />
      </div>

      {/* Content sits above blobs */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
