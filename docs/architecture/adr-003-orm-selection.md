# ADR-003 - ORM Selection

**Estado:** Accepted

**Fecha:** 2026-08-06

---

# Contexto

Habit Tracker API requiere una capa de acceso a datos que permita interactuar con PostgreSQL desde la aplicación NestJS.

El proyecto necesita una solución que facilite:

- Definición del modelo de datos.
- Creación y ejecución de migraciones.
- Consultas a la base de datos.
- Integración con TypeScript.
- Mantenimiento del código durante la evolución del sistema.

La aplicación será desarrollada utilizando TypeScript, por lo que la solución seleccionada debe aprovechar las ventajas del tipado estático.

---

# Problema

Se necesita seleccionar un ORM o herramienta de acceso a datos que permita:

- Trabajar eficientemente con PostgreSQL.
- Mantener sincronizado el modelo de aplicación con la base de datos.
- Reducir errores mediante validación en tiempo de compilación.
- Facilitar el desarrollo dentro del ecosistema NestJS.
- Mantener una estructura clara y mantenible.

---

# Alternativas consideradas

## Prisma

ORM moderno basado en un esquema declarativo y un cliente generado automáticamente.

### Ventajas

- Excelente integración con TypeScript.
- Tipado fuerte generado automáticamente.
- Autocompletado preciso durante el desarrollo.
- Migraciones integradas.
- Modelo de datos centralizado mediante `schema.prisma`.
- Consultas simples y expresivas.
- Buena experiencia de desarrollo.
- Amplia adopción en proyectos backend modernos.

### Desventajas

- Requiere aprender una nueva forma de modelar datos.
- Algunas consultas complejas pueden requerir utilizar SQL directamente.
- Agrega una capa adicional mediante el cliente generado.

---

## TypeORM

ORM tradicional ampliamente utilizado dentro del ecosistema NestJS.

### Ventajas

- Integración oficial y conocida con NestJS.
- Uso basado en decoradores y clases TypeScript.
- Amplia documentación.
- Soporte para múltiples bases de datos.

### Desventajas

- Mayor dependencia de decoradores.
- Algunas configuraciones pueden resultar complejas.
- Menor seguridad de tipos comparado con Prisma.
- Algunas decisiones de diseño pueden ocultar comportamiento SQL.

---

## Sequelize

ORM maduro y ampliamente utilizado en aplicaciones Node.js.

### Ventajas

- Amplio historial de uso.
- Soporte para múltiples motores SQL.
- Comunidad establecida.

### Desventajas

- Menor integración con TypeScript moderno.
- Experiencia de desarrollo inferior frente a alternativas actuales.
- Menor enfoque en tipado fuerte.

---

# Decisión

Se selecciona **Prisma** como ORM oficial del proyecto.

---

# Justificación

Prisma fue seleccionado debido a su excelente integración con el stack tecnológico definido:

- NestJS.
- TypeScript.
- PostgreSQL.
- pnpm.

La aplicación requiere un modelo de datos con múltiples relaciones:

```text
User
 └── Habits
        └── HabitEntries
```

Prisma permite definir estas relaciones de forma clara mediante `schema.prisma` y genera automáticamente un cliente tipado que reduce errores durante el desarrollo.

Además, su sistema de migraciones facilita mantener la evolución del esquema de base de datos controlada y versionada.

---

# Consecuencias

## Ventajas

- Mejor experiencia de desarrollo con TypeScript.
- Menor cantidad de errores en tiempo de ejecución.
- Modelos de datos centralizados.
- Migraciones versionadas.
- Consultas con tipado fuerte.
- Integración sencilla con NestJS.

## Desventajas

- El equipo debe familiarizarse con Prisma.
- Algunas consultas avanzadas pueden requerir conocimiento adicional de SQL.
- Se depende del ecosistema Prisma.

## Impacto

Todas las operaciones de persistencia deberán realizarse mediante Prisma.

La aplicación utilizará:

- `schema.prisma` como fuente de definición del modelo de datos.
- Prisma Migrations para cambios estructurales.
- Prisma Client como capa de acceso a datos.

La integración con NestJS seguirá una arquitectura basada en un módulo dedicado:

```text
src/
└── prisma/
    ├── prisma.module.ts
    ├── prisma.service.ts
    └── prisma.client.ts
```

---

# Referencias relacionadas

- Cycle 1 - Foundation

- Historia 2 - Definir la arquitectura de persistencia

- Historia 3 - Configurar PostgreSQL y Prisma

- ADR relacionados:

  - ADR-002 - Database Selection
  - ADR-004 - Authentication Strategy
  - ADR-005 - Project Structure
