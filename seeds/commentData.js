const { Comment } = require("../models");

const commentdata = [
    {
        title: "TEST 1",
        content: "Test content",
        post_id: 3,
        user_id: 1,
        date_created: "April 20, 2021 09:00:00"
    },
    {
        title: "TEST 2",
        content: "More test content",
        post_id: 1,
        user_id: 2,
        date_created: "April 21, 2021 17:00:00"
    },
    {
        title: "TEST 3",
        content: "Still more test content.",
        post_id: 2,
        user_id: 3,
        date_created: "April 22, 2021 12:00:00"
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
