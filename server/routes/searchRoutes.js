const express = require("express");
const app = express();
const router = express.Router();
const { searchResults } = require("../db/database");

router.post("/products/categories/:category", async(req, res) => {
  try {
    const { brand_name}  = await Pool.query(("SELECT * FROM products WHERE first_name || ' ' || last_name ILIKE $1", [`%${brand_name}`]))
    res.json(brand_name)
  } catch (error) {
    console.log(error.message)
  }
  res.send(products)
})