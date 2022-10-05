const express = require("express");
const axios = require("axios");
const validateForm = require("../controllers/validateForm");
const router = express.Router();
const bcrypt = require("bcrypt");
const pool = require("../db/database");
const getUserByEmail = require("../db/database");

router.post("/login", async (req, res) => {
  validateForm(req, res);

  if (getUserByEmail.rowCount > 0) {
    const samePw = await bcrypt.compare(
      req.body.password,
      getUserByEmail.rows[0].password
    );
    if (samePw) {
      req.session.user = {
        email: req.body.email,
        id: getUserByEmail.rows[0].id,
      };
      res.json({ loggedIn: true, email });
    } else {
      res.json({ loggedIn: false, status: "Wrong email or password" });
    }
  } else {
    res.json({ loggedIn: false, status: "Wrong email or password" });
  }
});

router.post("/signup", async (req, res) => {});

module.exports = router;
