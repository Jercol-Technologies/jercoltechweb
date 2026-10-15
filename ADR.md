# ADR.md — Architectural Decision Records (Jercol Tech Web)

Este documento registra formalmente las decisiones arquitectónicas, correcciones críticas y mejoras de experiencia de usuario implementadas en el proyecto.

---

## [ADR-001] Unificación del Árbol de Contexto (`SessionProvider`)

- **Fecha:** 2026-09-27
- **Estado:** Implementado / Verificado

### Qué cambió
Se eliminó la instancia anidada redundante de `<SessionProvider>` dentro de [`src/app/page.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/app/page.tsx), dejando únicamente el proveedor raíz en [`src/app/layout.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/app/layout.tsx).

### Dónde (Archivos involucrados)
- [`src/app/page.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/app/page.tsx)
- [`src/app/layout.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/app/layout.tsx)

### Por qué se tomó la decisión
React Context aísla el estado en cada instancia de un `Provider`. Al existir dos proveedores, el componente `<MutationEngine />` (ubicado en `layout.tsx`) estaba suscrito al contexto del proveedor externo, mientras que el formulario [`BusinessProfileForm.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/components/form/BusinessProfileForm.tsx) emitía las acciones (`FORM_SUBMITTED`, `MUTATION_DISPATCHED`) hacia el proveedor interno de `page.tsx`.

### Qué afecta
- Toda la canalización de eventos de mutación, el reducer central y la sincronización de fases de la UI (`DEFAULT`, `ANALYZING`, `MUTATED`).

### Qué habría pasado si no se corregía
El motor de mutación jamás habría recibido las directivas pendientes; la interfaz nunca se habría adaptado y el estado habría quedado congelado en la fase de análisis sin mutar ni el Hero ni el CTA.

---

## [ADR-002] Flujo Cinemático Guiado y Persistencia de Animaciones Manim (Opción A)

- **Fecha:** 2026-10-01
- **Estado:** Implementado / Verificado

### Qué cambió
1. **Desplazamiento automático al Hero:** Al enviar el formulario de contexto en `BusinessProfileForm`, se ejecuta un scroll suave programático hacia la parte superior (`window.scrollTo({ top: 0, behavior: 'smooth' })`).
2. **Creación del Telemetry HUD flotante (`TelemetryHUD.tsx`):** Un componente HUD flotante y compacto posicionado en la esquina inferior derecha. Muestra el estado del runtime en vivo (`[LIVE]` con pulso y logs de streaming) mientras el usuario está en el Hero, y al estabilizarse ofrece navegación directa al CTA adaptado.
3. **Persistencia y bucle de videos Manim:**
   - En `HeroSection.tsx`: Se ampliaron las fases válidas a `allowedPhases={['ANALYZING', 'MUTATED']}` y se activó `loop={true}` para `pipeline_ingesta.mp4`.
   - En `CTAProtocol.tsx`: Se activó `loop={true}` en `consolidacion_mutacion.mp4`.
4. **Anclajes de navegación:** Se asignaron identificadores `id="hero-section"` e `id="cta-protocol"` para el desplazamiento guiado.

### Dónde (Archivos involucrados)
- [`src/components/telemetry/TelemetryHUD.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/components/telemetry/TelemetryHUD.tsx) *(Nuevo)*
- [`src/components/form/BusinessProfileForm.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/components/form/BusinessProfileForm.tsx)
- [`src/components/sections/HeroSection.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/components/sections/HeroSection.tsx)
- [`src/components/sections/CTAProtocol.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/components/sections/CTAProtocol.tsx)
- [`src/app/page.tsx`](file:///C:/Users/mapog/Documents/jercol-tech-web/jercol-frontend/src/app/page.tsx)

### Por qué se tomó la decisión
El valor diferencial de Jercol es su motor adaptativo en tiempo real. Debido a la longitud de la página y la separación espacial, el usuario que completaba el formulario abajo no presenciaba la transición del titular en el Hero, y el video de Manim se detenía antes de que el usuario volviera arriba. La Opción A unifica la narrativa visual convirtiéndola en una experiencia guiada y continua.

### Qué afecta
- Experiencia de usuario (UX), visibilidad de telemetría sin importar la posición de scroll y ciclo de vida de los elementos `<video>` orquestados por Manim y Zustand.

### Qué habría pasado si no se implementaba
El visitante se perdía el 80% de los efectos visuales del sitio, deduciendo erróneamente que la mutación no funcionaba o que la animación técnica no se ejecutaba.
