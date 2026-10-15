'use client';

import { Layers, Database, Smartphone, Activity } from 'lucide-react';

export function CaseStudiesSection() {
  const projects = [
    {
      icon: Layers,
      category: 'DESARROLLO WEB & SEO',
      title: 'Directorio Especializado de Oferta Académica y Posgrados',
      description:
        'Desarrollo integral de una plataforma web diseñada para indexar y centralizar programas educativos de alto nivel. Arquitectura optimizada para posicionamiento en motores de búsqueda (SEO) y captura fluida de prospectos.',
      highlights: [
        'Carga ultrarrápida y filtrado instantáneo',
        'Indexación orgánica masiva en Google',
        'Embudos de captación directa para admisiones',
      ],
    },
    {
      icon: Database,
      category: 'SOFTWARE COMO SERVICIO (SAAS)',
      title: 'Plataforma SaaS B2B en Operación Comercial Activa',
      description:
        'Software como servicio operativo en el mercado local bajo modelo de licencias y cobro recurrente. Demuestra nuestra capacidad no solo de programar, sino de mantener infraestructura crítica en producción con clientes de pago diario.',
      highlights: [
        'Modelo de licenciamiento activo',
        'Alta disponibilidad y estabilidad en producción',
        'Gestión de cobros y accesos multiusuario',
      ],
    },
    {
      icon: Smartphone,
      category: 'AUTOMATIZACIÓN & AGENTES',
      title: 'Sistemas de Calificación y Atención 24/7 por WhatsApp',
      description:
        'Implementación de flujos automatizados para recepción, filtrado y atención inmediata de prospectos. Los clientes reciben respuesta en segundos y el equipo de ventas solo contacta a leads con alta intención de compra.',
      highlights: [
        'Reducción del 90% en tiempo de respuesta inicial',
        'Cero prospectos perdidos en noches o fines de semana',
        'Filtrado inteligente antes de transferir a un asesor',
      ],
    },
    {
      icon: Activity,
      category: 'CIENCIA DE DATOS & ANALÍTICA',
      title: 'Motor de Modelado Predictivo y Análisis Genealógico',
      description:
        'Desarrollo de un índice algorítmico propio que procesa volúmenes masivos de datos históricos y linajes para predecir rendimientos y distancias óptimas de competencia en equinos de carrera.',
      highlights: [
        'Modelado matemático propio con base estadística',
        'Análisis predictivo de patrones complejos',
        'Toma de decisiones fundamentada en evidencia de datos',
      ],
    },
  ];

  return (
    <section id="casos" className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        {/* Angular Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-3 rounded-none">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
          <span>INGENIERÍA EN PRODUCCIÓN</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          Ingeniería probada en el mundo real
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400">
          No mostramos maquetas conceptuales ni diseños que nunca salieron a la luz. Mostramos sistemas reales, con usuarios reales y código en producción.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((proj, idx) => {
          const Icon = proj.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-none bg-slate-950/50 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-9 h-9 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 mb-4">
                  <Icon className="w-4 h-4" />
                </div>

                <span className="text-[10px] font-mono tracking-wider text-slate-500 uppercase block mb-1">
                  {proj.category}
                </span>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                  {proj.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-5 font-normal">
                  {proj.description}
                </p>

                <div className="space-y-1.5 mb-2">
                  {proj.highlights.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-center gap-2 text-xs text-slate-300 font-mono">
                      <span className="w-1.5 h-1.5 rounded-none bg-sky-400" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
