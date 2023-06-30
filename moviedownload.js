// moviedownload.js

function showCategoryContent(category) {
  const categoryContent = document.getElementById(category);
  const allCategoryContents = document.getElementsByClassName('category-content');

  for (let i = 0; i < allCategoryContents.length; i++) {
    allCategoryContents[i].style.display = 'none';
  }

  if (categoryContent) {
    categoryContent.style.display = 'block';
  }
}

function searchBlogPosts() {
  const searchInput = document.getElementById('search-input').value.toLowerCase();
  const blogPosts = document.getElementsByClassName('blog-post');

  for (let i = 0; i < blogPosts.length; i++) {
    const blogPostTitle = blogPosts[i].querySelector('.blog-post-title').textContent.toLowerCase();

    if (blogPostTitle.includes(searchInput)) {
      blogPosts[i].style.display = 'block';
    } else {
      blogPosts[i].style.display = 'none';
    }
  }
}

