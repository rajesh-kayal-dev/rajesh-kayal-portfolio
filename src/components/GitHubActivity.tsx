"use client";

import React, { useState, useRef } from "react";
import { GitHubCalendar } from "react-github-calendar";

type ActivityDay = {
  date: string;
  count: number;
  level: number;
};

// Explicit type for the props we pass to the cloned SVG block element
type BlockProps = {
  onMouseEnter?: (e: React.MouseEvent<SVGRectElement>) => void;
  onMouseLeave?: () => void;
  className?: string;
};

export default function GitHubActivity({ username }: { username: string }) {
  const [hoveredActivity, setHoveredActivity] = useState<ActivityDay | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const formatGitHubDate = (dateString: string) => {
    const date = new Date(dateString);
    const month = date.toLocaleString("en-US", { month: "long" });
    const day = date.getDate();

    let suffix = "th";
    if (day < 10 || day > 20) {
      switch (day % 10) {
        case 1: suffix = "st"; break;
        case 2: suffix = "nd"; break;
        case 3: suffix = "rd"; break;
      }
    }

    return `${month} ${day}${suffix}`;
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full flex flex-col items-center justify-center group/calendar"
    >
      {/* Custom Premium Tooltip */}
      {hoveredActivity && (
        <div
          className="absolute z-50 pointer-events-none bg-[#0d1117] text-white border border-neutral-800 text-[12px] py-2 px-3 rounded-md shadow-2xl animate-in fade-in zoom-in duration-150"
          style={{
            left: mousePos.x,
            top: mousePos.y - 6,
            transform: "translate(-50%, -100%)",
          }}
        >
          <div className="font-sans whitespace-nowrap">
            <span className="font-semibold text-white text-[11px]">
              {hoveredActivity.count === 0 ? "No" : hoveredActivity.count}{" "}
              contribution{hoveredActivity.count !== 1 ? "s" : ""}
            </span>
            <span className="text-neutral-400 text-[11px]"> on </span>
            <span className="font-semibold text-white text-[11px]">
              {formatGitHubDate(hoveredActivity.date)}
            </span>
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#0d1117] border-b border-r border-neutral-800 rotate-45" />
        </div>
      )}

      <GitHubCalendar
        username={username}
        blockSize={12}
        blockMargin={4}
        fontSize={12}
        theme={{
          light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
          dark: ["#161616", "#0e4429", "#006d32", "#26a641", "#39d353"],
        }}
        showWeekdayLabels={false}
        labels={{
          totalCount: "{{count}} contributions in the last year",
        }}
        renderBlock={(block, activity) =>
          React.cloneElement(
            block as React.ReactElement<BlockProps>,
            {
              onMouseEnter: (e: React.MouseEvent<SVGRectElement>) => {
                const containerRect = containerRef.current?.getBoundingClientRect();
                const targetRect = (e.target as SVGRectElement).getBoundingClientRect();
                if (containerRect) {
                  setHoveredActivity(activity as ActivityDay);
                  setMousePos({
                    x: targetRect.left - containerRect.left + targetRect.width / 2,
                    y: targetRect.top - containerRect.top,
                  });
                }
              },
              onMouseLeave: () => setHoveredActivity(null),
              className:
                "cursor-pointer outline-none transition-all duration-200 hover:stroke-white hover:stroke-[0.5px]",
            }
          )
        }
        style={{
          color: "hsl(var(--muted-foreground))",
          maxWidth: "100%",
        }}
        className="[&_svg]:max-w-full [&_svg]:h-auto [&_.react-activity-calendar\_\_count]:text-neutral-500 [&_.react-activity-calendar\_\_legend-colors_span]:text-neutral-500 [&_.react-activity-calendar\_\_footer]:mt-4"
      />
    </div>
  );
}
