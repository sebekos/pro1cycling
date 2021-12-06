const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
require("dotenv").config();

const { Team } = require("../sequelize");

// @route       team
// @description get all team members
// @access      public
router.get("/", async (req, res) => {
  try {
    const team = await Team.findAll({ where: { deleted: 0 } });
    res.json(team);
  } catch (err) {
    res.status(500).send("Server Error");
  }
});

// @route       team
// @description add or update team member
// @access      private
router.post(
  "/",
  [
    auth,
    check("firstName", "First name is required").isLength({ min: 3 }),
    check("lastName", "Last name is required").isLength({ min: 3 }),
    check("title", "Title is required").isLength({ min: 5 }),
    check("info", "Info is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Check inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { firstName, lastName, title, info } = req.body;

    // Setup team object
    let teamFields = {
      firstName,
      lastName,
      title,
      info,
    };

    try {
      // Update if exists, else create new
      let user = await Team.findOne({ where: { firstName, lastName } });
      if (user) {
        user = await Team.update(teamFields, { where: { id: user.id } });
      } else {
        user = await Team.create(teamFields);
      }
      res.json(user);
    } catch (err) {
      throw new Error(err);
    }
  }
);

module.exports = router;
