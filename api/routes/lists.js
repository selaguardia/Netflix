const router = require("express").Router();
const List = require("../models/List");
const verify = require("../verifyToken");

// CREATE
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body);

    try {
      const savedList = await newList.save();
      res.status(201).json(savedList);
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Sorry, you are not authorized to do that!");
  }
});

// DELETE
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id)
      res.status(201).json("The List has been deleted.");
    } catch (error) {
      res.status(500).json(error);
    }
  } else {
    res.status(403).json("Sorry, you are not authorized to do that!");
  }
});

// GET List

router.get("/", verify, async (req, res) => {
  
})
module.exports = router;