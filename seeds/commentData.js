const { Comment } = require("../models");

const commentdata = [
    {
        title: "TEST 1",
        content: "Test content",
        post_id: 3,
        user_id: 1
    },
    {
        title: "TEST 2",
        content: "More test content",
        post_id: 1,
        user_id: 2
    },
    {
        title: "TEST 3",
        content: "Still more test content.",
        post_id: 2,
        user_id: 3
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
