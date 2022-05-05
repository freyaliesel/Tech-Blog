const { User } = require("../models");
const bcrypt = require("bcrypt");

const userdata = [
    {
        username: "violeteyes",
        email: "violeteyes@email.com",
        password: "password123",
    },
    {
        username: "aprilshowers",
        email: "aprilshowers@email.com",
        password: "123password",
    },
    {
        username: "sleep4theweak",
        email: "sleep4theweak@email.com",
        password: "pass123word",
    },
];

User.beforeBulkCreate(async (users) => {
    for (const user of users) {
        user.password = await bcrypt.hash(user.password, 10);
        }
});

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
