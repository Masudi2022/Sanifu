# ---------- Build Stage ----------
    FROM node:18 AS builder

    WORKDIR /app
    
    # Install dependencies
    COPY package*.json ./
    RUN npm install
    
    # Copy source and .env
    COPY . .
    
    # Build the app (Vite will read from `.env.production` if it exists)
    RUN npm run build
    
    
    # ---------- Production Stage ----------
    FROM nginx:stable-alpine
    
    # Copy built frontend to Nginx public folder
    COPY --from=builder /app/dist /usr/share/nginx/html
    
    # (Optional) custom nginx config if needed
    # COPY nginx.conf /etc/nginx/nginx.conf
    
    EXPOSE 80
    
    CMD ["nginx", "-g", "daemon off;"]
    