const btn = document.querySelector(".btn-toggle");
        const theme = document.querySelector("#theme-link");
        btn.addEventListener("click", function() {
          // Swap out the URL for the different stylesheets
          if (theme.getAttribute("href") == "css/light-theme.css") {
            theme.href = "css/dark-theme.css";
          } else {
            theme.href = "css/light-theme.css";
          }
        });





// // When the user scrolls the page, execute myFunction
// window.onscroll = function() {myFunction()};

// // Get the navbar
// var navbar = document.getElementById("navbar");

// // Get the offset position of the navbar
// var sticky = navbar.offsetTop;

// // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }


// window.scroll = false;

$(".clickdiv").click(function() {
    window.location = "index.html#section02";
    document.getElementById("html").style.overflow = "auto";
    return false;
  });


//   document.getElementById("html").style.overflow = "hidden";

