const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

app.use("/api/users", createProxyMiddleware({ target: "http://user-service:4000", changeOrigin: true }));
app.use("/api/market", createProxyMiddleware({ target: "http://market-service:4001", changeOrigin: true }));
app.use("/api/trade", createProxyMiddleware({ target: "http://trading-service:4002", changeOrigin: true }));

app.listen(3000, () => console.log("API Gateway running"));
