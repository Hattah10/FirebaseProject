const listItem = document.querySelector(".right ul li");

// Add click event listener to list item
listItem.addEventListener("click", function() {
  this.classList.toggle("active");
});

// Add click event listener to document
document.addEventListener("click", function(event) {
  // Check if clicked element is the list item or one of its descendants
  const isClickedItem = listItem.contains(event.target);
  event.preventDefault();
  // If the clicked element is not the list item or one of its descendants, remove the "active" class
  if (!isClickedItem) {
    listItem.classList.remove("active");
  }
});