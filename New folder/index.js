// get references to necessary elements
const searchBar = document.getElementById("search-bar");
const postContainer = document.getElementById("post-container");

// create list of sample posts to display
const posts = [  {    username: "johndoe",    userImage: "https://via.placeholder.com/50",    postImage: "https://via.placeholder.com/500x500",    likes: 10,    comments: 2,    timestamp: "1 hour ago"  },  {    username: "janedoe",    userImage: "https://via.placeholder.com/50",    postImage: "https://via.placeholder.com/500x500",    likes: 7,    comments: 3,    timestamp: "2 hours ago"  },  {    username: "jimmydoe",    userImage: "https://via.placeholder.com/50",    postImage: "https://via.placeholder.com/500x500",    likes: 14,    comments: 1,    timestamp: "3 hours ago"  }];

// function to create post element for a given post object
function createPostElement(post) {
  // create necessary HTML elements
  const postElement = document.createElement("div");
  const postHeader = document.createElement("div");
  const userImage = document.createElement("img");
  const username = document.createElement("span");
  const postImage = document.createElement("img");
  const postFooter = document.createElement("div");
  const likeIcon = document.createElement("img");
  const likeCount = document.createElement("span");
  const commentIcon = document.createElement("img");
  const commentCount = document.createElement("span");
  const timestamp = document.createElement("span");

  // set element attributes and content
  postElement.classList.add("post");
  userImage.src = post.userImage;
  username.textContent = post.username;
  postImage.src = post.postImage;
  likeIcon.src = "like.png";
  likeCount.textContent = post.likes;
  commentIcon.src = "comment.png";
  commentCount.textContent = post.comments;
  timestamp.textContent = post.timestamp;

  // append elements to post element
  postHeader.appendChild(userImage);
  postHeader.appendChild(username);
  postElement.appendChild(postHeader);
  postElement.appendChild(postImage);
  postFooter.appendChild(likeIcon);
  postFooter.appendChild(likeCount);
  postFooter.appendChild(commentIcon);
  postFooter.appendChild(commentCount);
  postFooter.appendChild(timestamp);
  postElement.appendChild(postFooter);

  return postElement;
}

// function to display a list of posts on the page
function displayPosts(posts) {
  // clear existing posts from post container
  postContainer.innerHTML = "";

  // loop through list of posts and create post element for each one
  posts.forEach((post) => {
    const postElement = createPostElement(post);
    postContainer.appendChild(postElement);
  });
}

// function to filter posts by username
function filterPostsByUsername(posts, username) {
  return posts.filter((post) =>
    post.username.toLowerCase().includes(username.toLowerCase())
  );
}

// add event listener to search bar to filter posts on keyup
searchBar.addEventListener("keyup", () => {
  const filteredPosts = filterPostsByUsername(posts, searchBar.value);
  displayPosts(filteredPosts);
});

// initial display of all posts
displayPosts(posts);
