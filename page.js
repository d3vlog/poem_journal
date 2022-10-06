var pages = 9;
var current_page = 0

function setup() {
  document.getElementById(pages - (current_page + 1)).style.display = 'block';
}

function turn_page() {
  document.getElementById(pages - (current_page + 1)).style.display = 'none';
  if(current_page >= pages) {
    current_page = 0;
  }
  else {
    current_page += 1;
  }
  document.getElementById(pages - (current_page + 1)).style.display = 'block';
}
