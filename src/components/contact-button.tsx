"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

export default function ContactButton() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed top-4 right-4 sm:top-6 sm:right-8 z-40"
    >
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-full",
          "bg-card/90 hover:bg-card text-foreground text-xs sm:text-sm font-medium",
          "border border-border/80 shadow-md backdrop-blur-xl",
          "transition-all duration-200 cursor-pointer",
          "hover:border-primary/50 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          isOpen && "ring-2 ring-primary border-primary"
        )}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Contact options"
      >
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span>Contact Me</span>
      </button>

      {isOpen && (
        <div
          className={cn(
            "absolute right-0 top-full mt-2 w-72 sm:w-80 p-2 rounded-2xl",
            "bg-card/95 border border-border/80 shadow-2xl backdrop-blur-2xl ring-1 ring-border/50",
            "animate-in fade-in-0 zoom-in-95 duration-150 flex flex-col gap-1.5"
          )}
        >
          <div className="px-3 py-2 border-b border-border/50">
            <p className="text-xs font-semibold text-foreground">Get in touch</p>
            <p className="text-[11px] text-muted-foreground">
              Usually responds within a few hours
            </p>
          </div>

          {/* Email Option */}
          <a
            href="mailto:rajeshkayal8001@gmail.com"
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center flex-none group-hover:bg-primary/20 transition-colors">
                <Mail className="size-4 text-primary" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-foreground">Email</span>
                <span className="text-[11px] text-muted-foreground truncate">
                  rajeshkayal8001@gmail.com
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-none ml-2" />
          </a>

          {/* WhatsApp Option */}
          <a
            href="https://wa.me/916289943975"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="group flex items-center justify-between p-2.5 rounded-xl hover:bg-muted/70 transition-colors"
          >
            <div className="flex items-center gap-3 min-w-0">
              <div className="size-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center flex-none group-hover:bg-emerald-500/20 transition-colors">
                <Icons.whatsapp className="size-4" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-xs font-medium text-foreground">WhatsApp</span>
                <span className="text-[11px] text-muted-foreground truncate">
                  +91 62899 43975
                </span>
              </div>
            </div>
            <ArrowUpRight className="size-3.5 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-none ml-2" />
          </a>
        </div>
      )}
    </div>
  );
}
