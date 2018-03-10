"use strict";

const express = require("express");
const bodyParser = require("body-parser");

const prod = require("./prod");

const idNext = () => {
  if (!prod.length) {
    return 1;
  }
  let count = prod.length;
  let idLast = prod[count - 1].id;
  return (idLast += 1);
};

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-cache");
  next();
});

app.get("/api/prod", (req, res) => {
  res.send(prod);
});

app.post("/api/prod", (req, res) => {
  let product = {
    id: idNext(),
    link: req.body.link,
    name: req.body.name,
    administration: req.body.administration,
    price: req.body.price,
    available: req.body.available,
    wish: false
  };

  prod.push(product);

  res.send(product);
});

app.put("/api/prod/:id", (req, res) => {
  let product = prod.find(product => product.id == req.params.id);

  if (!product) return res.sendStatus(404);

  product.name = req.body.name || product.name;

  res.json(product);
});

app.patch("/api/prod/:id", (req, res) => {
  let product = prod.find(product => product.id == req.params.id);

  if (!product) return res.sendStatus(404);

  product.wish = !product.wish;

  res.json(product);
});

app.delete("/api/prod/:id", (req, res) => {
  let index = prod.findIndex(product => product.id == req.params.id);

  if (index === -1) return res.sendStatus(404);

  prod.splice(index, 1);

  res.sendStatus(204);
});

app.listen(5000, "localhost");
