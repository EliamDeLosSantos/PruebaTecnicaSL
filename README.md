# Task Manager – Prueba Técnica Fullstack Mid-Level

## 📌 Objetivo

Construir una aplicación web simple pero bien estructurada que permita **listar, crear y consultar tareas**, evaluando tanto el **frontend**, el **backend** y la **integración entre ambos**.

Esta prueba busca medir:

* Calidad de código
* Estructura y arquitectura
* Manejo del estado y datos
* Criterio técnico
* Experiencia de usuario básica
* Capacidad de comunicación técnica

---

## 🧩 Descripción del Proyecto

**Task Manager** es una aplicación web que permite gestionar tareas de forma sencilla.

La aplicación permite:

* Crear tareas
* Listar tareas
* Ver el detalle de una tarea
* Cambiar el estado de una tarea

---

## ⚙️ Funcionalidades Requeridas

### Backend

API REST con las siguientes capacidades:

* Crear una tarea
* Obtener todas las tareas
* Obtener una tarea por ID
* Actualizar el estado de una tarea

#### Modelo de Tarea

```json
{
  "id": "string | number",
  "title": "string",
  "description": "string",
  "status": "pending | in_progress | completed",
  "createdAt": "date"
}
```

#### Requisitos Backend

* Validaciones básicas
* Manejo de errores (400, 404, etc.)
* Persistencia de datos (base de datos real o en memoria bien estructurada)
* Estructura clara del proyecto

---

### Frontend

Interfaz que permita:

* Ver la lista de tareas
* Crear una nueva tarea
* Ver el detalle de una tarea
* Cambiar el estado de una tarea
* Mostrar estados de carga y errores

#### Requisitos Frontend

* UI clara y usable
* Manejo correcto del estado
* Consumo limpio de la API
* Componentes reutilizables
* Buen manejo de formularios

---

## 🧠 Tecnologías

Las tecnologías utilizadas son de libre elección. Se valora más el **criterio técnico** que el stack específico.

Ejemplo:

* Frontend: React + Tailwind CSS
* Backend: Node.js + Express
* Base de datos: En memoria / SQLite / PostgreSQL

---

## 🧪 Evaluación Técnica

### Backend

* Diseño de endpoints
* Organización del código
* Validaciones y manejo de errores
* Claridad en la lógica de negocio

### Frontend

* Separación de responsabilidades
* Manejo del estado
* UX básica
* Limpieza y legibilidad del código

### Fullstack

* Integración frontend ↔ backend
* Consistencia de datos
* Estructura general del proyecto
* Decisiones técnicas justificadas

---

## ⭐ Extras (Opcional)

* Tests (unitarios o básicos)
* Docker o setup claro
* README bien explicado
* Autenticación simple
* Filtros o búsqueda
* Buen diseño visual (sin exagerar)

---

## 🚀 Cómo correr el proyecto

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📝 Decisiones Técnicas

* Arquitectura separada frontend / backend
* API REST simple y explícita
* Manejo de estado centralizado en el frontend
* Validaciones tanto en frontend como backend

---

## 🔮 Qué mejoraría con más tiempo

* Tests automatizados
* Autenticación de usuarios
* Filtros avanzados y búsqueda
* Paginación
* Mejoras visuales y UX
* Persistencia con base de datos robusta

---

## 📦 Entrega

* Repositorio en GitHub / GitLab
* README con instrucciones claras

---

> Nota: No se busca una aplicación perfecta, sino una solución **bien pensada, mantenible y alineada al nivel Mid-Level Fullstack**.
