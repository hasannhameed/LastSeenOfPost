let date = new Date();
let count=1;
let post = [];
function updateLastUserActivityTime() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(date);
        }, 1000);
    });
}

function createPost() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
                if (post.length >= 0) {
                    post.push("post"+count);
                    count++;
                    resolve(post);
                } else {
                    reject("empty posts");
                }
        }, 0);
    });
}

function deletePost() {
    return new Promise((resolve, reject) => {
        if (post.length <= 0) {
            reject("No posts to delete");
        } else {
            let o=post.pop();
            resolve(o+" deleted");
        }
    });
}

function displayPosts() {
    return new Promise((resolve, reject) => {
        resolve(post);
    });
}

createPost()
createPost()
    .then((resolvedPost) => {
        console.log(resolvedPost);
        return updateLastUserActivityTime();
    })
    .then((resolvedDate) => {
        console.log("last seen of post: "+resolvedDate);
        return deletePost();
    })
    .then((deletedPost) => {
        console.log(deletedPost);
        return displayPosts();
    })
    .then((displayedPosts) => {
        console.log("avalable posts")
        console.log(displayedPosts);
    })
