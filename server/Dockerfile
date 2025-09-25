FROM node:18-alpine
WORKDIR /app

ENV NODE_ENV=production
COPY package*.json ./
RUN npm ci --only=production

COPY . .
ENV PORT=5000
EXPOSE 5000

# Für Healthcheck
RUN apk add --no-cache curl

HEALTHCHECK --interval=20s --timeout=5s --retries=3 \
  CMD curl -fsS http://127.0.0.1:5000/api/health || exit 1

CMD ["npm", "start"]
