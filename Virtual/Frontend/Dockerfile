FROM node:18

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Expose Vite default dev port
EXPOSE 5173

# Start Vite dev server
CMD ["npm", "run", "dev"]
