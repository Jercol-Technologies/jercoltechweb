'use client';

import { getWhatsAppUrl, CONTACT_CONFIG } from '@/lib/constants';
import { MessageCircle, CheckCircle2, ShieldCheck } from 'lucide-react';

export function QuickPackSection() {
  const steps = [
    {
      day: 'Día 1',
      title: 'Estructura & Copywriting',
      desc: 'Diseño de la página y redacción persuasiva enfocada en convencer a tus prospectos.',
    },
    {
      day: 'Día 2',
      title: 'Captación a WhatsApp',
      desc: 'Configuración nativa de WhatsApp Business y enlaces directos con mensajes pre-calificados.',
    },
    {
      day: 'Día 3',
      title: 'Publicación & Entrega',
      desc: 'Pruebas de velocidad de carga, conexión de dominio y entrega lista para recibir tráfico.',
    },
  ];

  const features = [
    'Landing Page moderna adaptada a celulares y computadoras con carga ultrarrápida (<1s)',
    'Estructura de copywriting orientada a convertir tráfico de Facebook, Instagram o Google',
    'Integración directa a WhatsApp con mensajes pre-calificados según tu producto o servicio',
    'Configuración óptima de WhatsApp Business (catálogo, respuestas rápidas y saludo nativo)',
    '100% seguro: Cero riesgo de bloqueos de Meta y sin costos ocultos de APIs mensuales',
    'Entrega garantizada en un plazo estricto de 72 horas hábiles',
  ];

  return (
    <section id="pack-72h" className="scroll-mt-24 py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="relative rounded-none bg-gradient-to-b from-slate-950 via-slate-900/70 to-slate-950 border border-blue-500/25 p-7 sm:p-10 overflow-hidden shadow-2xl">
        {/* Glow accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Header inside banner with Angular Badge */}
        <div className="max-w-3xl mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-3 rounded-none">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
            <span>SOLUCIÓN RÁPIDA PARA EMPRENDEDORES & NEGOCIOS</span>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight leading-tight">
            Landing Page de Ventas + Sistema de Captación Directo a WhatsApp en 72 Horas
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
            ¿Tienes un negocio, estás lanzando un servicio o necesitas empezar a recibir clientes sin pagar miles de dólares en desarrollo complejo?
          </p>
          <p className="mt-1.5 text-xs sm:text-[13px] text-slate-400 leading-relaxed">
            Diseñamos una página de venta veloz, profesional y enrutamos a cada visitante directo a tu WhatsApp con mensajes listos para cerrar ventas desde el primer día.
          </p>
        </div>

        {/* 3-Day Roadmap Timeline (90-degree corners) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {steps.map((st, idx) => (
            <div
              key={idx}
              className="p-4 rounded-none bg-black/40 border border-white/[0.06] flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono text-sky-400 font-bold block mb-1">
                  {st.day}
                </span>
                <h4 className="text-xs sm:text-sm font-semibold text-white mb-1">
                  {st.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {st.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Features & Call to Action (90-degree corners) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-black/60 rounded-none p-6 sm:p-7 border border-white/[0.08]">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3">
              Todo lo que incluye el paquete de 72 horas:
            </span>
            <ul className="space-y-2.5">
              {features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-center items-center text-center p-4 border-t lg:border-t-0 lg:border-l border-white/[0.08]">
            <span className="text-xs font-mono text-slate-400 mb-1">
              Inversión accesible para empezar
            </span>
            <span className="text-sm font-medium text-white mb-4">
              Lanza tu presencia comercial esta misma semana
            </span>

            <a
              href={getWhatsAppUrl(CONTACT_CONFIG.packMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-xs sm:text-sm py-3.5 px-6 rounded-none transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.35)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] active:scale-[0.98] border border-blue-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Consultar Pack 72h por WhatsApp</span>
            </a>

            <div className="mt-3 flex items-center gap-1.5 text-[11px] font-mono text-slate-500">
              <ShieldCheck className="w-3.5 h-3.5 text-sky-400" />
              <span>Sin contratos forzosos · Entrega puntual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
