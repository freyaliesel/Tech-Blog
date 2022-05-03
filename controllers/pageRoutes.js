const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Post } = require("../models");

router.get("/", async (req, res) => {
    res.render("homepage");
});

router.get("/login", (req, res) => {
    if (req.session.logged_in) {
        res.redirect("/");
        return;
    }

    res.render("login");
});

router.get("/dashboard/:id", withAuth, async (req, res) => {
    try {
        const userData = await User.findByPk(req.params.id);
        const user = userData.get({ plain: true });

        const postData = await Post.findAll({
            where: { user_id: req.params.id },
        });
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render("dashboard", {
            user,
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

module.exports = router;
