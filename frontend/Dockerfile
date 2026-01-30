# ===== BUILD =====
FROM node:20-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install -g @angular/cli@21

COPY . .
RUN ng build

# ===== RUN SSR =====
FROM node:20-alpine

WORKDIR /app

COPY --from=build /app/dist ./dist
COPY package*.json ./

RUN npm install --omit=dev

EXPOSE 4000

CMD ["node", "dist/aquarismo-app/server/server.mjs"]
