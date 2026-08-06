# Habit Tracker API

Una API REST desarrollada con **NestJS** para gestionar hábitos personales, registrar su cumplimiento y generar estadísticas de progreso.

El proyecto está diseñado siguiendo una arquitectura modular, aplicando buenas prácticas de desarrollo, principios SOLID y una estructura escalable que facilite el mantenimiento y la incorporación de nuevas funcionalidades.

---

# Objetivos

- Gestionar usuarios y autenticación.
- Crear y administrar hábitos personalizados.
- Registrar el cumplimiento diario de cada hábito.
- Calcular métricas como rachas, porcentaje de cumplimiento y estadísticas.
- Proporcionar una API documentada y preparada para producción.

---

# Tecnologías

| Tecnología | Propósito                       |
| ---------- | ------------------------------- |
| NestJS     | Framework principal             |
| TypeScript | Lenguaje de programación        |
| pnpm       | Gestor de paquetes              |
| PostgreSQL | Sistema gestor de base de datos |
| Prisma     | ORM                             |
| JWT        | Autenticación                   |
| Swagger    | Documentación de la API         |
| Jest       | Pruebas unitarias e integración |

---

# Requisitos

- Node.js 22 LTS o superior
- pnpm
- PostgreSQL

---

# Instalación

## Clonar el repositorio

```bash
git clone <repository-url>
cd habit-tracker-api
```

## Instalar dependencias

```bash
pnpm install
```

## Configurar variables de entorno

Crear un archivo `.env` utilizando como referencia el archivo `.env.example`.

Ejemplo:

```env
DATABASE_URL=
JWT_SECRET=
JWT_EXPIRES_IN=
```

## Ejecutar la aplicación

```bash
pnpm start:dev
```

La aplicación estará disponible en:

```
http://localhost:3000
```

---

# Scripts disponibles

| Script           | Descripción                              |
| ---------------- | ---------------------------------------- |
| `pnpm start`     | Ejecuta la aplicación                    |
| `pnpm start:dev` | Ejecuta la aplicación en modo desarrollo |
| `pnpm build`     | Compila el proyecto                      |
| `pnpm lint`      | Ejecuta ESLint                           |
| `pnpm format`    | Formatea el código                       |
| `pnpm test`      | Ejecuta las pruebas                      |

---

# Estructura del proyecto

```text
src/
├── auth/
├── users/
├── habits/
├── habit-entries/
├── statistics/
├── prisma/
├── common/
├── config/
└── main.ts
```

---

# Documentación

La documentación técnica del proyecto se encuentra en el directorio:

```text
docs/
```

En ella se documentarán, entre otros aspectos:

- Arquitectura del sistema.
- Decisiones de diseño (ADR).
- Modelo de datos.
- Convenciones del proyecto.
- Guías de desarrollo.

---

# Roadmap

El desarrollo del proyecto se organiza mediante **Cycles (Sprints)** administrados en Plane.

Cada ciclo incorpora nuevas funcionalidades y mejoras de la plataforma.

---

# Estado del proyecto

🚧 En desarrollo.

Actualmente el proyecto se encuentra en la fase de construcción de la infraestructura base.

---

# Licencia

Este proyecto se distribuye únicamente con fines educativos y de aprendizaje.
