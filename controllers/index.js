const express = require('express');
const router = express.Router();
const db = require('../models');

const manateeRoutes = require("./manatees");
router.use("/manatees",manateeRoutes);

module.exports = router