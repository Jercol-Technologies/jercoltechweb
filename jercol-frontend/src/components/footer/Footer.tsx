'use client';

import Image from 'next/image';
import { getWhatsAppUrl, CONTACT_CONFIG } from '@/lib/constants';
import { MessageCircle } from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';

export function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#07080b] py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <div className="relative w-8 h-8 flex items-center justify-center shrink-0">
            <Image
              src="/imagenes/nuevo_isotipo_solobarras_transparente.png"
              alt="Jercol Technologies"
              width={36}
              height={36}
              className="w-full h-full object-contain drop-shadow-[0_0_8px_rgba(0,102,255,0.3)]"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-white tracking-tight text-sm">
              Jercol Technologies
            </span>
            <p className="text-[11px] text-slate-400 font-mono">
              Rentabilidad y Productividad con Software a Medida
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-xs text-slate-400 font-mono">
          <a href="#servicios" className="hover:text-white transition-colors">
            Servicios
          </a>
          <a href="#analitica" className="hover:text-white transition-colors">
            Analítica
          </a>
          <a href="#pack-72h" className="hover:text-white transition-colors">
            Pack 72h
          </a>
          <a href="#casos" className="hover:text-white transition-colors">
            Casos de Éxito
          </a>
          <a
            href={CONTACT_CONFIG.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>GitHub</span>
          </a>
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-6 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 font-mono gap-3">
        <span>© {new Date().getFullYear()} Jercol Technologies. Todos los derechos reservados.</span>
        <span>Desarrollo de Software & Modelos de Datos</span>
      </div>
    </footer>
  );
}
