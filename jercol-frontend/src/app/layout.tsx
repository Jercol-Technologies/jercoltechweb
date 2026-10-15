import type { Metadata } from 'next';
import { GeistMono } from 'geist/font/mono';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

export const metadata: Metadata = {
  title: 'Jercol Technologies — Rentabilidad y Productividad con Software a Medida',
  description: 'Desarrollamos soluciones de software de alto impacto, automatizaciones operativas y modelos predictivos de datos.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased dark`}
    >
      <head>
        {/* Anti-FOUC script: prevents page content flash before intro splash on first visit */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                if (!sessionStorage.getItem('jercol_intro_seen') && !window.location.hash) {
                  document.documentElement.classList.add('showing-intro');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-[#08090d] text-[#ededed] overflow-x-hidden min-h-full flex flex-col font-sans selection:bg-blue-600/30 selection:text-sky-200">
        <main className="relative z-10 flex-1">{children}</main>
      </body>
    </html>
  );
}