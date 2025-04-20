# Stage 1: Build the app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the app with a lightweight web server
FROM nginx:alpine

COPY --from=builder /app/dist /usr/share/nginx/html

# Optional: Replace the default nginx config if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]