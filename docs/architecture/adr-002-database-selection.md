# ADR-002 - Database Selection

**Estado:** Accepted

**Fecha:** 2026-08-06

---

# Contexto

Habit Tracker API requiere un sistema de almacenamiento persistente para gestionar la información generada por la aplicación.

El dominio del proyecto está compuesto por entidades con relaciones claras entre sí:

- Usuarios.
- Hábitos.
- Registros de cumplimiento.
- Estadísticas.
- Configuraciones asociadas al usuario.

Estas entidades requieren consistencia de datos, relaciones entre registros y capacidad de realizar consultas agregadas para generar métricas de progreso.

---

# Problema

Se necesita seleccionar un sistema gestor de base de datos que permita:

- Modelar relaciones entre entidades.
- Garantizar integridad de datos.
- Soportar crecimiento futuro de la aplicación.
- Permitir consultas complejas y agregaciones.
- Integrarse correctamente con NestJS y Prisma.
- Ser estable y ampliamente adoptado.

---

# Alternativas consideradas

## PostgreSQL

Sistema gestor de base de datos relacional de código abierto.

### Ventajas

- Excelente soporte para modelos relacionales.
- Cumplimiento sólido del estándar SQL.
- Integridad referencial mediante claves foráneas.
- Soporte avanzado para índices y consultas complejas.
- Soporte para tipos de datos avanzados.
- Amplia adopción en aplicaciones backend modernas.
- Excelente integración con Prisma.

### Desventajas

- Requiere mayor planificación inicial del esquema.
- Puede resultar más complejo que soluciones orientadas a documentos para ciertos casos.

---

## MySQL

Sistema gestor de base de datos relacional ampliamente utilizado.

### Ventajas

- Gran adopción en aplicaciones web.
- Amplia documentación.
- Buen rendimiento para aplicaciones tradicionales.

### Desventajas

- Algunas funcionalidades avanzadas están menos orientadas a casos complejos.
- PostgreSQL ofrece una mayor riqueza de características SQL.

---

## SQLite

Base de datos relacional embebida basada en archivos.

### Ventajas

- Configuración mínima.
- Ideal para prototipos y aplicaciones pequeñas.
- No requiere servidor dedicado.

### Desventajas

- Limitaciones para aplicaciones multiusuario.
- Menor escalabilidad para ambientes productivos.
- Menor adecuada para una API con crecimiento esperado.

---

## MongoDB

Base de datos orientada a documentos.

### Ventajas

- Modelo flexible basado en documentos.
- Buena opción para datos altamente variables.
- Escalabilidad horizontal incorporada.

### Desventajas

- Menor adecuación para relaciones complejas.
- Puede requerir lógica adicional para mantener consistencia entre documentos.
- El dominio del proyecto tiene una estructura naturalmente relacional.

---

# Decisión

Se selecciona **PostgreSQL** como sistema gestor de base de datos oficial del proyecto.

---

# Justificación

PostgreSQL fue seleccionado debido a que el dominio de Habit Tracker presenta una estructura relacional clara.

Ejemplo de relaciones principales:

```
User
 └── Habits
        └── HabitEntries
```

Este modelo requiere:

- Relaciones uno a muchos.
- Restricciones de integridad.
- Consultas históricas.
- Agregaciones para estadísticas.

PostgreSQL proporciona una solución robusta para este tipo de requerimientos, permitiendo que la aplicación evolucione sin necesidad de cambiar la estrategia de almacenamiento.

Además, PostgreSQL cuenta con una integración madura con Prisma, el ORM seleccionado para el proyecto.

---

# Consecuencias

## Ventajas

- Modelo de datos consistente y estructurado.
- Soporte completo para relaciones entre entidades.
- Capacidad para realizar consultas complejas.
- Buena escalabilidad para futuras funcionalidades.
- Amplio soporte en herramientas modernas de desarrollo.

## Desventajas

- Requiere definir correctamente el esquema inicial.
- Los cambios estructurales requieren migraciones controladas.
- Mayor rigidez comparado con bases de datos orientadas a documentos.

## Nota

La implementación utiliza PostgreSQL con Prisma ORM 7 mediante driver adapter @prisma/adapter-pg

## Impacto

El diseño de entidades del sistema seguirá un modelo relacional.

Las futuras decisiones relacionadas con:

- Diseño de tablas.
- Relaciones.
- Índices.
- Migraciones.

deberán considerar las capacidades y buenas prácticas de PostgreSQL.

---

# Referencias relacionadas

- Cycle 1 - Foundation

- Historia 2 - Definir la arquitectura de persistencia

- Historia 3 - Configurar PostgreSQL y Prisma

- ADR relacionado:

  - ADR-003 - ORM Selection
