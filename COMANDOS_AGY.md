# COMANDOS_AGY.md — Guía Rápida de Antigravity CLI (`agy`)

Este archivo recopila los comandos esenciales del CLI de Antigravity (`agy`), sus atajos y los identificadores de sesiones de trabajo para referencia rápida.

---

## 📌 Sesión Actual de Trabajo

- **Nombre del chat:** `jercol_tech_web`
- **ID de la conversación:** `c2e19ff8-0e94-4db3-b87d-6b5188253127`
- **Ruta local de logs y estado:**  
  `C:\Users\mapog\.gemini\antigravity-cli\brain\c2e19ff8-0e94-4db3-b87d-6b5188253127`

### Comando para reanudar esta sesión exacta:
```powershell
agy --conversation c2e19ff8-0e94-4db3-b87d-6b5188253127
```

---

## 🚀 Inicio y Reanudación de Sesiones

| Comando | Descripción |
| :--- | :--- |
| `agy` | Inicia una nueva sesión interactiva en la carpeta actual. |
| `agy -c` (o `agy --continue`) | Reanuda automáticamente la **última sesión** en la que trabajaste. |
| `agy --conversation <ID>` | Reanuda una sesión específica utilizando su identificador único. |
| `agy --help` | Muestra la ayuda general y todas las banderas disponibles del CLI. |

---

## 💬 Comandos Dentro del Chat (Slash Commands)

Comandos que puedes escribir directamente en la terminal mientras estás conversando con el agente:

| Comando | Acción |
| :--- | :--- |
| `/exit` o `/quit` | Guarda y cierra la sesión actual de forma limpia (también `Ctrl + D`). |
| `/help` | Muestra la lista de comandos interactivos disponibles. |
| `/clear` | Limpia la pantalla de la terminal. |
| `/plan` | Activa el modo de diseño y planificación paso a paso antes de ejecutar código. |
| `/goal` | Activa el modo enfocado y exhaustivo para tareas largas o complejas. |
| `/browser` | Activa la navegación e inspección web. |

---

## 🛠️ Herramientas y Mantenimiento

| Comando | Descripción |
| :--- | :--- |
| `agy update` | Actualiza el CLI de Antigravity a la versión más reciente. |
| `agy changelog` | Muestra las notas de la última versión y cambios recientes. |
| `agy models` | Lista los modelos de lenguaje disponibles para usar. |
| `agy agents` | Muestra los subagentes y roles configurados. |
