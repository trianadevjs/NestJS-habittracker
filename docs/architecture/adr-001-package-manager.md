# ADR-001 - Package Manager Selection

**Estado:** Accepted

**Fecha:** 2026-08-06

---

# Contexto

El proyecto Habit Tracker API requiere definir un gestor de paquetes para administrar las dependencias del ecosistema Node.js.

La elección del gestor de paquetes afecta directamente la experiencia de desarrollo, la velocidad de instalación, la gestión de dependencias y la consistencia entre diferentes ambientes.

El proyecto será desarrollado utilizando NestJS y TypeScript, por lo que se requiere una solución estable, ampliamente adoptada y adecuada para proyectos backend modernos.

---

# Problema

Se necesita seleccionar un gestor de paquetes que permita:

- Instalar y administrar dependencias de forma eficiente.
- Garantizar instalaciones reproducibles mediante un archivo lock.
- Reducir tiempos de instalación.
- Optimizar el uso de espacio en disco.
- Facilitar el trabajo colaborativo.

---

# Alternativas consideradas

## npm

Gestor de paquetes oficial del ecosistema Node.js.

### Ventajas

- Incluido con Node.js.
- Amplia adopción.
- Gran compatibilidad con herramientas del ecosistema.

### Desventajas

- Mayor consumo de espacio debido al manejo tradicional de `node_modules`.
- Instalaciones menos eficientes en proyectos con muchas dependencias.
- Menor optimización para múltiples proyectos locales.

---

## Yarn

Gestor de paquetes desarrollado originalmente por Facebook.

### Ventajas

- Buen rendimiento.
- Soporte para workspaces.
- Amplia adopción histórica.

### Desventajas

- Existen diferentes versiones con comportamientos distintos.
- Menor adopción actual frente a otras alternativas modernas.

---

## pnpm

Gestor de paquetes que utiliza un almacén global de dependencias y enlaces simbólicos para optimizar instalaciones.

### Ventajas

- Instalaciones más rápidas.
- Menor consumo de espacio en disco.
- Manejo estricto de dependencias.
- Lockfile eficiente y reproducible.
- Buen soporte para monorepos.
- Mayor control sobre scripts de instalación de dependencias.

### Desventajas

- Puede presentar diferencias de comportamiento respecto a npm.
- Requiere que el equipo conozca algunas particularidades del ecosistema pnpm.

---

# Decisión

Se selecciona **pnpm** como gestor oficial de paquetes del proyecto.

---

# Justificación

pnpm fue seleccionado debido a:

- Su eficiencia en la instalación de dependencias.
- Su menor consumo de almacenamiento.
- Su enfoque estricto en la resolución de dependencias.
- Su compatibilidad con proyectos modernos basados en TypeScript y NestJS.
- Sus mecanismos adicionales de seguridad para controlar scripts de instalación.

El proyecto utilizará:

- `pnpm-lock.yaml` como archivo de bloqueo de dependencias.
- pnpm como único gestor de paquetes autorizado.

---

# Consecuencias

## Ventajas

- Instalaciones más rápidas y consistentes.
- Menor tamaño del proyecto local.
- Mayor control sobre dependencias indirectas.
- Mejor experiencia en ambientes de desarrollo.

## Desventajas

- Los nuevos colaboradores deberán instalar pnpm.
- Algunas herramientas pueden requerir configuración adicional.

## Impacto

Todos los comandos relacionados con dependencias deberán ejecutarse utilizando pnpm.

Ejemplos:

Instalar dependencias:

```bash
pnpm install
```

Agregar una dependencia:

```bash
pnpm add <package>
```

Agregar una dependencia de desarrollo:

```bash
pnpm add -D <package>
```

Ejecutar scripts:

```bash
pnpm <script>
```

---

# Referencias relacionadas

- Historia del proyecto:

  - Cycle 1 - Foundation
  - Historia 1 - Inicializar el proyecto

- Próximas decisiones:

  - ADR-002 - Database Selection
  - ADR-003 - ORM Selection
