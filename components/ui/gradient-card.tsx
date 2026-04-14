"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function GradientCard({
  children,
  className,
  containerClassName,
  interactive = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  interactive?: boolean;
}) {
  const [isSafari, setIsSafari] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const interactiveRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const curPos = useRef({ x: 0, y: 0 });
  const tgPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  // Initialize pointer blob to card center on mount
  useEffect(() => {
    if (!interactive || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    curPos.current = { x: rect.width / 2, y: rect.height / 2 };
    tgPos.current = { x: rect.width / 2, y: rect.height / 2 };
  }, [interactive]);

  // Continuous RAF loop — smooth easing toward mouse target
  useEffect(() => {
    if (!interactive) return;
    function tick() {
      curPos.current.x += (tgPos.current.x - curPos.current.x) / 20;
      curPos.current.y += (tgPos.current.y - curPos.current.y) / 20;
      if (interactiveRef.current) {
        interactiveRef.current.style.transform = `translate(${Math.round(curPos.current.x)}px, ${Math.round(curPos.current.y)}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [interactive]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    tgPos.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={interactive ? handleMouseMove : undefined}
      className={cn(
        "relative overflow-hidden",
        "bg-[linear-gradient(135deg,rgb(76,29,149),rgb(45,10,100))]",
        containerClassName
      )}
    >
      {/* Blob layer */}
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
        {/* Interactive pointer blob */}
        {interactive && (
          <div
            ref={interactiveRef}
            className={cn(
              "absolute w-[60%] h-[60%]",
              "[background:radial-gradient(circle_at_center,rgba(236,72,153,0.8)_0,transparent_55%)]",
              "[mix-blend-mode:hard-light]",
              "-translate-x-1/2 -translate-y-1/2",
              "opacity-70"
            )}
          />
        )}
      </div>

      {/* Content sits above blobs */}
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
