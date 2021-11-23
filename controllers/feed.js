exports.getPosts = (req,res,next) => {
    res.status(200).json({
        posts: [
            {
                title: "My First Post!",
                content: "This is the content of my first post."
            }
        ]
    });
}

exports.createPost = (req,res,next) => {
    const title = req.body.title;
    const content = req.body.content;

    res.status(201).json({ //"200" is default status code, that would be valid but "201" is
        //more appropriate
        message: "Post created successfully!",
        post: {
            id: new Date().toISOString(),
            title: title,
            content: content
        }
    });
}