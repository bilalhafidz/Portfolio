"use client";

import { useEffect, useRef, useState } from "react";

export default function AnimatedCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(true);

  const pos = useRef({ x: 0, y: 0 });
  const ring = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    const hasTouch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches ||
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    setIsTouchDevice(hasTouch);

    if (hasTouch) {
      document.body.style.cursor = "auto";
      return;
    }

    document.body.style.cursor = "none";

    const move = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      }
    };

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.12;
      ring.current.y += (pos.current.y - ring.current.y) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`;
      }

      rafId.current = requestAnimationFrame(animate);
    };

    const handleMouseDown = () => setClicking(true);
    const handleMouseUp = () => setClicking(false);
    const handleHover = () => setHovering(true);
    const handleUnhover = () => setHovering(false);

    const interactables = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, label',
    );

    document.addEventListener("mousemove", move);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    interactables.forEach((el) => {
      el.addEventListener("mouseenter", handleHover);
      el.addEventListener("mouseleave", handleUnhover);
    });

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.body.style.cursor = "auto";

      document.removeEventListener("mousemove", move);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);

      interactables.forEach((el) => {
        el.removeEventListener("mouseenter", handleHover);
        el.removeEventListener("mouseleave", handleUnhover);
      });

      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, []);

  if (isTouchDevice) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="custom-cursor-dot fixed left-0 top-0 pointer-events-none z-[9999]"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            clicking
              ? "h-3 w-3 bg-white"
              : hovering
                ? "h-2 w-2 bg-[#22D3EE]"
                : "h-2 w-2 bg-[#00D9FF]"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
            boxShadow: hovering
              ? "0 0 12px rgba(34,211,238,0.9)"
              : "0 0 8px rgba(0,217,255,0.8)",
          }}
        />
      </div>

      <div
        ref={ringRef}
        className="custom-cursor-ring fixed left-0 top-0 pointer-events-none z-[9998]"
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full border transition-all duration-300 ${
            hovering
              ? "h-12 w-12 border-[#22D3EE] opacity-80"
              : clicking
                ? "h-8 w-8 border-white opacity-90"
                : "h-9 w-9 border-[#00D9FF] opacity-50"
          }`}
          style={{
            transform: "translate(-50%, -50%)",
            boxShadow: hovering
              ? "0 0 16px rgba(34,211,238,0.3), inset 0 0 16px rgba(34,211,238,0.05)"
              : "0 0 12px rgba(0,217,255,0.2)",
          }}
        />
      </div>
    </>
  );
}