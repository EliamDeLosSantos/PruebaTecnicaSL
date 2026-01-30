Prueba Técnica – Fullstack Mid-Level 
Objetivo 
Construir una aplicación web simple pero bien estructurada que permita listar, crear y 
consultar información, evaluando tanto el frontend como el backend, así como la forma en que 
se conectan entre sí. 
La prueba busca medir: 
● Calidad de código 
● Estructura y arquitectura 
● Manejo del estado y datos 
● Criterio técnico 
● Experiencia de usuario básica 
● Capacidad de comunicación técnica 
Descripción del Proyecto 
Desarrollar una aplicación llamada “Task Manager”. 
La aplicación permitirá: 
● Crear tareas 
● Listar tareas 
● Ver el detalle de una tarea 
● Cambiar el estado de una tarea 
Funcionalidades Requeridas 
Backend 
Crear una API REST que permita: 
● Crear una tarea 
● Obtener todas las tareas 
● Obtener una tarea por ID 
● Actualizar el estado de una tarea 
Modelo de Tarea (mínimo): 
{ 
} 
"id": "string | number", 
"title": "string", 
"description": "string", 
"status": "pending | in_progress | completed", 
"createdAt": "date" 
�
�
Requisitos: 
● Validaciones básicas 
● Manejo de errores (404, 400, etc.) 
● Persistencia de datos (BD real o en memoria bien estructurada) 
● Estructura clara del proyecto 
Frontend 
Construir una interfaz que permita: 
● Ver la lista de tareas 
● Crear una nueva tarea 
● Ver el detalle de una tarea 
● Cambiar su estado 
● Mostrar estados de carga y errores 
Requisitos: 
● UI clara y usable 
● Manejo correcto del estado 
● Consumo limpio de la API 
● Componentes reutilizables 
● Buen manejo de formularios 
Tecnologías 
Libres, el candidato puede elegir: 
● Framework/librería de frontend 
● Lenguaje del backend 
● Base de datos 
● Herramientas de styling 
Se valorará más el criterio que la tecnología. 
Evaluación Técnica 
Se evaluará principalmente: 
Backend 
● Diseño de endpoints 
● Organización del código 
● Validaciones y errores 
● Claridad en la lógica 
Frontend 
● Separación de responsabilidades 
● Manejo del estado 
● UX básica 
● Limpieza y legibilidad del código 
Fullstack 
● Integración frontend ↔ backend 
● Consistencia de datos 
● Estructura general del proyecto 
● Decisiones técnicas justificadas 
�
�
Extras (Opcional, suma puntos) 
● Tests (unitarios o básicos) 
● README bien explicado 
● Docker o setup claro 
● Autenticación simple 
● Filtros o búsqueda 
● Buen diseño visual (sin exagerar) 
Entrega 
● Repositorio en GitHub/GitLab 
● README con: 
○ Cómo correr el proyecto 
○ Decisiones técnicas 
○ Qué mejorarías con más tiempo