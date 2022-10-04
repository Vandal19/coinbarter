const express = require("express");
const router = express.Router();
const axios = require('axios');
const bcrypt = require("bcrypt")
const pool = require("../db")

router.post("/login", async (req, res) => {
  validateForm(req, res);
})

router.post("/signup", async (req, res) => {
  
})