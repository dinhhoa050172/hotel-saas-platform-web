// components/map/cobe-globe.tsx
"use client";

import { useEffect, useRef, useCallback } from "react";
import createGlobe from "cobe";

export interface GlobeMarker {
  location: [number, number];
  size: number;
}

interface CobeGlobeProps {
  markers?: GlobeMarker[];
}

export default function CobeGlobe({ markers = [] }: CobeGlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);

  // Thu nhỏ markers
  const smallMarkers = markers.map((m) => ({
    ...m,
    size: m.size * 0.3,
  }));

  const onPointerDown = useCallback((e: React.PointerEvent) => {
    pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
    if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
  }, []);

  const onPointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (pointerInteracting.current !== null) {
      const delta = e.clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
    }
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    // LIGHT MODE CONFIG — ấm áp, phù hợp nền sáng Airbnb
    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 1200,
      height: 1200,
      phi: 1.8,
      theta: 0.25,
      dark: 0, // ← LIGHT MODE
      diffuse: 3,
      mapSamples: 36000,
      mapBrightness: 1.8,
      baseColor: [1, 1, 1], // Trắng lục địa
      markerColor: [1, 0.22, 0.36], // Đỏ Rausch (#ff385c)
      glowColor: [0.92, 0.92, 0.96], // Glow trắng xám nhẹ
      markers: smallMarkers,
    });

    // Animation loop + Drag interaction
    let phi = 1.8;
    let animationId: number;

    function animate() {
      if (pointerInteracting.current === null) {
        phi += 0.002; // Xoay chậm hơn, thanh lịch
      }
      const dragPhi = phi + pointerInteractionMovement.current / 200;
      globe.update({ phi: dragPhi });
      animationId = requestAnimationFrame(animate);
    }
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      globe.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [markers]);

  return (
    <div className="w-full aspect-square max-w-[500px] mx-auto relative flex items-center justify-center">
      {/* Decorative concentric rings */}
      <div className="absolute inset-[-15%] border border-gray-200/40 rounded-full pointer-events-none" />
      <div className="absolute inset-[-30%] border border-gray-200/20 rounded-full pointer-events-none" />
      <div className="absolute inset-[-45%] border border-gray-100/15 rounded-full pointer-events-none" />

      {/* Subtle warm glow behind globe */}
      <div className="absolute inset-0 bg-[#ff385c]/5 blur-[80px] rounded-full pointer-events-none" />

      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
          contain: "layout paint size",
          cursor: "grab",
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerOut={onPointerOut}
        onMouseMove={onMouseMove}
      />
    </div>
  );
}
