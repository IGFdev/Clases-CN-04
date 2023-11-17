FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm i

EXPOSE 3000

CMD ["node","app"]


# 1° definir cómo van a ser el plano de mi casa (la imagen de mis containers)
#   - Crear el Dockerfile
# 2° crear los planos de mi casa (crear la imagen)
#   - docker build -t nombre .
# 3° crear container(s) a partir de la imagen
#   - docker run --name mi-container -p 3000:3000 digital-house