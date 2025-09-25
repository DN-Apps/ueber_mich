# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Nur package.json / lockfile kopieren
COPY package*.json ./

# Pin TypeScript auf 4.9.5 (kompatibel zu react-scripts@5),
# lockfile aktualisieren und Peer-Conflicts entspannen
RUN npm pkg set devDependencies.typescript=4.9.5 \
  && npm config set legacy-peer-deps true \
  && npm i --package-lock-only \
  && npm ci

# Quellcode und Build
COPY . .
# Build-Arg aus CI
ARG API_PUBLIC_URL
# CRA liest nur REACT_APP_* zur Buildzeit
ENV REACT_APP_API_URL="$API_PUBLIC_URL"

# Wichtig: Warnungen NICHT als Fehler behandeln
RUN CI=false npm run build

# ---- runtime stage ----
FROM nginx:alpine
# curl für Healthcheck
RUN apk add --no-cache curl

# Nginx-Konfiguration mit SPA-Fallback + /health
# (Datei muss im Frontend-Repo liegen)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Build-Output nach Nginx Webroot
COPY --from=build /app/build /usr/share/nginx/html

# Healthcheck (nutzt 127.0.0.1, vermeidet IPv6-Fallstrick)
HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
  CMD curl -fsS http://127.0.0.1/health || exit 1
