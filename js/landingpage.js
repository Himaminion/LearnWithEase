const searchBar = document.getElementById("search-bar");
const searchPhrase = "Start Searching to Learn With Ease..";
let index = 0;

function typeSearchPhrase() {
  if (index < searchPhrase.length) {
    searchBar.value += searchPhrase[index];
    index++;
    setTimeout(typeSearchPhrase, 1000); // Adjust the typing speed here (in milliseconds)
  }
}

typeSearchPhrase();

