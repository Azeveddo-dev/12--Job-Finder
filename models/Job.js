const Sequelize = require("sequelize");
const db = require("../db/connection");
const sequelize = require("../db/connection");


const Job = db.define("job", {
    title: {
        type: Sequelize.STRING,
    },
    description: {
        type: Sequelize.STRING,
    },
    salary: {
        type: Sequelize.STRING,
    },
    company: {
        type: Sequelize.STRING,
    },
    email: {
        type: Sequelize.STRING,
    },
    newJob: {
        type: sequelize.INTEGER,
    }
});

module.exports = Job