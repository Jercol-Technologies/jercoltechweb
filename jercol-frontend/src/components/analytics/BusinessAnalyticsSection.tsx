'use client';

import { ShieldAlert, TrendingUp, Zap, Clock, ArrowRight, Activity, Users } from 'lucide-react';

export function BusinessAnalyticsSection() {
  return (
    <section id="analitica" className="scroll-mt-24 py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        {/* Angular Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-3 rounded-none">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
          <span>INTELIGENCIA DE NEGOCIO & DATA SCIENCE</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          ¿Qué te están diciendo los números de tu negocio hoy?
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
          La mayoría de las empresas operan por intuición o corazonadas. Nosotros transformamos tus datos históricos en modelos predictivos que protegen tu facturación y automatizan decisiones críticas.
        </p>
      </div>

      {/* Supabase-style Asymmetric Bento Grid (90-degree corners, rounded-none) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Bento Item 1: Churn Prediction (Col span 7) */}
        <div className="lg:col-span-7 rounded-none bg-slate-950/60 border border-white/[0.08] hover:border-blue-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                // PREDICCIÓN DE CHURN & RETENCIÓN
              </span>
              <div className="w-8 h-8 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                <ShieldAlert className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
              ¿Tus clientes dejan de comprar a los 3 meses y no sabes por qué?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-6 font-normal">
              Diseñamos modelos predictivos que analizan el comportamiento histórico de tus clientes para alertarte semanas antes de que abandonen. Te da la ventana exacta para intervenir y proteger tu facturación mensual.
            </p>
          </div>

          {/* Micro-Widget: Churn Alert Simulation Console */}
          <div className="rounded-none bg-black/60 border border-white/[0.06] p-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5 mb-3 text-[11px] text-slate-400">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-none bg-amber-400 animate-pulse" />
                <span>ALERTA DE RIESGO DETECTADA</span>
              </span>
              <span className="text-slate-500">ID: #CLI-402</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-[11px]">
                <span className="text-slate-400">Probabilidad de abandono:</span>
                <span className="text-amber-400 font-bold">84% (Nivel Crítico)</span>
              </div>
              <div className="w-full bg-white/[0.05] h-1.5 rounded-none overflow-hidden">
                <div className="bg-amber-400 h-full w-[84%] rounded-none" />
              </div>
              <div className="pt-2 text-[11px] text-slate-400 flex items-start gap-1.5">
                <ArrowRight className="w-3.5 h-3.5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-200">Ventana de intervención:</strong> Detección 14 días antes del abandono proyectado. Acción automática activada.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Item 2: LTV Scoring Breakdown (Col span 5) */}
        <div className="lg:col-span-5 rounded-none bg-slate-950/60 border border-white/[0.08] hover:border-blue-500/30 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 group">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                // SCORING PREDICTIVO (LTV)
              </span>
              <div className="w-8 h-8 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400">
                <TrendingUp className="w-4 h-4" />
              </div>
            </div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
              ¿Quiénes son tus cuentas más rentables?
            </h3>
            <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed mb-6 font-normal">
              No todos los clientes aportan la misma rentabilidad. Identificamos con precisión matemática dónde está el mayor retorno para que tu equipo comercial enfoque su tiempo únicamente allí.
            </p>
          </div>

          {/* Micro-Widget: Customer Scoring Table */}
          <div className="rounded-none bg-black/60 border border-white/[0.06] p-4 font-mono text-xs space-y-2">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider pb-1 border-b border-white/[0.06] flex justify-between">
              <span>Segmento</span>
              <span>Retorno Estimado</span>
            </div>

            <div className="flex items-center justify-between py-1 text-[11px]">
              <span className="text-sky-400 font-medium">Tier A (Top 12%)</span>
              <span className="text-slate-200">78% margen concentrado</span>
            </div>
            <div className="flex items-center justify-between py-1 text-[11px] border-t border-white/[0.04]">
              <span className="text-slate-300">Tier B (45%)</span>
              <span className="text-slate-400">Recurrencia estable</span>
            </div>
            <div className="flex items-center justify-between py-1 text-[11px] border-t border-white/[0.04]">
              <span className="text-slate-500">Tier C (43%)</span>
              <span className="text-slate-500">Alto consumo operativo</span>
            </div>
          </div>
        </div>

        {/* Bento Item 3: Operational Efficiency & AI Automation (Col span 12) */}
        <div className="lg:col-span-12 rounded-none bg-slate-950/60 border border-white/[0.08] hover:border-blue-500/30 p-6 sm:p-7 transition-all duration-300 group">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Description */}
            <div className="lg:col-span-6">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                  // EFICIENCIA OPERATIVA & AUTOMATIZACIÓN
                </span>
              </div>

              <h3 className="text-base sm:text-lg font-semibold text-white mb-2 leading-snug">
                ¿Cuánto dinero estás perdiendo en tareas manuales repetitivas?
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                Calculamos las horas hombre que se esfuman en responder mensajes repetitivos, copiar datos entre sistemas o armar reportes manuales. Las reemplazamos por flujos y agentes de IA que operan 24/7 sin fallos ni cansancio.
              </p>
            </div>

            {/* Micro-Widget: Comparative Telemetry Bar (90-degree corners) */}
            <div className="lg:col-span-6 bg-black/60 rounded-none p-5 border border-white/[0.06] font-mono text-xs">
              <div className="space-y-3.5">
                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1.5">
                    <span>Proceso Manual Humano (Cargas, reportes, mensajes)</span>
                    <span className="text-rose-400 font-bold">4.5 hrs / día</span>
                  </div>
                  <div className="w-full bg-white/[0.05] h-2 rounded-none overflow-hidden">
                    <div className="bg-rose-500/60 h-full w-[85%] rounded-none" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-[11px] text-slate-400 mb-1.5">
                    <span className="text-sky-300">Flujo con Agente IA Jercol</span>
                    <span className="text-sky-400 font-bold">18 segundos</span>
                  </div>
                  <div className="w-full bg-white/[0.05] h-2 rounded-none overflow-hidden">
                    <div className="bg-sky-400 h-full w-[6%] rounded-none" />
                  </div>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Impacto financiero directo:</span>
                  <span className="text-sky-400 font-bold">+82% de tiempo comercial liberado</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
