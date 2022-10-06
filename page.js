var pages = 9;
var current_page = 0

document.getElementsById(pages - (current_page + 1)).style.visibility = 'visible';

function turn_page() {
  document.getElementsById(pages - (current_page + 1)).style.visibility = 'hidden';
  if(current_page >= pages) {
    current_page = 0;
  }
  else {
    current_page += 1;
  }
  document.getElementsById(pages - (current_page + 1)).style.visibility = 'visible';
}
