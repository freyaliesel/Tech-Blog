const router = require("express").Router();
const { User } = require("../../models");

// post user

router.post("/", async (req, res) => {
    try {
        const userData = await User.create(req.body);

    } catch (err) {
        res.status(400).json(err);
    }
});

// get user

// delete user

module.exports = router;
