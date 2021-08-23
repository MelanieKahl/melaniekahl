//creates an alert
//alert('Hello World!');

/* 
This is a
multi-line comment
*/

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */

function openMenu() {

    var x = document.getElementById("portfolioTopnav");

    if (x.className === "topnav") {

      x.className += " responsive";

    } else {

      x.className = "topnav";

    }

  }

  var acc = document.getElementsByClassName("accordion");

var i;

for (i = 0; i < acc.length; i++) {

  acc[i].addEventListener("click", function() {

    /* Toggle between adding and removing the "active" class,

    to highlight the button that controls the panel */

    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */

    var panel = this.nextElementSibling;

    if (panel.style.display === "block") {

      panel.style.display = "none";

    } else {

      panel.style.display = "block";

    }

  });

}