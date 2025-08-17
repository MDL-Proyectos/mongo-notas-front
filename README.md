# MongoNotas Frontend

## 📋 Descripción
Frontend para la aplicación MongoNotas, un proyecto universitario que demuestra la integración de diferentes tecnologías web modernas. Este repositorio forma parte de un proyecto más amplio que incluye un backend separado, mostrando una arquitectura de microservicios.

### 🔧 Tecnologías Utilizadas
- JavaScript
- HTML/CSS
- React
- Integración con API REST
- Docker
- Vite

## 🚀 Características
- Interfaz de usuario para gestión de notas
- Comunicación con backend basado en Express
- Integración con MongoDB para almacenamiento de datos
- Containerización con Docker

## ⚙️ Requisitos Previos
- Node.js
- Docker
- Conexión al backend de MongoNotas

## 🛠️ Instalación y Configuración

1. Clonar el repositorio:
```bash
git clone https://github.com/MDL-Proyectos/mongo-notas-front.git
cd mongo-notas-front
```

2. Instalar dependencias:
```bash
npm install
```

3. Iniciar con Docker:
```bash
docker build -t mongo-notas-frontend .
docker run -p 3000:3000 mongo-notas-frontend
```

## 🎯 Contexto del Proyecto
Este proyecto fue desarrollado como parte de un trabajo universitario con el objetivo de demostrar conocimientos en:
- Desarrollo Frontend con JavaScript
- Integración con Backend (Express)
- Bases de datos NoSQL (MongoDB)
- Containerización (Docker)

> **Nota**: Al ser un proyecto académico, se centra en demostrar la implementación básica de estas tecnologías. No incluye características avanzadas como logging extensivo o validaciones complejas.

## 🔗 Proyectos Relacionados
- [Backend de MongoNotas](https://github.com/MDL-Proyectos/mongo_notas) - API REST desarrollada con Express

