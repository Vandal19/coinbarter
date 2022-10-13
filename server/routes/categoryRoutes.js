const express = require("express");
const router = express.Router();
const axios = require('axios');

const { getProductsForCategory, searchResults } = require('../db/database');




// category_id from req.params var
// router.get('/:category', (req, res) => {

//   getProductsForCategory(req.params.category)
//     .then(result => res.send(result))
//     .catch(error => console.error(error));

// })

router.post("/", async(req, res) => {
  const {name} =req.query
  const result = await searchResults(name)

    if(result) {
      res.send(result)

  } else {
    res.sendStatus(403)
  }
})

// connect to index.js
module.exports = router;

