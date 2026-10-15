'use client';

import { getWhatsAppUrl } from '@/lib/constants';
import { MessageCircle, ArrowRight, Zap, TrendingUp, Cpu, ShieldCheck } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-14 md:pt-36 md:pb-20 px-6 max-w-6xl mx-auto">
      {/* Blue Ambient Glow matching new branding */}
      <div className="absolute top-20 left-1/3 -translate-x-1/2 w-[550px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none -z-10" />

      {/* Hero Grid Container: 2-column layout (90-degree corners, sharp industrial look) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Direct Headline & Action */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          {/* 90-Degree Angular Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-4 rounded-none">
            <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
            <span>INGENIERÍA DE SOFTWARE & CIENCIA DE DATOS</span>
          </div>

          {/* Slogan */}
          <p className="text-xs font-mono text-slate-400 tracking-wider uppercase mb-3">
            Software enfocado en la rentabilidad y productividad de tu negocio
          </p>

          {/* Main Headline */}
          <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-semibold text-white tracking-tight leading-[1.2] mb-4">
            Software e Inteligencia Artificial para{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              multiplicar la rentabilidad
            </span>{' '}
            de tu negocio.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-[15px] text-slate-400 max-w-xl font-normal leading-relaxed mb-7">
            Automatizamos cuellos de botella operativos, prevenimos la fuga de clientes con modelos predictivos y desarrollamos plataformas hechas para facturar. Menos horas perdidas, cero improvisación y retorno medible.
          </p>

          {/* Button Group (90-degree corners, rounded-none) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 w-full sm:w-auto">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-xs sm:text-sm px-6 py-3.5 rounded-none transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.45)] hover:scale-[1.01] active:scale-[0.98] border border-blue-400/30"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Hablemos por WhatsApp — En 15 min</span>
            </a>

            <a
              href="#pack-72h"
              className="inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-medium text-xs sm:text-sm px-5 py-3.5 rounded-none border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <span>Pack Emprendedor en 72h</span>
              <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          <p className="mt-3 text-[11px] font-mono text-slate-400">
            Sin intermediarios técnicos · Conversación directa con el desarrollador
          </p>
        </div>

        {/* Right Column: Architectural Frame with 90-degree corners */}
        <div className="lg:col-span-5 w-full">
          <div className="relative rounded-none bg-slate-950/70 border border-white/[0.08] backdrop-blur-md p-5 shadow-2xl overflow-hidden group hover:border-blue-500/30 transition-all">
            {/* Top Bar with 3 Window Square Dots (90 degrees) */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.06]">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-none bg-slate-700" />
                <span className="w-2 h-2 rounded-none bg-slate-700" />
                <span className="w-2 h-2 rounded-none bg-slate-700" />
              </div>
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">
                Jercol · Architecture Console
              </span>
            </div>

            {/* Architecture Preview Cards (90-degree corners) */}
            <div className="space-y-3">
              <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white block">Analítica & Predicción</span>
                    <span className="text-[11px] text-slate-400 font-mono">Detección de Churn y LTV</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-sky-400">Activo</span>
              </div>

              <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white block">Automatización 24/7</span>
                    <span className="text-[11px] text-slate-400 font-mono">Flujos WhatsApp & CRM</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-sky-400">En línea</span>
              </div>

              <div className="p-3.5 rounded-none bg-white/[0.02] border border-white/[0.04] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                    <Cpu className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-white block">Sistemas a Medida</span>
                    <span className="text-[11px] text-slate-400 font-mono">Plataformas SaaS de Alta Velocidad</span>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-sky-400">Producción</span>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/[0.04] flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Status: Optimal</span>
              <span className="text-sky-400">0 ms latency</span>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics & Proof strip (90-degree corners) */}
      <div className="mt-12 w-full grid grid-cols-2 md:grid-cols-4 gap-3 pt-6 border-t border-white/[0.06]">
        <div className="flex flex-col items-center p-3 text-center rounded-none bg-white/[0.01] border border-white/[0.03]">
          <div className="flex items-center gap-1.5 text-sky-400 mb-1">
            <Zap className="w-3.5 h-3.5" />
            <span className="font-semibold text-white text-xs sm:text-sm">SaaS Propio</span>
          </div>
          <span className="text-[11px] text-slate-400">En operación y cobro recurrente</span>
        </div>

        <div className="flex flex-col items-center p-3 text-center rounded-none bg-white/[0.01] border border-white/[0.03]">
          <div className="flex items-center gap-1.5 text-sky-400 mb-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span className="font-semibold text-white text-xs sm:text-sm">Modelos de Datos</span>
          </div>
          <span className="text-[11px] text-slate-400">Algorítmica y ciencia predictiva</span>
        </div>

        <div className="flex flex-col items-center p-3 text-center rounded-none bg-white/[0.01] border border-white/[0.03]">
          <div className="flex items-center gap-1.5 text-sky-400 mb-1">
            <Cpu className="w-3.5 h-3.5" />
            <span className="font-semibold text-white text-xs sm:text-sm">IA Agéntica</span>
          </div>
          <span className="text-[11px] text-slate-400">Flujos autónomos de alta velocidad</span>
        </div>

        <div className="flex flex-col items-center p-3 text-center rounded-none bg-white/[0.01] border border-white/[0.03]">
          <div className="flex items-center gap-1.5 text-sky-400 mb-1">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span className="font-semibold text-white text-xs sm:text-sm">Entrega en Semanas</span>
          </div>
          <span className="text-[11px] text-slate-400">Sin burocracia de agencias</span>
        </div>
      </div>
    </section>
  );
}
