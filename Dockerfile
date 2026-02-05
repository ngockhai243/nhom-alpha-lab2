# Sử dụng image Node.js
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
# Sử dụng một server nhỏ để phục vụ file tĩnh
RUN npm install -g serve
EXPOSE 80
CMD ["serve", "-s", "dist", "-l", "8080"]
