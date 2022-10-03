const express = require("express");
const router = express.Router();
const axios = require('axios');

const { getProductsForCategory } = require('../db/database');



// category_id from req.params var
router.get('/:category', (req, res) => {

  getProductsForCategory(req.params.category)
    .then(result => res.send(result))
    .catch(error => console.error(error));

})

// connect to index.js
module.exports = router;

