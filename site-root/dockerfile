# Use a compact, production-friendly Node image
FROM node:20-alpine

# Set non-root user for security
RUN addgroup -g 1001 -S nodejs \
  && adduser -S node -u 1001 \
  && chown -R node:nodejs /app
USER node

# Create the app directory
WORKDIR /app

# Copy package.json first for better layer caching
COPY package.json .

# Install dependencies
RUN npm ci --only=production --cache /home/node/.npm --prefer-offline

# Copy the rest of the application
COPY . .

# Build the site (creates `_site`)
RUN npm run build:site

# Expose the port Dokploy will route to
EXPOSE 3000

# Serve the static build
CMD ["npx", "serve", "_site", "-s", "-l", "3000"]