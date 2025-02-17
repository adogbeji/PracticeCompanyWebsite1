'use strict';


// SECOND RESPONSIVE DROPDOWN

/* When the user clicks on the dots, toggle between hiding and showing the dropdown content */
function openTopnavLinkDotDropDownTwo() {
    // Original Code
    // if (document.getElementById('topNavLinkDotDropdown_2').classList.contains('topnav__link-dot_2-dropdown-content--show')) {
    //     document.getElementById('topNavLinkDotDropdown_2').classList.remove('topnav__link-dot_2-dropdown-content--show')
    // } else {
    //     document.getElementById('topNavLinkDotDropdown_2').classList.add('topnav__link-dot_2-dropdown-content--show')
    // }

    // Shortened Code
    document.getElementById('topNavLinkDotDropdown_2').classList.toggle('topnav__link-dot_2-dropdown-content--show');
}

// document.addEventListener('click', function(e) {
//     if (e.target !== document.querySelector('.topnav__link-dot-icon-box-2')) {
//         const dropdown = document.querySelector('.topnav__link-dot_2-dropdown-content');

//         if (dropdown.classList.contains('topnav__link-dot_2-dropdown-content--show')) {
//             dropdown.classList.remove('topnav__link-dot_2-dropdown-content--show');
//         }
//     }
// });



// HAMBURGER MENU ICON

/* Toggle between showing and hiding the navigation menu links when the user clicks 
   on the hamburger menu/bar icon */
   function openMobileMenu() {
    let x = document.getElementById('mobileLinks');
    if (x.style.display === 'block') {
        x.style.display = 'none'; 
    } else {
        x.style.display = 'block';
    }
}