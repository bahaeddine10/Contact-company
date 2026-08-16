FROM node:20-alpine
WORKDIR /app

COPY node-backend/package*.json ./
RUN npm install --omit=dev

COPY node-backend/ .

ENV NODE_ENV=production
ENV PORT=5000

EXPOSE 5000
CMD ["npm", "start"]
