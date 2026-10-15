'use client';

import { getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, Check } from 'lucide-react';

export function FinalCTASection() {
  const perks = [
    'Respuesta directa en menos de 15 minutos',
    'Diagnóstico inicial sin compromiso ni costo alguno',
    'Atención directa con el desarrollador principal',
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="relative rounded-none bg-slate-950/70 border border-white/[0.08] p-7 sm:p-12 text-center overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
          {/* Angular Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-4 rounded-none">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
            <span>DIAGNÓSTICO TÉCNICO INMEDIATO</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
            ¿Cuánto dinero te está costando no tener tus procesos automatizados?
          </h2>

          <p className="mt-4 text-xs sm:text-sm text-slate-300 max-w-lg font-normal leading-relaxed">
            Conversemos por WhatsApp. Cuéntame el cuello de botella o la idea de software de tu negocio y te daré un diagnóstico técnico y de viabilidad financiera sin costo alguno.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-xs sm:text-sm px-7 py-3.5 rounded-none transition-all duration-200 shadow-[0_0_25px_rgba(0,102,255,0.3)] hover:shadow-[0_0_35px_rgba(0,102,255,0.45)] hover:scale-[1.01] active:scale-[0.98] border border-blue-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Iniciar conversación directa en WhatsApp</span>
            </a>
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-center gap-5 text-[11px] text-slate-400 font-mono">
            {perks.map((perk, idx) => (
              <span key={idx} className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-sky-400" />
                <span>{perk}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
