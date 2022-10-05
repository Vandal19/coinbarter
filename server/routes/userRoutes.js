const express = require("express");
const axios = require('axios');
const validateForm = require("../controllers/validateForm");
const router = express.Router();

router.post("/login", async (req, res) => {
  validateForm(req, res);
})

router.post("/signup", async (req, res) => {

})

module.exports = router;