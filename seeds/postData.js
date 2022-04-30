const { Post } = require("../models");

const postdata = [
    {
        title: "TEST 1",
        content: "Test content",
        user_id: 2,
        date_created: "April 20, 2021 07:00:00"
    },
    {
        title: "TEST 2",
        content: "More test content",
        user_id: 3,
        date_created: "April 21, 2021 07:00:00"
    },
    {
        title: "TEST 3",
        content: "Still more test content.",
        user_id: 1,
        date_created: "April 22, 2021 07:00:00"
    },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;