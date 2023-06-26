const searchInput = document.getElementById('search-input');
const blogPosts = document.getElementById('blog-posts').getElementsByClassName('blog-post');

searchInput.addEventListener('input', function() {
  const searchText = searchInput.value.toLowerCase();

  for (let i = 0; i < blogPosts.length; i++) {
    const blogPost = blogPosts[i];
    const title = blogPost.querySelector('h2').textContent.toLowerCase();

    if (title.includes(searchText)) {
      blogPost.style.display = 'block';
    } else {
      blogPost.style.display = 'none';
    }
  }
});
