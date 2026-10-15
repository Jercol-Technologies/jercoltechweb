'use client';

import { Compass, FastForward, DollarSign } from 'lucide-react';

export function WhyUsSection() {
  const differentiators = [
    {
      icon: Compass,
      title: '01. Visión de Negocio en Horas',
      subtitle: 'Entendemos tu operación antes de tirar código',
      description:
        'No somos programadores que trabajan a ciegas en base a un ticket técnico. Nos sentamos contigo, comprendemos tu modelo de ingresos, tus márgenes y tus cuellos de botella para diseñar exactamente la solución que genere mayor impacto financiero.',
    },
    {
      icon: FastForward,
      title: '02. Ejecución Agéntica Ultrarrápida',
      subtitle: 'Entregas en semanas, no en semestres',
      description:
        'Dominamos las herramientas más avanzadas de desarrollo asistido por agentes de IA (Google Antigravity, Claude Code). Lo que a una agencia tradicional de 10 personas le toma 3 meses de burocracia, nosotros lo iteramos y ponemos en producción en días con un estándar técnico superior.',
    },
    {
      icon: DollarSign,
      title: '03. Código Orientado a Rentabilidad',
      subtitle: 'El software debe generar más de lo que cuesta',
      description:
        'Un sistema bonito que nadie usa o que no convierte es un gasto inútil. Integramos copywriting, arquitectura SEO, interfaces limpias y analítica de datos para asegurar que cada dólar invertido con nosotros tenga un retorno medible.',
    },
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto border-t border-white/[0.06]">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-14">
        {/* Angular Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.03] border border-white/[0.08] text-sky-400 font-mono text-[11px] uppercase tracking-wider mb-3 rounded-none">
          <span className="w-1.5 h-1.5 bg-sky-400 rounded-none" />
          <span>DIFERENCIAL DE INGENIERÍA</span>
        </div>
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-white tracking-tight">
          El único software que vale la pena es el que genera más de lo que cuesta
        </h2>
        <p className="mt-3 text-xs sm:text-sm text-slate-400">
          ¿Por qué trabajar con Jercol Technologies en lugar de una agencia de desarrollo tradicional?
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {differentiators.map((diff, idx) => {
          const Icon = diff.icon;
          return (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-none bg-slate-950/50 border border-white/[0.07] flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-sky-400 mb-5">
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {diff.title}
                </h3>

                <p className="text-[10px] font-mono text-sky-400 uppercase tracking-wider mb-3">
                  {diff.subtitle}
                </p>

                <p className="text-xs sm:text-[13px] text-slate-400 leading-relaxed font-normal">
                  {diff.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
