FROM node:18-alpine AS base
WORKDIR /app

# Install dependencies for cache layer
COPY package.json package-lock.json* ./
RUN npm ci --omit=dev

# Copy the rest of the application code
COPY . .

# Run as non-root (alpine node image include user 'node')
USER node
EXPOSE 3000
ENV NODE_ENV=production
CMD ["npm", "start"]