const express = require("express");
const app = express();
const router = express.Router();
const { addToFavorites, loadFavorites, checkIfFavoriteExists } = require("../db/database");

// app.get("/favorites", (req, res) => {
//   res.send()
// })

// load favorites page
router.post("/:id", async(req, res) => {
  const result = await loadFavorites(req.params.id)
  if(result) {
    res.send(result)
  } else {
    res.sendStatus(403)
  }



  // console.log("results", favoriteExist)
})

module.exports = router;