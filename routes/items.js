const express = require("express");
const router = express.Router();
const Item = require("../models/item");

// GET all items
router.get("/", async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// POST a new item
router.post("/", async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.status(201).json(newItem);
});

module.exports = router;
