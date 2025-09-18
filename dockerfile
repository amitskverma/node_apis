# Use Node.js LTS as base image
FROM node:20-alpine

# Set working directory
WORKDIR /usr/src/app

# Copy package files first (better caching for dependencies)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application
COPY . .

# Build the app if build script exists
RUN npm run build --if-present

# Expose the port (Azure Web App uses 8080 by default for custom containers)
EXPOSE 8080

# Start the app
CMD ["npm", "start"]
