# Monorepo Node.js + React + MySQL (Docker)

Requisitos
- Docker
- Docker Compose
- Git
Instalación y ejecución

1. Clonar el repositorio
git clone https://github.com/tu-usuario/monorepo-node-react.git 

cd monorepo-node-react

2. Configurar variables de entorno (Backend)

Crear el archivo backend/.env:

PORT=4000

DB_HOST=mysql

DB_USER=root

DB_PASSWORD=root

DB_NAME=nombre_de_tu_base_de_datos

# Brevo (Sendinblue)
EMAIL_HOST=smtp-relay.brevo.com

BREVO_API_KEY=tu_brevo_api_key

EMAIL_TO=tucorreo@gmail.com

3. Levantar el proyecto con Docker

Desde la raíz del proyecto:

docker-compose up --build

Accesos

Frontend: http://localhost:3000

Backend: http://localhost:4000

Detener contenedores

docker-compose down
