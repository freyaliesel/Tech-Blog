const { User } = require("../models");

const userdata = [
    {
        "user_name": "violeteyes",
        "password": "password123"
    },
    {
        "user_name": "aprilshowers",
        "password": "123password"
    },
    {
        "user_name": "sleep4theweak",
        "password": "pass123word"
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;