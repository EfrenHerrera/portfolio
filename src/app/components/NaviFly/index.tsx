"use client";
import { useEffect, useRef } from 'react';
import { createNoise2D } from 'simplex-noise';
import alea from 'alea';

const NaviFly = () => {
  const naviRef = useRef<any>(null);
  const simplex = {
    noise2D: createNoise2D(alea(1000)),
  };


  useEffect(() => {
    const navi = naviRef.current;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let t = 0;
    let vx = 0;
    let vy = 0;
    let speedFactor = 2; // Factor de velocidad inicial

    const moveNavi = () => {
      const noiseX = simplex.noise2D(t, 0);
      const noiseY = simplex.noise2D(0, t);
      
      // Suaviza el movimiento en los ejes X e Y
      vx += (noiseX - vx) * 0.1;
      vy += (noiseY - vy) * 0.1;

      // Ajuste de velocidad para un movimiento más realista
      x += vx * speedFactor;
      y += vy * speedFactor;

      // Limitar a Navi dentro de la ventana y reflejar su dirección si choca con los bordes
      if (x <= 0 || x >= window.innerWidth - 50) {
        vx = -vx;
        x = Math.max(0, Math.min(x, window.innerWidth - 50));
      }
      if (y <= 0 || y >= window.innerHeight - 50) {
        vy = -vy;
        y = Math.max(0, Math.min(y, window.innerHeight - 50));
      }

      navi.style.left = `${x}px`;
      navi.style.top = `${y}px`;

      // Variabilidad en la velocidad: Ajusta el factor de velocidad entre 1 y 3
      speedFactor = 1 + Math.random() * 2;

      t += 0.01;

      // Sigue animando siempre que Navi esté dentro de la ventana
      if (x > 0 && x < window.innerWidth - 50 && y > 0 && y < window.innerHeight - 50) {
        requestAnimationFrame(moveNavi);
      } else {
        // Reiniciar posición si sale de la ventana
        x = window.innerWidth / 2;
        y = window.innerHeight / 2;
        vx = 0;
        vy = 0;
        requestAnimationFrame(moveNavi);
      }
    };

    requestAnimationFrame(moveNavi);
  }, [simplex]);


  return (
    <div
      key="navifly"
      ref={naviRef}
      style={{
        position: 'fixed',
        width: '50px',
        height: '50px',
        backgroundImage: 'url("/images/navi.gif")',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        pointerEvents: 'none',
        zIndex: 1000,
      }}
    ></div>
  );
};

export default NaviFly;
