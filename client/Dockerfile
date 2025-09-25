# ---- build stage ----
FROM node:18-alpine AS build
WORKDIR /app

# Nur package.json / lockfile kopieren
COPY package*.json ./

# Option 2: Typescript im Build auf 4.9.5 pinnen,
# Lockfile entsprechend aktualisieren und dann sauber mit npm ci installieren
RUN npm pkg set devDependencies.typescript=4.9.5 \
  && npm i --package-lock-only \
  && npm ci

# Quellcode und Build
COPY . .
# Dieser Build-Arg kommt später aus GitHub Actions
ARG API_PUBLIC_URL
# CRA: Variablen müssen mit REACT_APP_ beginnen
ENV REACT_APP_API_URL="$API_PUBLIC_URL"
RUN npm run build

# ---- runtime stage ----
FROM nginx:alpine
# curl für Healthcheck
RUN apk add --no-cache curl
# Nginx-Konfiguration mit SPA-Fallback + /health
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
# Build-Output nach Nginx Webroot
COPY --from=build /app/build /usr/share/nginx/html

# Healthcheck (nutzt 127.0.0.1, vermeidet IPv6-Fallstrick)
HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
  CMD curl -fsS http://127.0.0.1/health || exit 1
