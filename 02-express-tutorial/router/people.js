const express = require("express");
const router = express.Router();

const {
  getPeople,
  addPeople,
  updatePeople,
  deletePeople,
} = require("../controllers/people");

router.get("/", getPeople);

router.post("/", addPeople);

router.put("/:id", updatePeople);

router.delete("/:id", deletePeople);

module.exports = router;
