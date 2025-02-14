'use strict';


/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function openTopnavClickDropDownTwo() {
    // Original Code
    // if (document.getElementById('topNavDropdown_2').classList.contains('topnav__dropdown-content-2--show')) {
    //     document.getElementById('topNavDropdown_2').classList.remove('topnav__dropdown-content-2--show');
    // } else {
    //     document.getElementById('topNavDropdown_2').classList.add('topnav__dropdown-content-2--show');
    // }
  
    // Shortened Code
    document.getElementById('topNavDropdown_2').classList.toggle('topnav__dropdown-content-2--show');
}

document.addEventListener('click', function(e) {
    if (e.target !== document.querySelector('.topnav__dropdown-btn-2')) {
        const dropdown = document.querySelector('.topnav__dropdown-content-2');

        if (dropdown.classList.contains('topnav__dropdown-content-2--show')) {
            dropdown.classList.remove('topnav__dropdown-content-2--show');
        }
    }
});