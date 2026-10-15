# MEJORAS.md — Jercol Tech Web

Este archivo gestiona las tareas pendientes, optimizaciones y mejoras técnicas y de experiencia de usuario (UX) para el proyecto.

> **Flujo de trabajo:**  
> Cuando una mejora sea completada y verificada, saldrá de este archivo y se documentará formalmente en [`ADR.md`](./ADR.md) (Architectural Decision Records), detallando:
> - **Qué cambió**
> - **Dónde (archivos y módulos involucrados)**
> - **Por qué se tomó esa decisión**
> - **Qué componentes afecta**
> - **Impacto de no haberlo implementado/parcheado**

---

## 📌 En Progreso / Siguiente Prioridad

### 1. Integración con Modelo de IA Real (Backend API)
- **Estado:** Siguiente prioridad.
- **Detalle:**
  - Crear endpoint funcional en `src/app/api/analyze/route.ts` consumiendo modelo de IA (Google Gemini u otro) mediante Structured Outputs (JSON Schema).
  - Generar dinámicamente `MutationDirective[]` personalizadas según el sector y dolor del negocio.
  - Generar logs técnicos contextuales reales para la telemetría.
  - Reemplazar `simulateBackendResponse()` en `BusinessProfileForm.tsx` por la llamada real al endpoint con control de fallos (`FALLBACK_TRIGGERED`).
  - Configurar `.env.local` con las credenciales de API.

---

## 📋 Backlog de Mejoras

### 2. Timestamp Dinámico en Telemetría
- **Estado:** Pendiente.
- **Detalle:**
  - Los logs actuales registran la misma marca temporal (`[HH:MM:SS]`) porque usan la hora de inicio de la simulación. Deben reflejar la hora secuencial exacta en la que cada log se vuelve visible en pantalla.

### 3. Componentes y Módulos Pendientes
- Implementar `PredictiveDashboard.tsx` (actualmente vacío).
- Limpieza de stubs sin usar (`src/components/mutation/MutationZone.tsx` vacío, `scheduler.ts`, etc.).

---

## ✅ Implementadas y Documentadas en ADR.md

- **[ADR-001] Unificación del Árbol de Contexto (`SessionProvider`)**: Eliminación del proveedor duplicado en `page.tsx`.
- **[ADR-002] Flujo Cinemático Guiado y Persistencia de Animaciones Manim (Opción A)**: Auto-scroll suave hacia el Hero, creación de `TelemetryHUD.tsx`, persistencia y loop de videos en `HeroSection` y `CTAProtocol`, y anclajes de navegación.
