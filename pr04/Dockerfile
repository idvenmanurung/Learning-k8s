FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install --omit=dev
COPY . .

FROM node:18-alpine AS production
WORKDIR /app

COPY --from=builder /app ./

EXPOSE 3000
CMD ["node", "index.js"]