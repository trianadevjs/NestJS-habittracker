# Architecture

## Introducción

Este documento describe la arquitectura general de la Habit Tracker API y sirve como punto de entrada para comprender las decisiones técnicas adoptadas durante el desarrollo del proyecto.

La aplicación está diseñada siguiendo una arquitectura modular basada en NestJS, con énfasis en la mantenibilidad, escalabilidad y separación de responsabilidades.

---

# Objetivos de arquitectura

La arquitectura del proyecto busca cumplir los siguientes objetivos:

- Facilitar el mantenimiento del código.
- Favorecer la escalabilidad mediante módulos independientes.
- Mantener una clara separación entre la lógica de negocio y la infraestructura.
- Permitir la incorporación de nuevas funcionalidades con un impacto mínimo en los módulos existentes.
- Seguir las recomendaciones y buenas prácticas del ecosistema de NestJS.

---

# Principios

Durante el desarrollo se procurará seguir los siguientes principios:

- Arquitectura modular.
- Principio de responsabilidad única (SRP).
- Inversión de dependencias.
- Separación de responsabilidades.
- Configuración centralizada.
- Convención sobre configuración.
- Código limpio y legible.

---

# Stack tecnológico

| Componente         | Tecnología |
| ------------------ | ---------- |
| Lenguaje           | TypeScript |
| Framework          | NestJS     |
| Gestor de paquetes | pnpm       |
| Base de datos      | PostgreSQL |
| ORM                | Prisma     |
| Autenticación      | JWT        |
| Documentación      | Swagger    |

---

# Arquitectura del proyecto

La aplicación estará organizada en módulos independientes siguiendo la estructura recomendada por NestJS.

Cada módulo será responsable de un único dominio funcional y encapsulará sus controladores, servicios, DTOs y entidades correspondientes.

La lógica compartida será ubicada dentro del módulo `common`, mientras que la configuración global permanecerá centralizada en `config`.

---

# Architecture Decision Records (ADR)

Las decisiones técnicas importantes se documentarán mediante ADRs (Architecture Decision Records).

Cada ADR describirá:

- Contexto.
- Problema.
- Alternativas consideradas.
- Decisión tomada.
- Consecuencias de la decisión.

---

# ADR disponibles

| ID      | Documento               | Estado    |
| ------- | ----------------------- | --------- |
| ADR-001 | Package Manager         | Pendiente |
| ADR-002 | Database Selection      | Pendiente |
| ADR-003 | ORM Selection           | Pendiente |
| ADR-004 | Authentication Strategy | Pendiente |
| ADR-005 | Project Structure       | Pendiente |
