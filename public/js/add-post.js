// NEEDS TO BE EDITED FOR POST LOGIC

async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector("#title").value;
    const content = document.querySelector("#content").value;
    // NEEDS LOGIC TO OBTAIN USER ID FOR POST CREATION
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
    //if the post is added, send user to their profile
    if (response.ok) {
        document.location.replace(`/user/:${user_id}`);
    } else {
        alert("Failed to add post");
    }
}

document
    .querySelector(".new-post-form")
    .addEventListener("submit", newFormHandler);
