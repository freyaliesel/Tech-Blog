// NEEDS TO BE EDITED FOR COMMENT LOGIC

async function newCommentHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#comment-title").value;
    const content = document.querySelector("#comment-content").value;
    // NEEDS LOGIC TO ACQUIRE COMMENTERS ID
    const user_id = "";

    const response = await fetch(`/api/dish`, {
        method: "POST",
        body: JSON.stringify({
            title,
            content,
            user_id,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    });
    //if the comment is added, the page will be reloaded
    if (response.ok) {
        location.reload();
    } else {
        alert("Failed to add comment");
    }
}

document
    .querySelector(".new-comment-form")
    .addEventListener("submit", newCommentHandler);
