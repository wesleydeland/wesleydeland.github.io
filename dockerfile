# Use a compact, production-friendly Node image
FROM node:20-alpine

# Create the app directory
WORKDIR /app

# Copy package.json first for better layer caching
COPY package.json .

# Install dependencies
RUN npm ci --only=production --cache /home/node/.npm --prefer-offline

# Build the app as root, then switch to non-root
COPY . .
RUN npm run build:site

# node:20-alpine already has a `node` user and group
RUN chown -R node:node /app
USER node

# Expose the port Dokploy will route to
EXPOSE 3000

# Serve the static build
CMD ["npx", "serve", "_site", "-s", "-l", "3000"]