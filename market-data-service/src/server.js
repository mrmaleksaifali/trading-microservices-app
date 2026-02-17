const express = require("express");
const app = express();

const stocks = [
  { symbol: "TCS", price: 3800 },
  { symbol: "INFY", price: 1600 },
  { symbol: "RELIANCE", price: 2900 }
];

app.get("/api/market/stocks", (req, res) => res.json(stocks));

app.listen(4001, () => console.log("Market Service running"));
