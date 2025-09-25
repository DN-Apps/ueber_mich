# ---- build stage ----
FROM node:20-alpine AS build
WORKDIR /app

# Nur package.json / lockfile kopieren
COPY package*.json ./

# Option 2 (erweitert):
#  - TypeScript hart auf 4.9.5 pinnen (kompatibel zu react-scripts@5)
#  - lockfile aktualisieren
#  - legacy peer deps aktivieren, weil i18next@25 TS^5 als optionalen Peer erwartet
RUN npm pkg set devDependencies.typescript=4.9.5 \
  && npm config set legacy-peer-deps true \
  && npm i --package-lock-only \
  && npm ci

# Quellcode und Build
COPY . .
# Dieser Build-Arg kommt später aus GitHub Actions
ARG API_PUBLIC_URL
# CRA: Variablen müssen mit REACT_APP_ beginnen
ENV REACT_APP_API_URL="$API_PUBLIC_URL"
# Non-interaktiver/CI-freundlicher Build
ENV CI=true
RUN npm run build

# ---- runtime stage ----
FROM nginx:alpine
# curl für Healthcheck
RUN apk add --no-cache curl

# Nginx-Konfiguration mit SPA-Fallback + /health
# (Stelle sicher, dass diese Datei im Build-Kontext 'frontend/' liegt)
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Build-Output nach Nginx Webroot
COPY --from=build /app/build /usr/share/nginx/html

# Healthcheck (nutzt 127.0.0.1, vermeidet IPv6-Fallstrick)
HEALTHCHECK --interval=20s --timeout=3s --retries=3 \
  CMD curl -fsS http://127.0.0.1/health || exit 1
