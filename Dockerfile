# ============================================
# ETAPA 1: Build de la app React con Node.js
# ============================================
FROM node:20-alpine AS build

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiamos primero SOLO los archivos de dependencias.
# Docker cachea cada instrucción como una "capa". Si package.json
# no cambia, Docker reutiliza la caché y no reinstala dependencias.
COPY package*.json ./

# npm ci (clean install) es más rápido y seguro que npm install en CI/CD:
# - Instala exactamente lo que dice package-lock.json (reproducible)
# - Falla si hay discrepancias entre package.json y package-lock.json
# - Borra node_modules antes de instalar (estado limpio garantizado)
RUN npm ci

# Copiamos el resto del código fuente DESPUÉS de instalar dependencias
# (así la capa de node_modules se cachea aunque cambie el código)
COPY . .

# Compilamos la app para producción → genera /app/dist con los estáticos optimizados
RUN npm run build

# ============================================
# ETAPA 2: Servir los estáticos con Nginx
# ============================================
# Imagen final ultraligera (~25MB vs ~1GB de Node)
FROM nginx:1.27-alpine

# Creamos un usuario sin privilegios para mayor seguridad
# Nginx necesita un proceso root para el puerto 80 en el master,
# pero los workers correrán con el usuario "nginx" ya incluido en la imagen.

# Copiamos el /dist de la etapa anterior al directorio de Nginx
# NOTA: Solo se copia el resultado compilado, NO el código fuente ni node_modules
COPY --from=build /app/dist /usr/share/nginx/html

# Copiamos nuestra configuración personalizada de Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Metadatos informativos de la imagen (no afectan al funcionamiento)
LABEL maintainer="Alejandra Sánchez"
LABEL description="Portfolio personal - React + Vite + Nginx"
LABEL version="1.0"

# Exponemos el puerto 80 (documentación, no abre el puerto en el host)
EXPOSE 80

# Nginx arranca en primer plano (daemon off) para que Docker
# pueda detectar si el proceso muere y gestionar el contenedor
CMD ["nginx", "-g", "daemon off;"]
