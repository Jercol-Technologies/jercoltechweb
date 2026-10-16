'use client';

import Image from 'next/image';

interface ClientLogo {
  name: string;
  src: string;
  width: number;
  height: number;
}

export function MarqueeSection() {
  const clientLogos: ClientLogo[] = [
    {
      name: 'Construcciones y Soluciones del Sinú',
      src: '/logos/construcciones-sinu-marquesina-fondo-oscuro.png',
      width: 892,
      height: 144,
    },
    {
      name: 'Genial Smile Care',
      src: '/logos/genial-smile-care-fondo-oscuro.png',
      width: 547,
      height: 216,
    },
    {
      name: 'Remates Catire Bello',
      src: '/logos/logo_remate_CB.png',
      width: 504,
      height: 495,
    },
    {
      name: 'Súper Rifas Diarias',
      src: '/logos/super-rifas-diarias-marquesina-fondo-oscuro.png',
      width: 707,
      height: 144,
    },
    {
      name: 'La Comunidad Tesista de Latinoamérica',
      src: '/logos/la_comunidad_tesista_de_latinoamerica.png',
      width: 2126,
      height: 1716,
    },
    {
      name: 'Gaispro Index',
      src: '/logos/gaispro-index-marquesina-fondo-oscuro.png',
      width: 777,
      height: 144,
    },
    {
      name: 'Base Hípica',
      src: '/logos/base-hipica-marquesina-fondo-oscuro.png',
      width: 650,
      height: 144,
    },
  ];

  const techStack = [
    'Next.js 16',
    'Python 3',
    'Google Antigravity',
    'Claude Code',
    'FastAPI',
    'PostgreSQL',
    'Docker',
    'TypeScript',
    'Tailwind CSS',
    'Vercel',
    'Data Science & ML',
  ];

  const repeatedLogos = [...clientLogos, ...clientLogos, ...clientLogos, ...clientLogos];
  const repeatedTech = [...techStack, ...techStack, ...techStack, ...techStack];

  return (
    <section className="w-full py-12 border-y border-white/[0.06] bg-[#07080b] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        {/* Marquesina A: Proyectos & Clientes (90-degree corners, rounded-none) */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block">
              // CLIENTES &amp; PLATAFORMAS EN PRODUCCIÓN
            </span>
            <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider hidden sm:block">
              DESPLIEGUES REALES
            </span>
          </div>
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee flex items-center gap-5">
              {repeatedLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-center shrink-0 px-6 py-3 rounded-none bg-white/[0.02] border border-white/[0.07] hover:border-blue-500/40 hover:bg-white/[0.04] transition-all duration-300 h-16 group min-w-[130px]"
                  title={client.name}
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={client.width}
                    height={client.height}
                    className="max-h-9 w-auto object-contain opacity-75 group-hover:opacity-100 transition-opacity filter group-hover:brightness-110"
                    priority={idx < 7}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquesina B: Stack Tecnológico */}
        <div>
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
            // STACK TECNOLÓGICO &amp; HERRAMIENTAS DE INGENIERÍA
          </span>
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee-slow flex items-center gap-8">
              {repeatedTech.map((tech, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 shrink-0 text-xs font-mono text-slate-400 hover:text-sky-400 transition-colors"
                >
                  <span className="text-slate-600">/</span>
                  <span>{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

