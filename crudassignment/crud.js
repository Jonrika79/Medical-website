// CRUD Operations using Async/Await and Fetch API

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// GET
async function getPosts() {
  try {
    const response = await fetch(API_URL);
    const posts = await response.json();

    console.log("GET Operation:");
    console.log(posts);
  } catch (error) {
    console.log("Error fetching posts:", error);
  }
}

// POST 
async function addPost() {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        title: "JavaScript Assignment",
        body: "This post is created using Fetch API with Async/Await.",
        userId: 101
      })
    });

    const newPost = await response.json();

    console.log("POST Operation:");
    console.log(newPost);
  } catch (error) {
    console.log("Error creating post:", error);
  }
}

//  UPDATE (PUT) 
async function updatePost() {
  try {
    const response = await fetch(`${API_URL}/1`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: 1,
        title: "Updated JavaScript Assignment",
        body: "This post has been updated successfully.",
        userId: 101
      })
    });

    const updatedPost = await response.json();

    console.log("PUT Operation:");
    console.log(updatedPost);
  } catch (error) {
    console.log("Error updating post:", error);
  }
}

//DELETE 
async function deletePost() {
  try {
    await fetch(`${API_URL}/1`, {
      method: "DELETE"
    });

    console.log("DELETE Operation:");
    console.log("Post deleted successfully.");
  } catch (error) {
    console.log("Error deleting post:", error);
  }
}

// Calling All Functions
getPosts();
addPost();
updatePost();
deletePost();