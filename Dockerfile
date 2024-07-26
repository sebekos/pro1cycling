FROM node:16 as builder
WORKDIR /app
COPY . .
RUN rm -rf client
COPY /client/build /app/client/build
RUN npm ci --production

FROM gcr.io/distroless/nodejs18-debian11
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app .
CMD [ "server.js" ]

