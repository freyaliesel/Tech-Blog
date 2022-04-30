const { User } = require("../models");

const userdata = [
    {
        "username": "violeteyes",
        "password": "password123"
    },
    {
        "username": "aprilshowers",
        "password": "123password"
    },
    {
        "username": "sleep4theweak",
        "password": "pass123word"
    }
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;