const Sequelize = require("sequelize");
const UserModel = require("./models/user");
const TeamModel = require("./models/team");
const ScheduleModel = require("./models/schedule");
const NewsModel = require("./models/news");

const dotenv = require("dotenv");
require("dotenv").config();

let sequelize

try {
  sequelize = new Sequelize(
    process.env.MYSQL_DATABASE_URL,
    {
      dialect: "mysql",
      logging: false,
      query: { raw: true },
    }
  );
} catch (error) {
  console.log('SQL CONNECT ERROR')
  console.log(process.env.MYSQL_DATABASE_URL)
  console.log(error)
}

const User = UserModel(sequelize, Sequelize);
const Team = TeamModel(sequelize, Sequelize);
const Schedule = ScheduleModel(sequelize, Sequelize);
const News = NewsModel(sequelize, Sequelize);

try {
  sequelize.sync();
  console.log("MySQL Connected...");
} catch (err) {
  console.error(err.message);
  process.exit(1);
}

module.exports = {
  User,
  Team,
  Schedule,
  News,
  sequelize,
};
