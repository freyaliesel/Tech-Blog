const router = require("express").Router();
const { Post } = require("../../models");

// get all posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll();

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render("homepage", {
            posts,
            loggedIn: req.session.loggedIn,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get single post
router.get("/posts/:id", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
    } else {
        try {
            const postData = await Post.findByPk(req.params.id);

            const post = postData.get({ plain: true });

            res.render("post", {
                post,
                loggedIn: req.session.loggedIn,
            });
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    }
});

// post post
// delete post
