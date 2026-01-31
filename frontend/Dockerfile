# Usa Node.js 22 (LTS)
FROM node:22

# Directorios de trabajo
WORKDIR /app

# Copia los archivos de npm y instala dependencias
COPY package*.json ./
RUN npm install

# Copia el resto de los archivos
COPY . .

# Expone el puerto del frontend (Vite)
EXPOSE 5173

# Ejecuta el servidor de desarrollo de Vite
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]
