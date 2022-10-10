const express = require("express");
const app = express();
const router = express.Router();
const { loadOrders } = require("../db/database");

//load orders
router.post("/:id", async(req, res) => {
  const result = await loadOrders(req.params.id)
  if(result) {
    res.send(result)
  } else {
    res.sendStatus(403)
  }

  // console.log("results", favoriteExist)
})

module.exports = router;