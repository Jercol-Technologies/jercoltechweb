'use client';

import { Globe, Bot, BarChart3, Check } from 'lucide-react';

export function ServicesSection() {
  const services = [
    {
      icon: Globe,
      number: '01',
      title: 'Desarrollo Web & SaaS a Medida',
      description:
        'Creamos portales, directorios y plataformas web ultrarrápidas con Next.js. Arquitectura moderna diseñada para posicionar orgánicamente en Google (SEO) y convertir visitantes en clientes que pagan.',
      deliverables: [
        'Arquitectura de carga instantánea en móviles',
        'SEO técnico y estructura para captación orgánica',
        'Paneles privados y software como servicio (SaaS)',
        'Integración con pasarelas de pago y bases de datos',
      ],
    },
    {
      icon: Bot,
      number: '02',
      title: 'IA Agéntica & Automatización Operativa',
      description:
        'Elimina el trabajo manual repetitivo. Desarrollamos agentes de IA y flujos inteligentes que atienden prospectos en WhatsApp, sincronizan tus sistemas y ejecutan tareas 24/7 sin errores ni demoras.',
      deliverables: [
        'Automatización y calificación de leads por WhatsApp',
        'Agentes autónomos para procesamiento de datos',
        'Sincronización continua entre CRMs y sistemas internos',
        'Cero prospectos desatendidos fuera de horario comercial',
      ],
    },
    {
      icon: BarChart3,
      number: '03',
      title: 'Modelos Predictivos & Ciencia de Datos',
      description:
        'Convierte tus registros históricos en ventajas competitivas medibles. Diseñamos algoritmos a medida para anticipar el comportamiento de tus clientes, optimizar precios y proteger tus márgenes.',
      deliverables: [
        'Modelos de predicción de abandono de clientes (Churn)',
        'Scoring de prospectos de alto valor de vida (LTV)',
        'Análisis predictivo de tendencias y demanda',
        'Dashboards analíticos orientados a toma de decisiones',
      ],
    },
  ];

  return (
    <section id="servicios" className="scroll-mt-24 py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        {/* Angular Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-3 rounded-none">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
          <span>SERVICIOS DE ALTO IMPACTO</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          Tres motores para hacer crecer tu empresa
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400">
          No vendemos código suelto ni plantillas prediseñadas. Implementamos sistemas de ingeniería enfocados en generar nuevos ingresos y reducir costos operativos.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-none bg-slate-950/50 border border-white/[0.07] hover:border-blue-500/30 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-10 h-10 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-base font-bold text-slate-600">
                    {srv.number}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-2.5">
                  {srv.title}
                </h3>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-5 font-normal">
                  {srv.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {srv.deliverables.map((item, dIdx) => (
                    <li key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
