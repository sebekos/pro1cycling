const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../middleware/auth");
const moment = require("moment");
require("dotenv").config();

const { Schedule } = require("../sequelize");

// @route       schedule
// @description get schedule
// @access      public
router.get("/", async (req, res) => {
  try {
    const schedule = await Schedule.findAll({
      where: { deleted: 0 },
      order: [["startDate", "ASC"]],
    });
    let ret = schedule.map((o) => ({
      ...o,
      startDate: moment(o.startDate).utc().format("YYYY-MM-DD"),
      endDate: moment(o.endDate).utc().format("YYYY-MM-DD"),
    }));
    res.json(ret);
  } catch (err) {
    console.log(err);
    res.status(500).send("Server Error");
  }
});

// @route       schedule
// @description add or update schedule
// @access      private
router.post(
  "/",
  [
    auth,
    check("startDate", "Start date is required").isLength({ min: 3 }),
    check("endDate", "End date is required").isLength({ min: 3 }),
    check("race", "Race is required").isLength({ min: 5 }),
    check("location", "Location is required").isLength({ min: 5 }),
  ],
  async (req, res) => {
    // Check inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { id, startDate, endDate, race, location, results, deleted } =
      req.body;

    // Setup team object
    let teamFields = {
      startDate,
      endDate,
      race,
      location,
      results,
      deleted: deleted ? 1 : 0,
    };

    try {
      // Update if exists, else create new
      let schedule = id ? await Schedule.findOne({ where: { id } }) : null;
      if (schedule) {
        schedule = await Schedule.update(teamFields, { where: { id } });
      } else {
        schedule = await Schedule.create(teamFields);
      }
      res.json(schedule);
    } catch (err) {
      throw new Error(err);
    }
  }
);

module.exports = router;
