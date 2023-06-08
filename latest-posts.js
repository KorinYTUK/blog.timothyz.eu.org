document.addEventListener("DOMContentLoaded", function() {
  // Fetch the content of blogs/23/index.html
  fetch("blogs/23/index.html")
    .then(response => response.text())
    .then(data => {
      // Create a temporary div element
      var tempDiv = document.createElement("div");
      tempDiv.innerHTML = data;

      // Extract the post titles
      var postElements = tempDiv.querySelectorAll(".post h2");
      var postTitles = Array.from(postElements).map(element => element.textContent.trim());

      // Get the latest posts ul element
      var latestPosts = document.getElementById("latest-posts");

      // Create list items for each post title
      postTitles.forEach(function(title) {
        var listItem = document.createElement("li");
        var link = document.createElement("a");
        link.href = "blogs/23/index.html#" + title.toLowerCase().replace(/\s/g, "-");
        link.textContent = title;
        listItem.appendChild(link);
        latestPosts.appendChild(listItem);
      });
    })
    .catch(error => {
      console.error("Error fetching post titles:", error);
    });
});
