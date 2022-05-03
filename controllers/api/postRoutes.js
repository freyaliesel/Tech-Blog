const router = require("express").Router();
const { Post } = require("../../models");
const { withAuth } = require("../../utils/auth");

// get all posts
router.get("/", async (req, res) => {
    try {
        const postData = await Post.findAll();
        const posts = postData.map((post) => post.get({ plain: true }));

        res.render("homepage", {
            posts,
            // loggedIn: req.session.loggedIn,
            // not sure if I need to have this here, need to display posts without being logged into a session
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// get single post
router.get("/posts/:id", withAuth, async (req, res) => {
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
});

// post post
router.post("/", withAuth, async (req, res) => {
    try {
        const newPost = await Post.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(201).json(newPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

// edit post
router.post("/:id", withAuth, async (req, res) => {
    try {
        const postToEdit = await Post.findByPk({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(201).json(postToEdit);
    } catch (err) {
        res.status(400).json(err);
    }
});

// delete post
router.delete("/:id", withAuth, async (req, res) => {
    try {
        const postData = await Post.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });
        res.status(201).json({message: "Post deleted."})
        if (!postData) {
            res.status(404).json({ message: "No post found with this id!" });
            return;
        }

        res.status(200).json(blogpostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
