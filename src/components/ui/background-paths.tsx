"use client";

import { motion } from "motion/react";
import clsx from "clsx";

/* Paleta emerald do Tailwind ------------------------------------------------ */
const emeralds = [
  "#a7f3d0", // emerald-200
  "#6ee7b7", // emerald-300
  "#34d399", // emerald-400
  "#10b981", // emerald-500
  "#059669", // emerald-600
  "#047857", // emerald-700
  "#065f46", // emerald-800
  "#064e3b", // emerald-900 (um pouco mais escuro p/ contraste)
];

/* 1 ▪ Desenha um leque de trilhas animadas (para cima ou para baixo) -------- */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    /* escolhe cor ciclicamente na paleta */
    color: emeralds[i % emeralds.length],
    width: 0.5 + i * 0.03,
    opacity: 0.2 + i * 0.02, // leve variação de transparência
  }));

  return (
    <div className="absolute inset-0 pointer-events-none">
      <svg
        className="w-full h-full"
        viewBox="-800 -800 1600 1600"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
        aria-hidden="true"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            /* agora cada trilha usa sua própria cor emerald */
            stroke={path.color}
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.3, opacity: path.opacity }}
            animate={{
              pathLength: 1,
              opacity: [path.opacity * 0.6, path.opacity, path.opacity * 0.6],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: 20 + Math.random() * 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* 2 ▪ Componente exportado: overlay absoluto (tapete animado) --------------- */
export function BackgroundPaths({ className = "" }: { className?: string }) {
  return (
    <div
      className={clsx(
        "absolute inset-0 w-full h-full overflow-hidden pointer-events-none",
        className,
      )}
    >
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
    </div>
  );
}
