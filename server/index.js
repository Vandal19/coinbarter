const { addProduct } = require("./db/database");

const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const morgan = require("morgan");

const products = require("./products")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(morgan());

app.get("/", cors(), async (req, res) => {
  res.send("This is working");
});

app.post("/post_name", async (req, res) => {
  let { name } = req.body;
  console.log(name);
});

app.get("/home", async (req, res) => {
  res.send(`Testing data`);
});

app.get("/products", (req, res) => {
  res.send(products)
})

app.post("/products", async (req, res) => {
  const product = {
    ...req.body,
    category_id: parseFloat(req.body.category_id),
    price: parseFloat(req.body.price),
    stock: parseFloat(req.body.stock)
  };
  await addProduct(product);
  // console.log("product", product)
});

app.listen(port, () => {
  console.log(`listening on http://localhost:${port}`);
});
