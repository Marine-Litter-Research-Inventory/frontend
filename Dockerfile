# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM --platform=linux/amd64 node:16-alpine3.14 AS builder
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . /app/
RUN corepack enable
RUN corepack prepare pnpm@7.29.3 --activate
RUN pnpm install
RUN pnpm build


FROM --platform=linux/amd64 nginx:alpine
RUN mkdir -p /usr/share/nginx/html/
COPY --from=builder /app/dist /usr/share/nginx/html/

EXPOSE 80

STOPSIGNAL SIGTERM

CMD ["nginx", "-g", "daemon off;"]
