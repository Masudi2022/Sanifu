# Use an official Node.js base image
FROM node:18

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json first for dependency install
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your frontend source code
COPY . .

# Expose Vite's default development port
EXPOSE 5173

# Run the Vite development server
CMD ["npm", "run", "dev"]
