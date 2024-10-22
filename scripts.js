
const postForm = document.getElementById('post-form');
const usernameInput = document.getElementById('username');
const postContent = document.getElementById('post-content');
const postsList = document.getElementById('posts-list');
const postImageInput = document.getElementById('post-image');
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Load posts (Dummy Data for now)
async function loadPosts() {
    const posts = [
        { id: 1, username: "User1", content: "First Tumblr-like post with an image!", createdAt: Date.now(), likes: 10, imageUrl: "https://via.placeholder.com/400" },
        { id: 2, username: "User2", content: "Here's a second post, no image.", createdAt: Date.now(), likes: 5 },
        { id: 3, username: "User3", content: "Check out this image post!", createdAt: Date.now(), likes: 8, imageUrl: "https://via.placeholder.com/300" },
        { id: 4, username: "User4", content: "Another post with a cool image.", createdAt: Date.now(), likes: 12, imageUrl: "https://via.placeholder.com/450" },
    ];

    posts.forEach(post => {
        displayPost(post);
    });
}

// Display post in the feed
function displayPost(post) {
    const postDiv = document.createElement('div');
    postDiv.classList.add('post');
    postDiv.innerHTML = `
        <div class="post-info">
            <img src="default-avatar.png" alt="Profile Picture" class="profile-pic">
            <p><strong>${post.username}</strong>: ${post.content}</p>
        </div>
        <small>${new Date(post.createdAt).toLocaleString()}</small>
        ${post.imageUrl ? `<img src="${post.imageUrl}" alt="Post Image">` : ''}
        <div class="post-buttons">
            <button onclick="likePost(${post.id})">❤️ Like (${post.likes || 0})</button>
            <button onclick="reblogPost(${post.id})">🔄 Reblog</button>
        </div>
    `;
    postsList.append(postDiv);
}

// Dark Mode Toggle
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Add a new post
postForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const username = usernameInput.value;
    const content = postContent.value;
    let imageUrl = '';

    // Handle Image Upload
    if (postImageInput.files.length > 0) {
        const file = postImageInput.files[0];
        imageUrl = URL.createObjectURL(file);  // Create a local URL for the uploaded image
    }

    const post = { username, content, createdAt: Date.now(), likes: 0, imageUrl };
    displayPost(post);

    // Reset form
    postContent.value = '';
    usernameInput.value = '';
    postImageInput.value = '';  // Reset the image input
});

// Like Post
function likePost(id) {
    // Dummy increment like logic
    alert(`Post ${id} liked!`);
}

// Reblog Post
function reblogPost(id) {
    alert(`Post ${id} reblogged!`);
}

// Load all posts on page load
loadPosts();