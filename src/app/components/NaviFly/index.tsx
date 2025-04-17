"use client";
import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";
import alea from "alea";


export const useParticleEmitter = (containerRef: React.RefObject<HTMLElement>) => {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const interval = setInterval(() => {
      const particle = document.createElement("div");
      particle.style.position = "fixed";
      const baseLeft = parseFloat(container.style.left);
      const baseTop = parseFloat(container.style.top);
      particle.style.left = `${baseLeft + 25}px`; // centro horizontal del hada
      particle.style.top = `${baseTop + 30}px`;  // un poco más abajo del centro
      particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
      particle.style.width = "3px";
      particle.style.height = "3px";
      particle.style.borderRadius = "50%";
      particle.style.background = "white";
      particle.style.opacity = "0.6";
      particle.style.zIndex = "998";
      particle.style.pointerEvents = "none";
      // particle.style.transform = `translate(${(Math.random() - 0.5) * 20}px, ${(Math.random() - 0.5) * 20}px)`;
      particle.style.transition = "all 1s ease-out";

      document.body.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.opacity = "0";
        particle.style.transform += " scale(1.5)";
      });

      setTimeout(() => particle.remove(), 1000);
    }, 50);

    return () => clearInterval(interval);
  }, [containerRef]);
};


const NaviFly = () => {
  const naviRef = useRef<HTMLDivElement>(null);
  const noise = createNoise2D(alea(42));

  // Ruta en % del tamaño de la ventana
  const route = [
    { x: 0.10, y: 0.10 },
    { x: 0.45, y: 0.07 },
    { x: 0.80, y: 0.1 },
    { x: 0.90, y: 0.35 },
    { x: 0.65, y: 0.60 },
    { x: 0.50, y: 0.75 },
    { x: 0.30, y: 0.70 },
    { x: 0.15, y: 0.50 },
    { x: 0.36, y: 0.20 },
    { x: 0.7, y: 0.05 },
    { x: 0.8, y: 0.5 },
    { x: 0.9, y: 0.85 },
    { x: 0.45, y: 0.92 },
    { x: 0.15, y: 0.85 },
    { x: 0.10, y: 0.10 }, // regreso
  ];
  useEffect(() => {
    const navi = naviRef.current;
    if (!navi) return;

    let t = 0;
    let index = 0;

    const animate = () => {
      const current = route[index];
      const next = route[(index + 1) % route.length];

      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      // Convertir % a px
      const currentPx = {
        x: current.x * screenWidth,
        y: current.y * screenHeight,
      };
      const nextPx = {
        x: next.x * screenWidth,
        y: next.y * screenHeight,
      };

      const controlPx = {
        x: (currentPx.x + nextPx.x) / 2 + (nextPx.y - currentPx.y) * 0.3, // <-- más fuerza
        y: (currentPx.y + nextPx.y) / 2 - (nextPx.x - currentPx.x) * 0.1,
      };

      // Interpolación cuadrática tipo curva Bezier
      const baseX =
        Math.pow(1 - t, 2) * currentPx.x +
        2 * (1 - t) * t * controlPx.x +
        Math.pow(t, 2) * nextPx.x;

      const baseY =
        Math.pow(1 - t, 2) * currentPx.y +
        2 * (1 - t) * t * controlPx.y +
        Math.pow(t, 2) * nextPx.y;

      // const baseX = currentPx.x + (nextPx.x - currentPx.x) * t;
      // const baseY = currentPx.y + (nextPx.y - currentPx.y) * t;

      const floatX = noise(t * 4, 0) * 3; // antes 10
      const floatY = noise(0, t * 4) * 3;

      const finalX = baseX + floatX;
      const finalY = baseY + floatY;

      navi.style.left = `${finalX}px`;
      navi.style.top = `${finalY}px`;

      t += 0.003 + Math.sin(t * 2) * 0.001;
      if (t >= 1) {
        t = 0;
        index = (index + 1) % route.length;
      }

      requestAnimationFrame(animate);
    };

    animate();
  }, []);
  useParticleEmitter(naviRef);

  return (
    <>
      {/* Navi flotando */}
      <div
        ref={naviRef}
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          backgroundImage: 'url("/images/navi.gif")',
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          pointerEvents: "none",
          zIndex: 1000,
        }}
      ></div>
      {/* Estela de luz */}
      <div
        style={{
          position: "fixed",
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          pointerEvents: "none",
          background: "radial-gradient(circle, rgba(255,255,255,0.4) 0%, transparent 70%)",
          filter: "blur(12px)",
          zIndex: 999,
          transition: "transform 0.15s linear",
        }}
        ref={(el) => {
          if (!el || !naviRef.current) return;
          // Linkea su posición al hada
          const observer = new MutationObserver(() => {
            el.style.left = naviRef.current!.style.left;
            el.style.top = naviRef.current!.style.top;
          });
          observer.observe(naviRef.current, { attributes: true, attributeFilter: ["style"] });
        }}
      />

      {/* Marcadores de ruta (debug visual) */}
      {/* {route.map((point, idx) => (
        <div
          key={idx}
          style={{
            position: "fixed",
            left: `${point.x * 100}%`,
            top: `${point.y * 100}%`,
            width: "10px",
            height: "10px",
            borderRadius: "50%",
            backgroundColor: "rgba(0, 255, 255, 0.7)",
            boxShadow: "0 0 6px cyan",
            pointerEvents: "none",
            zIndex: 999,
          }}
        />
      ))} */}
    </>
  );
};


export default NaviFly;
