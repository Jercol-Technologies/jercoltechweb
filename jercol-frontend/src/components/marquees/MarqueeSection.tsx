'use client';

export function MarqueeSection() {
  const clientProjects = [
    'Directorio Especializado de Posgrados',
    'SaaS B2B Comercial (Venezuela)',
    'Sistemas de Automatización WhatsApp',
    'Motor de Analítica & Data Science',
    'Tu Marca / Próximo Proyecto',
    'Plataformas Web de Alto Tráfico',
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

  return (
    <section className="w-full py-12 border-y border-white/[0.06] bg-[#07080b] overflow-hidden select-none">
      <div className="max-w-6xl mx-auto px-6 mb-8">
        {/* Marquesina A: Proyectos & Clientes (90-degree corners, rounded-none) */}
        <div className="mb-8">
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
            // PLATAFORMAS & CLIENTES EN PRODUCCIÓN
          </span>
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee flex items-center gap-10">
              {[...clientProjects, ...clientProjects].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 shrink-0 px-4 py-2 rounded-none bg-white/[0.02] border border-white/[0.07] text-xs font-mono text-slate-300 hover:border-blue-500/40 hover:text-white transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-none bg-blue-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Marquesina B: Stack Tecnológico */}
        <div>
          <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest block mb-4">
            // STACK TECNOLÓGICO & HERRAMIENTAS DE INGENIERÍA
          </span>
          <div className="relative w-full overflow-hidden mask-gradient">
            <div className="animate-marquee-slow flex items-center gap-8">
              {[...techStack, ...techStack].map((tech, idx) => (
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
