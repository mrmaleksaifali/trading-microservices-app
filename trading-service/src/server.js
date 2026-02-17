const express = require("express");
const app = express();
app.use(express.json());

let orders = [];

app.post("/api/trade/buy", (req, res) => {
  orders.push({ ...req.body, type: "BUY" });
  res.json({ message: "Stock bought" });
});

app.post("/api/trade/sell", (req, res) => {
  orders.push({ ...req.body, type: "SELL" });
  res.json({ message: "Stock sold" });
});

app.get("/api/trade/orders", (req, res) => res.json(orders));

app.listen(4002, () => console.log("Trading Service running"));
