# Usa Node.js 22 (LTS)
FROM node:22

# Directorios de trabajo
WORKDIR /app

# Copia los archivos de npm y instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto del backend
EXPOSE 4000

# Ejecuta el servidor con nodemon (para desarrollo)
CMD ["npm", "run", "dev"]
