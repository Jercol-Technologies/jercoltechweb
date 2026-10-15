'use client';

import Image from 'next/image';
import { getWhatsAppUrl, CONTACT_CONFIG } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-[#08090d]/85 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Brand with Two Slashes (Bars) Isotype */}
        <a href="#" className="flex items-center gap-3.5 group">
          <div className="relative w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center shrink-0">
            <Image
              src="/imagenes/nuevo_isotipo_solobarras_transparente.png"
              alt="Jercol Technologies"
              width={44}
              height={44}
              className="w-full h-full object-contain drop-shadow-[0_0_12px_rgba(0,102,255,0.45)]"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight text-sm sm:text-base leading-tight">
              Jercol Technologies
            </span>
            <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase">
              Rentabilidad y Productividad
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 text-xs font-medium text-slate-400">
          <a href="#analitica" className="hover:text-white transition-colors">
            Analítica de Negocio
          </a>
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#pack-72h" className="hover:text-white transition-colors">
            Pack 72h
          </a>
          <a href="#casos" className="hover:text-white transition-colors">
            Casos de Éxito
          </a>
        </nav>

        {/* Right Actions: GitHub + Status + WhatsApp Button (90-degree corners) */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href={CONTACT_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub de Jercol Technologies"
            className="p-2 text-slate-400 hover:text-white border border-white/[0.08] hover:border-blue-500/40 bg-white/[0.02] hover:bg-white/[0.05] transition-all rounded-none"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span className="w-1.5 h-1.5 bg-blue-500 animate-pulse rounded-none" />
            Disponible
          </span>

          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#0066ff] hover:bg-[#0052cc] text-white font-medium text-xs sm:text-sm px-4 py-2 sm:py-2.5 rounded-none transition-all duration-200 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_25px_rgba(0,102,255,0.45)] active:scale-95 border border-blue-400/30"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white" />
            <span>Hablemos por WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
