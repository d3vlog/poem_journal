var pages = 0
var current_page = 0

function setup() {
  pages = document.getElementsByClass("poem").length;
  document.getElementById(pages - (current_page + 1)).style.display = 'inherit';
}

function turn_page() {
  document.getElementById(pages - (current_page + 1)).style.display = 'none';
  if(current_page >= pages - 1) {
    current_page = 0;
  }
  else {
    current_page += 1;
  }
  document.getElementById(pages - (current_page + 1)).style.display = 'inherit';
}
