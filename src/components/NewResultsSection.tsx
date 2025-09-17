// NewResultsSection.tsx
import React, { useEffect, useRef, useState } from "react";
import { TrendingDown, Clock, DollarSign } from "lucide-react";

/* -------------------- CountUp (sin librerías, tipado TS) -------------------- */
function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

type CountUpOpts = {
  duration?: number; // ms
  decimals?: number; // nº de decimales
  startOnView?: boolean; // empieza al entrar en viewport
};

function useCountUp(
  end: number,
  { duration = 1200, decimals = 0, startOnView = true }: CountUpOpts = {}
) {
  const [value, setValue] = useState<number>(0);
  const [hasPlayed, setHasPlayed] = useState<boolean>(false);

  const ref = useRef<HTMLSpanElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);

  const start = () => {
    if (hasPlayed) return;

    // Respeta reduced motion
    if (
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches
    ) {
      setValue(end);
      setHasPlayed(true);
      return;
    }

    setHasPlayed(true);
    startTimeRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const t = Math.min(1, elapsed / duration);
      const eased = easeOutCubic(t);
      const current = end * eased;

      setValue(Number(current.toFixed(decimals)));

      if (t < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  // Inicia cuando entra en viewport
  useEffect(() => {
    if (!startOnView) {
      start();
      return;
    }
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && start());
      },
      { rootMargin: "0px 0px -20% 0px", threshold: 0.2 }
    );

    io.observe(el);
    return () => {
      io.disconnect();
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [end, duration, decimals, startOnView]);

  // Limpieza en unmount por si acaso
  useEffect(() => {
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return { value, ref };
}

type CountUpProps = {
  end: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

const CountUp: React.FC<CountUpProps> = ({
  end,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1200,
  className = "",
}) => {
  const { value, ref } = useCountUp(end, { duration, decimals });
  return (
    <span
      ref={ref}
      className={className}
      aria-label={`${prefix}${end}${suffix}`}
    >
      {prefix}
      {value}
      {suffix}
    </span>
  );
};
/* ------------------ /CountUp ------------------ */

const NewResultsSection: React.FC = () => {
  const results: Array<{
    end: number;
    prefix?: string;
    suffix?: string;
    title: string;
    subtitle: string;
    gradient: string;
  }> = [
    {
      end: 98,
      suffix: "%",
      title: "De alertas gestionadas",
      subtitle: "dentro del SLA del SOC 24×7.",
      gradient: "from-blue-900 to-black",
    },
    {
      end: 22,
      suffix: "%",
      title: "Ahorro medio en costes IT",
      subtitle: "gracias a la automatización IA/RPA",
      gradient: "from-blue-950 to-blue-800",
    },
    {
      end: 10,
      prefix: "+",
      title: "Sectores regulados",
      subtitle: "auditados con éxito.",
      gradient: "from-blue-500 to-blue-950",
    },
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Resultados que
              <br />
              hablan por nosotros
            </h2>
            <p className="text-xl text-gray-600 italic">
              "Reducimos un 30 % los incidentes críticos en menos de seis meses
              y pasamos todas las auditorías NIS2 sin sanciones."
            </p>
          </div>

          <div className="space-y-6">
            {results.map((r, i) => (
              <div
                key={i}
                className={`bg-gradient-to-r ${r.gradient} p-8 rounded-2xl text-white relative group`}
              >
                <div className="flex items-start gap-6">
                  <div className="text-6xl font-bold opacity-80 min-w-[5ch]">
                    <CountUp end={r.end} prefix={r.prefix} suffix={r.suffix} />
                  </div>
                  <div className="flex-1">
                    <p className="text-lg leading-relaxed">{r.title}</p>
                    <p className="text-lG text-gray-200">{r.subtitle}</p>
                  </div>
                  <div className="text-white opacity-60">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M7 17L17 7M17 7H7M17 7V17"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewResultsSection;
